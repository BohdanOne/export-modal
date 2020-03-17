import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ModalFormField from './ModalFormField';
import ModalTextInput from './ModalTextInput';
import ModalRadioInput from './ModalRadioInput';
import ModalDateInput from './ModalDateInput';
import { renderDateInputLabel } from '../utils/utils';

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
      <ModalFormField label='Report name' target='name'>
        <ModalTextInput id='name' type='text' placeholder='Shareablee Report' />
      </ModalFormField>

      <ModalFormField label='Format'>
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
      </ModalFormField>

      <ModalFormField label='E-mail to' target='email'>
        <ModalTextInput
          id='email'
          type='email'
          placeholder='client@company.com'
        />
      </ModalFormField>

      <ModalFormField label='Schedule'>
        <ModalRadioInput
          name='schedule'
          label='No Repeat'
          value='no'
          checked={true}
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
      </ModalFormField>

      {schedule ? (
        <ModalFormField label={renderDateInputLabel(schedule)}>
          <ModalDateInput schedule={schedule} />
        </ModalFormField>
      ) : <ModalFormField label='' />}
    </form>
  );
};

ModalForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default ModalForm;
