import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function SearchBar(props) {
	return (
		<div className="col-6 search-section">		
			<p id="welcome-user">Welcome</p>
			<form className="searchbar-button-container" role="search">
				<input className="events-search-bar" value="" type="search" placeholder="Search Artist" />
				<button className="events-search-button" role="button"><i className="fas fa-search"></i></button>
			</form>
		</div>
	)
}