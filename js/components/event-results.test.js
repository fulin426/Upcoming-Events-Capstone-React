import React from 'react';
import {shallow, mount, render} from 'enzyme';

import EventResults from './event-results';

describe('<EventResult />', () => {
	it('Renders without crashing', () => {
		shallow(<EventResult />);
	});
});