import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function TopFive(props) {
	return (
			<div className="col-6 favorite-artists">
				<div className="favorites-header-wrapper">
					<h2>Top 5 <i className="fas fa-star"></i></h2>
				</div>
				<div className="favorite-artists-container">
					<input type="hidden" name="topArtists-id" id="topArtists-id" />
					<div className="favorites-artist-wrapper">
						<input id="artist-1" className="fav-artist-input" />
						<div className="icons-wrapper"> 
							<i className="fas fa-edit"></i>
							<i className="far fa-eye"></i>
						</div>
					</div>
					<div className="favorites-artist-wrapper">
						<input id="artist-2" className="fav-artist-input" />
						<div className="icons-wrapper"> 
							<i className="fas fa-edit"></i>
							<i className="far fa-eye"></i>
						</div>
					</div>
					<div className="favorites-artist-wrapper">
						<input id="artist-3" className="fav-artist-input" />
						<div className="icons-wrapper"> 
							<i className="fas fa-edit"></i>
							<i className="far fa-eye"></i>
						</div>
					</div>
					<div className="favorites-artist-wrapper">
						<input id="artist-4" className="fav-artist-input" />
						<div className="icons-wrapper"> 
							<i className="fas fa-edit"></i>
							<i className="far fa-eye"></i>
						</div>
					</div>
					<div className="favorites-artist-wrapper">
						<input id="artist-5" className="fav-artist-input" />
						<div className="icons-wrapper"> 
							<i className="fas fa-edit"></i>
							<i className="far fa-eye"></i>
						</div>
					</div>
				</div>
			</div>
	)
}