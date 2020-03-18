import React from 'react';
import PropTypes from 'prop-types';
import ModalHeader from '../shared/ModalHeader';
import ModalControlButton from '../shared/ModalControlButton';
import ModalControls from '../shared/ModalControls';
import ModalSummary from './ModalSummary';

const ModalSummaryContainer = ({ onClose, data }) => {
  const closeModal = () => onClose();

  return (
    <>
      <ModalHeader title='Request Submitted!' />
      <ModalSummary data={data} />
      <ModalControls>
        <ModalControlButton
          styleName='modal__btn--close'
          buttonText='OK'
          handleClick={closeModal}
          ariaLabel='Close submission summary'
        />
      </ModalControls>
    </>
  );
};

ModalSummaryContainer.propTypes = {
  onClose: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

export default ModalSummaryContainer;
