import React, { useState } from 'react';
import ModalLayout from './shared/ModalLayout';
import ModalControlButton from './shared/ModalControlButton';
import Spinner from './shared/Spinner';
import ModalFormContainer from './form';
import ModalSummary from './summary';
import './styles/Modal.css';

const ModalContainer = () => {
  const [isOpen, toggleModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [isSendingData, setIsSendingData] = useState(false);

  const closeModal = () => {
    toggleModal(false);
    setSubmittedData(null);
  };

  const submit = async data => {
    const URL =
      'https://cors-anywhere.herokuapp.com/https://postman-echo.com/post';

    setIsSendingData(true);

    const res = await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const json = await res.json();
    setIsSendingData(false);
    setSubmittedData(json.data);
  };

  return (
    <>
      {isOpen ? (
        <ModalLayout>
          {!isSendingData && !submittedData && (
            <ModalFormContainer onClose={closeModal} onSubmit={submit} />
          )}
          {isSendingData && <Spinner message='Submitting your request' />}
          {submittedData && (
            <ModalSummary onClose={closeModal} data={submittedData} />
          )}
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
