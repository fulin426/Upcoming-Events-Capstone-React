import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Footer(props) {
	return (
	<footer role="contentinfo">
		<p>© Fu-Lin Liu</p>
		<div className="contacts-wrapper">
			<div className="contact-logo email">
				<a href="mailto:fulin426@gmail.com?subject=Hello%20There" aria-label="email contact info">
				<i className="far fa-envelope fa-2x"></i>
				</a>
			</div>
			<div className="contact-logo linkedin">
				<a href="https://www.linkedin.com/in/fu-lin-liu-46694714/' aria-label='Linkedin Page">
				<i className="fab fa-linkedin fa-2x"></i>
				</a>
			</div>
			<div className="contact-logo github">
				<a href="https://github.com/fulin426'aria-label='Github Account">
				<i className="fab fa-github fa-2x"></i>
				</a>
			</div>
		</div>
	</footer>
	)
}