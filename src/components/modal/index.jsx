import React, { useState } from 'react';
import ModalLayout from './shared/ModalLayout';
import ModalControlButton from './shared/ModalControlButton';
import Spinner from './shared/Spinner';
import ModalForm from './form';
import ModalSummary from './summary';
import './styles/Modal.css';


const ModalContainer = () => {
  const [isOpen, toggleModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState({});
  const [isSendingData, setIsSendingData] = useState(false);

  const closeModal = () => toggleModal(false);

  const submitData = () => {
    console.log('submit')
    setIsSendingData(true);
    setTimeout(() => {
      setIsSendingData(false)
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <>
      { isOpen ? (
        <ModalLayout>
          {(!isSendingData && !isSubmitted) && <ModalForm onClose={closeModal} onSubmit={submitData} />}
          {isSendingData && <Spinner message='Submitting your request' />}
          {isSubmitted && <ModalSummary onClose={closeModal} />}
        </ModalLayout>
      ) : (
        <ModalControlButton
          buttonText='Export Report'
          handleClick={() => toggleModal(true)}
        />
      )}
    </>
  );
};

export default ModalContainer;
