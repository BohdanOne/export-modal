import React, { useState } from 'react';
import ControlModalButton from './ControlModalbutton';
import Modal from './Modal';

const ModalContainer = () => {
  const [isOpen, toggleModal] = useState(false);

  return (
    <>
      {isOpen ? (
        <>
          <Modal />
          <ControlModalButton
            buttonText='Cancel'
            handleClick={() => toggleModal(!isOpen)}
          />
          <ControlModalButton
            buttonText='OK'
            handleClick={() => toggleModal(!isOpen)}
          />
        </>
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
