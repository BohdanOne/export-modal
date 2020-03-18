import React from 'react';
import PropTypes from 'prop-types';
import ModalHeader from '../shared/ModalHeader';
import ModalControlButton from '../shared/ModalControlButton';
import ModalControls from '../shared/ModalControls';
import ModalForm from './ModalForm';
import collectFormData from '../../utils/collectFormData';

const ModalFormContainer = ({ onClose, onSubmit }) => {
  const closeModal = () => onClose();

  const submitForm = form => {
    onSubmit(collectFormData(form));
  };

  return (
    <>
      <ModalHeader title='Export Report' />
      <ModalForm onSubmit={submitForm} />
      <ModalControls>
        <ModalControlButton
          styleName='modal__btn--close'
          buttonText='Cancel'
          handleClick={closeModal}
          ariaLabel='Close from without sending data'
        />
        <ModalControlButton
          styleName='modal__btn--submit'
          form='modalForm'
          type='submit'
          buttonText='OK'
          ariaLabel='Submit form and send data'
        />
      </ModalControls>
    </>
  );
};

ModalFormContainer.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default ModalFormContainer;
