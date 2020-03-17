import React from 'react';
import PropTypes from 'prop-types';
import ModalHeader from '../shared/ModalHeader';
import ModalControlButton from '../shared/ModalControlButton';
import ModalControls from '../shared/ModalControls';
// import ModalFormContainer from './ModalFormContainer';

const ModalSummary = ({ onClose }) => {

  const closeModal = () => onClose();



  return (
    <>
      <ModalHeader title='Request Summary' />
      <div>Summary</div>
      <ModalControls>
        <ModalControlButton buttonText='OK' handleClick={closeModal} />
      </ModalControls>
    </>
  );
};

export default ModalSummary;
