import { shallow } from 'enzyme';
import React from 'react';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  // Mock function for markAsRead
  const mockMarkAsRead = jest.fn();

  it('Tests that NotificationItem renders without crashing', () => {
    const wrapper = shallow(<NotificationItem markAsRead={mockMarkAsRead} id={1} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Passes dummy props and checks for correct HTML rendering for type and value', () => {
    const wrapper = shallow(
      <NotificationItem
        type="default"
        value="Test Notification"
        markAsRead={mockMarkAsRead}
        id={1}
      />
    );
    expect(wrapper.find('li').text()).toBe('Test Notification');
    expect(wrapper.find('li').hasClass('default')).toBe(true);
  });

  it('Passes dummy `html` prop and checks for correct HTML rendering', () => {
    const wrapper = shallow(
      <NotificationItem
        html={{ __html: 'dangerouslySetInnerHtml' }}
        markAsRead={mockMarkAsRead}
        id={1}
      />
    );
    expect(wrapper.html()).toContain('dangerouslySetInnerHtml');
  });

  it('Calls markAsRead with the correct id when clicked', () => {
    const wrapper = shallow(
      <NotificationItem
        type="urgent"
        value="Urgent Notification"
        markAsRead={mockMarkAsRead}
        id={1}
      />
    );
    wrapper.find('li').simulate('click');
    expect(mockMarkAsRead).toHaveBeenCalledWith(1);
  });
});

