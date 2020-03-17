import React from 'react';
import { shallow } from 'enzyme';

import Spinner from '../../../components/shared/Spinner';

describe('<Spinner />', () => {
  it('renders paragraph with provided message', () => {
    const wrapper = shallow(<Spinner message='test' />);
    expect(wrapper.find('p').text()).toEqual('test');
  });
});
