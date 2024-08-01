import { shallow } from 'enzyme';
import React from 'react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists()).toBe(true);
	});

	it('renders the correct text when displayDrawer is false', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);
		expect(wrapper.find('.menuItem').text()).toContain('Your notifications');
	});

	it('renders the menuItem when displayDrawer is false', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);
		expect(wrapper.find('.menuItem').length).toBe(1);
	});

	it('does not render the Notifications div when displayDrawer is false', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);
		expect(wrapper.find('.Notifications').length).toBe(0);
	});

	it('renders the menuItem when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
		expect(wrapper.find('.menuItem').length).toBe(1);
	});

	it('renders the Notifications div when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
		expect(wrapper.find('.Notifications').length).toBe(1);
	});

	it('renders "No notification available yet" when listNotifications is empty', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
		expect(wrapper.find(NotificationItem).length).toBe(0);
		expect(wrapper.text()).toContain('No notification available yet');
	});

	it('renders NotificationItems correctly when listNotifications is passed', () => {
		const listNotifications = [
			{ id: 1, type: 'default', value: 'New course available' },
			{ id: 2, type: 'urgent', value: 'New resume available' },
			{ id: 3, html: { __html: '<strong>Urgent requirement</strong>' }, type: 'urgent' },
		];
		const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
		expect(wrapper.find(NotificationItem).length).toBe(3);
	});
});


