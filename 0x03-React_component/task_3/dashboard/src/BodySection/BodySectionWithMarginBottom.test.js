import { shallow } from '../../config/setupTests';
import React from 'react';
import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom', () => {
  it('Checks that component correctly renders a <BodySection /> component', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom />);
    expect(wrapper.find(BodySection).exists()).toBe(true);
  });

  it('Checks that props are passed correctly to child component', () => {
    const title = 'test title';
    const children = <p>test children</p>;
    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title}>
        {children}
      </BodySectionWithMarginBottom>
    );
    const bodySection = wrapper.find(BodySection);
    expect(bodySection.props().title).toBe(title);
    expect(bodySection.contains(children)).toBe(true);
  });

  it('Checks that default props are applied correctly', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom />);
    const bodySection = wrapper.find(BodySection);
    expect(bodySection.props().title).toBeDefined();
    expect(bodySection.props().children).toEqual(<React.Fragment />);
  });
});

