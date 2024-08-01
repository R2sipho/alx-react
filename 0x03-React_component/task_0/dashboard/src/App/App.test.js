import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
import Login from '../Login/Login';

describe('<App />', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it('renders without crashing', () => {
		expect(wrapper.exists()).toBe(true);
	});

	it('contains the Header component', () => {
		expect(wrapper.find('Header').length).toBe(1);
	});

	it('contains the Login component', () => {
		expect(wrapper.contains(<Login />)).toBe(true);
	});

	it('contains the Footer component', () => {
		expect(wrapper.find('Footer').length).toBe(1);
	});

	it('does not display the CourseList component when isLoggedIn is false', () => {
		expect(wrapper.find('CourseList').length).toBe(0);
	});
});

describe('<App /> when isLoggedIn is true', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App isLoggedIn={true} />);
	});

	it('does not render the Login component', () => {
		expect(wrapper.contains(<Login />)).toBe(false);
	});

	it('renders the CourseList component', () => {
		expect(wrapper.find('CourseList').length).toBe(1);
	});
});

