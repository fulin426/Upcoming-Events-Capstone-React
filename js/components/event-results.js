import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function EventResults(props) {
	return (
		<div>
			<div className="events-row my-results">
				<div className="col-12 my-results-header">
					<h1 id="search-header">Upcoming Performances</h1>
					<a href="https://www.songkick.com/" target="_blank">
						<img className="songkick_logo"src="https://raw.githubusercontent.com/fulin426/React-Capstone/master/public/Images/powered-by-songkick-black.png" alt="songkick logo" />
					</a>
				</div>
			</div>
			<div className="my-search-results-container" aria-live="assertive" hidden >
			</div>
		</div>	
	)
}