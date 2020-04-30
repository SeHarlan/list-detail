import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App component', () => {
  const wrapper = shallow(<App />);
  it('renders App', () => {
    expect(wrapper).toMatchSnapshot();
  });
  // it('changes page #', () => {
  //   wrapper.changePage(1);
  //   expect(wrapper.state('page')).toEqual(2);
  // });
});
  
