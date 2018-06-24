import React from 'react';
import {shallow, mount, render} from 'enzyme';

import MyEvents from './my-events';

describe('<MyEvents />', () => {
	it('Renders without crashing', () => {
		shallow(<MyEvents />);
	});
});