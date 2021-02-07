import { configure, mount } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Profile from './profile.view';

configure({ adapter: new Adapter(), disableLifecycleMethods: true });

let wrapper;
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({ users: { user: { bookings: [] } }, errorMessage: '' });

describe('Profile View', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Profile match={{ params: { username: 'test' } }} />
      </Provider>,
    );
  });

  it('should not have table', () => {
    expect(wrapper.find('table').exists()).toBeFalsy();
  });
});
