import React, {Component} from 'react';
import DocumentTitle from 'react-document-title';

import BlueCircle_greyBG from './Loading/blueCircle_greyBG';
import Learner_Home from './Home/learner_Home';
import Instructor_Home from './Home/instructor_Home';

import Func_Util from '/imports/api/functional/func_Util';


/****** TODO *************
* Add content      **/


/* ::L_NOTE::
 * ( ... ) => {  ...  }    represents a function (es6).
 * The words inside the () brackets are the parameter,
 * The words inside the {} brackets are the function's execution code.
 */
class Home extends Component {

   constructor(){
      super();


      this.state = {
         content: <BlueCircle_greyBG />,
      };
   }


   getUnloggedPage(){
      return(
         <div className="standard-content">
            WELCOME TO PHRASEDIDACT!
         </div>
      );
   }


   componentWillMount() {

      let result = Func_Util.fetchAccountType_OnLoad();

      if( result > 0 ){
         this.state = {
            content: <Learner_Home />
         };
      }
      else if( result < 0 ){
         this.state = {
            content: <Instructor_Home />
         };
      }
      else{
         this.state = {
            content: this.getUnloggedPage()
         };
      }

   }

   render(){
      return (
   		<DocumentTitle title='Home - PhraseDidact'>

            {this.state.content}

   		</DocumentTitle>
      );
   }
}


/* ::L_NOTE::
 * Enable ability: When	this component is imported in other classes, using the < *reference name of this class' import* /> there
 * will execute the code within the const 'Home'.
 * i.e.	< *Component name* />   represents a function. */
export default Home;
