import { shallow } from 'enzyme';
import React from 'react';
import NotificationItem from './NotificationItem';

// shallow render NotificationItem component
describe('<NotificationItem />', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<NotificationItem />);
		expect(wrapper.exists()).toBe(true);
	});

	it('renders correct text when `type` and `value` props are passed', () => {
		const wrapper = shallow(<NotificationItem type="default" value="test" />);
		expect(wrapper.find('li').text()).toBe('test');
		expect(wrapper.find('li').prop('data-notification-type')).toBe('default');
	});

	it('renders correct HTML when `html` prop is passed', () => {
		const wrapper = shallow(<NotificationItem html={{ __html: 'dangerouslySetInnerHtml' }} />);
		expect(wrapper.html()).toContain('dangerouslySetInnerHtml');
		expect(wrapper.find('li').prop('data-notification-type')).toBe('default');
	});
});

