import React from 'react';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;
import {Provider} from 'react-redux';

import Header from '../js/components/header';
import Footer from '../js/components/footer';
import LandingPage from '../js/components/landing-page';
import Login from '../js/components/login';
import Signup from '../js/components/signup';
import SearchBar from '../js/components/search-bar';
import TopFive from '../js/components/top-five';
import EventResults from '../js/components/event-results';
import MyEvents from '../js/components/my-events';

document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<Header />,
		document.getElementById('reactHeader'));} );

document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<Footer />,
		document.getElementById('reactFooter'));} );

document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<LandingPage />,
		document.getElementById('reactLandingPage'));} );

document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<Login />,
		document.getElementById('reactLogin'));} );

document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<Signup />,
		document.getElementById('reactSignup'));} );

document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<SearchBar  />,
		document.getElementById('reactSearchBar'));} );

document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<TopFive  />,
		document.getElementById('reactTopFive'));} );

document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<MyEvents  />,
		document.getElementById('reactMyEvents'));} );

document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<EventResults  />,
		document.getElementById('reactEventResults'));} );

