import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import React from 'react';
import Login from './Login';
import WithLoggingHOC from '../HOC/WithLogging';

// Shallow render/mount Login component
describe('<Login />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 2 <input> and 2 <label> tags', () => {
    const wrapper = mount(<Login />);
    expect(wrapper.find('input').length).toBe(2);
    expect(wrapper.find('label').length).toBe(2);
    wrapper.unmount();
  });
});

// Test for the WithLogging HOC
describe('WithLoggingHOC', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    jest.clearAllMocks();
  });

  it('calls console.log on mount and unmount', () => {
    const WrappedComponent = WithLoggingHOC(Login);
    const wrapper = mount(<WrappedComponent />);
    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});

