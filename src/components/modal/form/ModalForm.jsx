import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ModalFormControl from './ModalFormControl';
import ModalTextInput from './ModalTextInput';
import ModalRadioInput from './ModalRadioInput';
import ModalDateInput from './date-input/ModalDateInput';
import { renderDateInputLabel } from './date-input/utils';

const ModalForm = ({ onSubmit }) => {
  const formRef = useRef(null);

  const [schedule, setSchedule] = useState(false);

  const submitForm = e => {
    const form = formRef.current;
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      id='modalForm'
      className='modal__form'
      ref={formRef}
      onSubmit={submitForm}
      autoComplete='off'
    >
      <ModalFormControl label='Report name' target='name'>
        <ModalTextInput id='name' type='text' placeholder='Shareablee Report' />
      </ModalFormControl>

      <ModalFormControl label='Format'>
        <ModalRadioInput
          name='format'
          label='Excel'
          value='excel'
          checked={true}
        />
        <ModalRadioInput
          name='format'
          label='CSV'
          value='csv'
          checked={false}
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
  );
};

ModalForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default ModalForm;