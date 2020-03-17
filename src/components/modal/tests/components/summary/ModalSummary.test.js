import React from 'react';
import { shallow } from 'enzyme';
import ModalSummary from '../../../components/summary/ModalSummary';

describe('<ModalSummary />', () => {
  it('displays provided data', () => {
    const wrapper = shallow(<ModalSummary data={{ name: 'name-test' }} />);
    expect(wrapper.text()).toContain('name-test');
  })
})