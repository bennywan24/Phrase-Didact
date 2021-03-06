import Courses_Configs from '/imports/collections/courses_Configs';
import Courses_Words from '/imports/collections/courses_Words';

import Func_Util from '/imports/api/functional/func_Util';


Meteor.methods({

   'instructor.addCourse': (courseName, access, description, tags) => {

      if( Roles.userIsInRole( Meteor.userId(), "INSTR" )    &&
            tags.length <= 1000
      ){

         let tagArray = Func_Util.replaceNewLinesWithSpace(tags).split( " " );

         try{

            Courses_Configs.insert({
               userId : Meteor.userId(),
               courseName,
               access,
               description,
               tags : tagArray,

               createdAt: new Date()
            });

         }
         catch(err) {

            // Useful error messages
            if( err.message.lastIndexOf("E11000", 0) === 0 ){
               throw new Meteor.Error("E11000");
            }
            else{
               throw err;
            }

         }

      }
   },

   'instructor.removeCourse': (courseName) => {
      if( Roles.userIsInRole( Meteor.userId(), "INSTR" ) ){

         // courseId required to access Courses_Words collection + validate course ownership
         let course = Courses_Configs.findOne( {userId : Meteor.userId(), courseName} );

         if(course){
            // associated database like Courses_Words & Words_Attempts are kept for Learner's record
            Courses_Configs.remove( { userId : Meteor.userId(), courseName } );
         }

      }
   },


   'instructor.fetchCourseByUser': (courseName) => {
      if( Roles.userIsInRole( Meteor.userId(), "INSTR" ) ){

         let result = Courses_Configs.findOne( { userId : Meteor.userId(), courseName } );
         if(result){
            return result;
         }

      }

   },


   'instructor.addWord': (courseName, l2_wordName, l2_examples, l1_wordName, l1_examples, difficultyLevel) => {

      if( Roles.userIsInRole( Meteor.userId(), "INSTR" )    &&
            l2_examples.length <= 1000 && l1_examples.length <= 1000
      ){

         // check the "course the words belong to it" is created by the user
         let course = Meteor.call('instructor.fetchCourseByUser', courseName);

         if(course){
            let l2_example_Array = l2_examples.split( "\n" );
            let l1_example_Array = l1_examples.split( "\n" );

            Courses_Words.insert({
               userId : Meteor.userId(),
               courseId : course._id,
               l2_wordName,
               l2_examples : l2_example_Array,
               l1_wordName,
               l1_examples : l1_example_Array,
               difficultyLevel,

               createdAt: new Date()
            });
         }

      }

   },

   'instructor.editWord': (word_pair_id, l2_wordName, l2_examples, l1_wordName, l1_examples, difficultyLevel) => {

      if( Roles.userIsInRole( Meteor.userId(), "INSTR" )                   &&
            l2_examples.length <= 1000 && l1_examples.length <= 1000       &&
            Courses_Words.findOne( { userId : Meteor.userId(), _id : word_pair_id } )        // check word pair actually belongs to the user
      ){

         let l2_example_Array = l2_examples.split( "\n" );
         let l1_example_Array = l1_examples.split( "\n" );

         Courses_Words.update(
            {_id :  word_pair_id } ,
            {$set:
               {
                  l2_wordName,
                  l2_examples : l2_example_Array,
                  l1_wordName,
                  l1_examples : l1_example_Array,
                  difficultyLevel
               }
            }
         );

      }

   },

   'instructor.removeWord': (word_pair_id) => {
      if( Roles.userIsInRole( Meteor.userId(), "INSTR" ) ){

         // remove operation will only succeed if word have current user's userId associated with it
         Courses_Words.remove( { userId : Meteor.userId(), "_id" : word_pair_id } );

      }
   }

   // // TODO not implemented group yet
   // 'instructor.addGroup': (groupName) => {
   //
   //    if( Roles.userIsInRole( Meteor.userId(), "INSTR" ) ){
   //
   //       Instructor_Courses.insert({
   //          userId : Meteor.userId(),
   //          groupName
   //
   //       });
   //
   //    }
   //
   // }

});
