import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Header(props) {
	return (
		<div>
			<div class='my-events-header'>
				<h1>My Events</h1>
			</div>
			<div class='my-saved-events-container' aria-live="assertive" hidden>
			</div>
		</div>	
	)
}