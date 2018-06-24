import React from 'react';
import {shallow, mount, render} from 'enzyme';

import SearchBar from './search-bar';

describe('<SearchBar />', () => {
	it('Renders without crashing', () => {
		shallow(<SearchBar />);
	});
});