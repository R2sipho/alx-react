import { shallow, mount } from '../../config/setupTests';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';
import Login from '../Login/Login';

window.alert = jest.fn();

// suppress styles
beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  jest.clearAllMocks();
});

// Shallow render tests for <App />
describe('<App /> shallow rendering', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('contains Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header').length).toBe(1);
  });

  it('contains Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).toBe(true);
  });

  it('contains Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer').length).toBe(1);
  });

  it('does not display CourseList when isLoggedIn is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList').length).toBe(0);
  });
});

// Tests for when isLoggedIn is true
describe('<App /> when isLoggedIn is true', () => {
  it('does not render Login component', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.contains(<Login />)).toBe(false);
  });

  it('renders CourseList component', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('CourseList').length).toBe(1);
  });
});

// Tests for keyDownHandler method
describe('<App /> keyDownHandler tests', () => {
  it('calls alert when ctrl-h is pressed', () => {
    const wrapper = mount(<App isLoggedIn={true} />);
    wrapper.instance().keyDownHandler({ keyCode: 72, ctrlKey: true });
    expect(window.alert).toHaveBeenCalled();
    wrapper.unmount();
  });

  it('calls logOut function when ctrl-h is pressed', () => {
    const ConsoleSpy = jest.spyOn(global.console, 'log');
    const wrapper = mount(<App isLoggedIn={true} />);
    wrapper.instance().keyDownHandler({ keyCode: 72, ctrlKey: true });
    expect(ConsoleSpy).toHaveBeenCalledWith('logOut function console log for testing');
    wrapper.unmount();
  });
});

