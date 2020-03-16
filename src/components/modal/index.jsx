import React, { useState } from 'react';
import ModalLayout from './ModalLayout';
import ControlModalButton from './ControlModalbutton';
import ModalHeader from './ModalHeader';
import ModalForm from './modal-form';
import './Modal.css';

const ModalContainer = () => {
  const [isOpen, toggleModal] = useState(false);

  return (
    <>
      {isOpen ? (
        <ModalLayout>
          <ModalHeader title='Export Report' />
          <ModalForm />
          <ControlModalButton
            buttonText='Cancel'
            handleClick={() => toggleModal(!isOpen)}
          />
          <ControlModalButton
            buttonText='OK'
            handleClick={() => toggleModal(!isOpen)}
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
