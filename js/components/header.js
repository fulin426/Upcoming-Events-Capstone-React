import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Header(props) {
	return (
		<nav role="navigaton">
			<h1 role='heading' className="nav-title">Upcoming Events</h1>
			<input type="hidden" name="loggedin-user" className="loggedin-user" value="" />
			<h2 className="log-out">Log Out</h2> 
		</nav>
	)
}