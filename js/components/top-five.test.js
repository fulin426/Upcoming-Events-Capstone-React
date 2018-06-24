import React from 'react';
import {shallow, mount, render} from 'enzyme';

import TopFive from './top-five';

describe('<TopFive />', () => {
	it('Renders without crashing', () => {
		shallow(<TopFive />);
	});
});