import { shallow } from 'enzyme';
import React from 'react';
import CourseListRow from './CourseListRow';

// Shallow render CourseListRow component
describe('<CourseListRow />', () => {
  it('renders one cell with colspan=2 when isHeader is true and textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
    const th = wrapper.find('th');
    expect(th.exists()).toBe(true);
    expect(th.prop('colSpan')).toBe('2');
    expect(th.text()).toBe('test');
  });

  it('renders two cells when isHeader is true and textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test2" />);
    const th = wrapper.find('th');
    expect(th.length).toBe(2);
    expect(th.at(0).text()).toBe('test');
    expect(th.at(1).text()).toBe('test2');
  });

  it('renders two td elements within a tr element when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test2" />);
    const tr = wrapper.find('tr');
    const td = wrapper.find('td');
    expect(tr.length).toBe(1);
    expect(td.length).toBe(2);
    expect(td.at(0).text()).toBe('test');
    expect(td.at(1).text()).toBe('test2');
  });
});

