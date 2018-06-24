import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Login from './login';

describe('<Login />', () => {
	it('Renders without crashing', () => {
		shallow(<Login />);
	});
});