import React, { useState, useRef } from 'react';
import ModalLayout from './ModalLayout';
import ControlModalButton from './ControlModalbutton';
import ModalHeader from './ModalHeader';
import ModalFormControl from './modal-form/ModalFormControl';
import ModalTextInput from './modal-form/ModalTextInput';
import ModalRadioInput from './modal-form/ModalRadioInput';
import ModalDateInput from './modal-form/date-input/ModalDateInput';
import { renderDateInputLabel } from './modal-form/date-input/utils';
import './Modal.css';

const URL = 'https://cors-anywhere.herokuapp.com/https://postman-echo.com/post';

const ModalContainer = () => {
  const [isOpen, toggleModal] = useState(false);
  const [schedule, setSchedule] = useState(false);
  const [format, setFormat] = useState('Excel');

  const formRef = useRef(null);

  const closeModal = () => toggleModal(false);

  const submitForm = async e => {
    // WALIDACJA <===================
    closeModal();

    // SPINNER <==========================

    const form = formRef.current;

    const submitedData = {
      name: form.name.value,
      format: format,
      email: form.email.value,
      schedule: schedule
    };
    if (schedule) {
      submitedData.hour = form.hour.value;
    }
    if (schedule === 'weekly') {
      submitedData.day = form.weekday.value;
    }
    if (schedule === 'date') {
      submitedData.date = form.scheduledDate.value;
    }

    const res = await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submitedData)
    });

    const json = await res.json();

    console.log(json.data)

    // NOTYFIKACJA <================
  };

  return (
    <>
      {isOpen ? (
        <ModalLayout>
          <ModalHeader title='Export Report' />
          <form id='modalForm' className='modal__form' ref={formRef}>
            <ModalFormControl label='Report name' target='name'>
              <ModalTextInput
                id='name'
                type='text'
                placeholder='Shareablee Report'
              />
            </ModalFormControl>

            <ModalFormControl label='Format'>
              <ModalRadioInput
                name='format'
                label='Excel'
                value='excel'
                checked={true}
                onChange={e => setFormat(e.target.value)}
              />
              <ModalRadioInput
                name='format'
                label='CSV'
                value='csv'
                checked={false}
                onChange={e => setFormat(e.target.value)}
              />
            </ModalFormControl>

            <ModalFormControl label='E-mail to' target='email'>
              <ModalTextInput
                id='email'
                type='email'
                placeholder='client@company.com'
              />
            </ModalFormControl>

            <ModalFormControl label='Schedule'>
              <ModalRadioInput
                name='schedule'
                label='No Repeat'
                value='no'
                checked={!schedule}
                onChange={e => setSchedule(false)}
              />
              <ModalRadioInput
                name='schedule'
                label='Specific Date'
                value='date'
                checked={false}
                onChange={e => setSchedule(e.target.value)}
              />
              <ModalRadioInput
                name='schedule'
                label='Daily'
                value='daily'
                checked={false}
                onChange={e => setSchedule(e.target.value)}
              />
              <ModalRadioInput
                name='schedule'
                label='Weekly'
                value='weekly'
                checked={false}
                onChange={e => setSchedule(e.target.value)}
              />
            </ModalFormControl>

            {schedule && (
              <ModalFormControl label={renderDateInputLabel(schedule)}>
                <ModalDateInput schedule={schedule} />
              </ModalFormControl>
            )}
          </form>
          <ControlModalButton buttonText='Cancel' handleClick={closeModal} />
          <ControlModalButton
            type='submit'
            buttonText='OK'
            handleClick={submitForm}
          />
        </ModalLayout>
      ) : (
        <ControlModalButton
          buttonText='Export Report'
          handleClick={() => toggleModal(!isOpen)}
        />
      )}
    </>
  );
};

export default ModalContainer;
