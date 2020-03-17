import React from 'react';
import { shallow } from 'enzyme';
import ModalSummaryContainer from '../../../components/summary';
import ModalHeader from '../../../components/shared/ModalHeader';
import ModalSummary from '../../../components/summary/ModalSummary';
import ModalControlButton from '../../../components/shared/ModalControlButton';

describe('<ModalSummaryContainer />', () => {
  it('renders Header, Summary and Close Button', () => {
    const wrapper = shallow(<ModalSummaryContainer />);

    expect(wrapper.find(ModalHeader).length).toEqual(1);
    expect(wrapper.find(ModalSummary).length).toEqual(1);
    expect(wrapper.find(ModalControlButton).length).toEqual(1);
  });
});