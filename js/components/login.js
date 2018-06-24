import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Login(props) {
	return (
	<section id="login-page" className="login-sign-pages">
		<form className="signup-login-form" role="form">
			<fieldset className="labels-inputs">
				<legend className="login-signup-header">Log In</legend>
				<p>Demo email: demo@demo.com</p>
				<p>Demo password: demo</p>
				<div className="labels-inputs-container">
					<label className="signup-pass-label">Email:</label>
					<input className="email-password-input" id="login-email" type="email" placeholder="e.g., demo@demo.com" required value="" />
					<label className="signup-pass-label">Password:</label>
					<input className="email-password-input" id="login-password" type="password" placeholder="e.g., demo-password"  required value=""/>
				</div>
				<button type="submit" id="login-events-page" className="signup-login-button">Log In</button>	
			</fieldset>
			<div className="already-member">
				<p>Not a member? <a id="login-form-signup-trigger" href="#" aria-label="member sign up">Sign Up</a></p>
			</div>
		</form>
	</section>
	)
}