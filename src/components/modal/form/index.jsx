import React from 'react';
import PropTypes from 'prop-types';
import ModalHeader from '../shared/ModalHeader';
import ModalControlButton from '../shared/ModalControlButton';
import ModalControls from '../shared/ModalControls';
import ModalFormContainer from './ModalFormContainer';

const ModalForm = ({ onClose, onSubmit}) => {
  const closeModal = () => onClose();

  const submitForm = () => {
    onSubmit()
    // const submitedData = {
    //   name: form.name.value,
    //   format: format,
    //   email: form.email.value,
    //   schedule: schedule
    // };
    // if (schedule) {
    //   submitedData.hour = form.hour.value;
    // }
    // if (schedule === 'weekly') {
    //   submitedData.day = form.weekday.value;
    // }
    // if (schedule === 'date') {
    //   submitedData.date = form.scheduledDate.value;
    // }

    // const res = await fetch(URL, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(submitedData)
    // });

    // const json = await res.json();

    // console.log(json.data)
  };

  return (
    <>
      <ModalHeader title='Export Report' />
      <ModalFormContainer />
      <ModalControls>
        <ModalControlButton buttonText='Cancel' handleClick={closeModal} />
        <ModalControlButton
          type='submit'
          buttonText='OK'
          handleClick={submitForm}
        />
      </ModalControls>
    </>
  );
};

ModalForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default ModalForm;
