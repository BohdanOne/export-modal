import React from 'react';
import { shallow } from 'enzyme';

import ModalHeader from '../../../components/shared/ModalHeader';

describe('<ModalHeader />', () => {
  it('renders h2 with provided title', () => {
    const wrapper = shallow(<ModalHeader title='test' />);

    expect(wrapper.find('h2').length).toEqual(1);
    expect(wrapper.find('h2').text()).toEqual('test');
  });
});
