import React from 'react';
import ModalFormControl from './ModalFormControl';
import ModalTextInput from './ModalTextInput';
import ModalRadioInput from './ModalRadioInput';
import ModalDateInput from './ModalDateInput';

const ModalForm = () => {
  return (
    <form className='modal__form'>

      <ModalFormControl label='Report name' target='name'>
        <ModalTextInput id='name' type='text' placeholder='Shareablee Report' />
      </ModalFormControl>

      <ModalFormControl label='Format'>
        <ModalRadioInput name='format' label='Excel' value='excel' />
        <ModalRadioInput name='format' label='CSV' value='csv' />
      </ModalFormControl>

      <ModalFormControl label='E-mail to' target='email'>
        <ModalTextInput id='email' type='email' placeholder='client@company.com' />
      </ModalFormControl>

      <ModalFormControl label='Schedule'>
        <ModalRadioInput name='schedule' label='No Repeat' value='no' />
        <ModalRadioInput name='schedule' label='Specific Date' value='date' />
        <ModalRadioInput name='schedule' label='Daily' value='day' />
        <ModalRadioInput name='schedule' label='Weekly' value='week' />
      </ModalFormControl>

      <ModalFormControl label=''>
        <ModalDateInput />
      </ModalFormControl>
      
    </form>
  );
};

export default ModalForm;
