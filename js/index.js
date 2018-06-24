import React from 'react';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;
import {Provider} from 'react-redux';

import Header from '../js/components/header';
import Footer from '../js/components/footer';
import LandingPage from '../js/components/landing-page';
import Login from '../js/components/login';

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