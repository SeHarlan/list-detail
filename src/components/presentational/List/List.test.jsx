import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('List component', () => {
  it('renders List', () => {
    const wrapper = shallow(<List characters={[{ _id: 1, name: 'aang' }]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
