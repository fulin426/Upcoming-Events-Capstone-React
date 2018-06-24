import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Signup(props) {
	return (
	<section id="sign-up-page" className="login-sign-pages">
		<form className="signup-login-form" role="form">
			<fieldset className="labels-inputs">
				<legend className="login-signup-header">Create Account</legend>
				<div className="labels-inputs-container">
					<label className="signup-pass-label">Email:</label>
					<input className="email-password-input" id="signup-email" type="email" placeholder="e.g., new@demo.com" required value="" />
					<label className="signup-pass-label">Password:</label>
					<input className="email-password-input" id="signup-password" type="password" placeholder="e.g., new-password"  required value="" />
				</div>
				<button type="submit" id="signup-events-page" className="signup-login-button">Create New Account</button>	
			</fieldset>
			<div className="already-member">
				<p>Already a member? <a id="login-form-login-trigger" href="#">Sign In</a></p>
			</div>
		</form>
	</section>
	)
}