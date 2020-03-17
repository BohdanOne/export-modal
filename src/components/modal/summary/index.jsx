import React from 'react';
import PropTypes from 'prop-types';
import ModalHeader from '../shared/ModalHeader';
import ModalControlButton from '../shared/ModalControlButton';
import ModalControls from '../shared/ModalControls';

const ModalSummary = ({ onClose, data }) => {
  const closeModal = () => onClose();

  return (
    <>
      <ModalHeader title='Request Summary' />
      <div>{data.name}</div>
      <ModalControls>
        <ModalControlButton buttonText='OK' handleClick={closeModal} />
      </ModalControls>
    </>
  );
};

ModalSummary.propTypes = {
  onClose: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

export default ModalSummary;
