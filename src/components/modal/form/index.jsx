import React from 'react';
import PropTypes from 'prop-types';
import ModalHeader from '../shared/ModalHeader';
import ModalControlButton from '../shared/ModalControlButton';
import ModalControls from '../shared/ModalControls';
import ModalForm from './ModalForm';

const ModalFormContainer = ({ onClose, onSubmit}) => {
  const closeModal = () => onClose();

  const submitForm = form => {
    const submitedData = {
      name: form.name.value,
      format: form.format.value,
      email: form.email.value,
      schedule: form.schedule.value,
    };
    if (form.hour) {
      submitedData.hour = form.hour.value;
    }
    if (form.weekday) {
      submitedData.day = form.day.value;
    }
    if (form.scheduledDate) {
      submitedData.date = form.scheduledDate.value;
    }

    onSubmit(submitedData);
  };

  return (
    <>
      <ModalHeader title='Export Report' />
      <ModalForm onSubmit={submitForm} />
      <ModalControls>
        <ModalControlButton buttonText='Cancel' handleClick={closeModal} />
        <ModalControlButton
          form='modalForm'
          type='submit'
          buttonText='OK'
        />
      </ModalControls>
    </>
  );
};

ModalFormContainer.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default ModalFormContainer;
