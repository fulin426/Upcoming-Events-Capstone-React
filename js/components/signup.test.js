import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Signup from './signup';

describe('<Signup />', () => {
	it('Renders without crashing', () => {
		shallow(<Signup />);
	});
});