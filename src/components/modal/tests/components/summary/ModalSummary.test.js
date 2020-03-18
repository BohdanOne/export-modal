import React from 'react';
import { mount } from 'enzyme';
import ModalSummary from '../../../components/summary/ModalSummary';

describe('<ModalSummary />', () => {
  it('displays provided data', () => {
    const wrapper = mount(<ModalSummary data={{ name: 'name-test' }} />);
    expect(wrapper.text()).toContain('name-test');
  })
})