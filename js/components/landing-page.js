import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function LandingPage(props) {
	return (
	<section id="landing-page">	
		<div className="landing-image-container">
			<div className="login-getstarted-wrapper">
				<div className="log-in">
					<button id="login-trigger" className="log-in-button">Log In</button>
				</div>
				<div className="not-member">
					<div className="not-member-text">
						<p>Not a member? Let's</p>
					</div>
					<div className="get-started">
						<button id="get-started-trigger" className="get-started-button">Get Started</button>
					</div>
				</div>
			</div>	
		</div>
		<div className="row icons-container">
			<div className="col-4">
				<div className="icon search">
					<h2 className="icon-description">SEARCH</h2>
					<i className="fas fa-search fa-8x"></i>
				</div>
			</div>
			<div className="col-4">
				<div className="icon calendar">
					<h2 className="icon-description">ADD EVENTS</h2>
					<i className="far fa-calendar-alt fa-8x"></i>
				</div>
			</div>
			<div className="col-4">
				<div className="icon music">
					<h2 className="icon-description">ENJOY MUSIC</h2>
					<i className="fas fa-music fa-8x"></i>
				</div>
			</div>	
		</div>
	</section>
	)
}