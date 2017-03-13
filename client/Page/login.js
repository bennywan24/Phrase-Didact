/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React, {Component} from 'react';

import LoginForm_C from './Login/loginForm';
import RegisterEntr_C from './Login/registerEntr';


// TODO Change this class before FINAL release

class Login extends Component{

	constructor(){
		super();

		this.login_head_content = null;
		this.navbar_content = null;
		this.login_head_content_width = 0;
	}

	componentDidMount() {

		/************** TODO         If unlogged only *****************/

		this.login_head_content = $( "#login-head-content" );
		this.navbar_content = $( "#navbar-content" );
		this.login_head_content_width = this.login_head_content.width();

		this.navbar_content.css("width", ( this.navbar_content.width() - this.login_head_content_width ) + "px" );
		this.login_head_content.hide();
	}

	componentWillUnmount() {

		/************** TODO         If unlogged only *****************/
		this.navbar_content.css("width", ( this.navbar_content.width() + this.login_head_content_width ) + "px" );
		this.login_head_content.show();
	}

	render(){
		return (
			<div id="login-content" className="h-center">
				<LoginForm_C />
				<RegisterEntr_C />
			</div>
		);
	}
};

export default Login;
