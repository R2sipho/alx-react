import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer Component', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders footer', () => {
    expect(wrapper.find('footer.footer').exists()).toBe(true);
  });
});

