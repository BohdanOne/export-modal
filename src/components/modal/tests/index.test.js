import React from 'react';
import { shallow, mount } from 'enzyme';
import ModalContainer from '../../modal';
import ModalControlButton from '../components/shared/ModalControlButton';
import ModalLayout from '../components/shared/ModalLayout';

describe('<ModalContainer />', () => {
  it('renders <ModaLControlButton /> on start-up', () => {
    const wrapper = shallow(<ModalContainer />);
    expect(wrapper.find(ModalControlButton).length).toEqual(1);
  });

  it('renders <ModalLayout /> and Hide Button on <ModalControlButton /> click', () => {
    const wrapper = mount(<ModalContainer />);
    expect(wrapper.find('.modal__btn--open').length).toEqual(1);
    wrapper.find('.modal__btn--open').simulate('click');
    expect(wrapper.find('.modal__btn--open').length).toEqual(0);
    expect(wrapper.find(ModalLayout).length).toEqual(1);
  });
});