import React from 'react';
import { shallow } from 'enzyme';
import Detail from './Detail';

describe('detail component', () => {
  it('renders detail', () => {
    const wrapper = shallow(<Detail name="aang" photoUrl="url.com" affiliation="test aff"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
