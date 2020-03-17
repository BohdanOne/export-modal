import React, { useState } from 'react';
import ModalLayout from './components/shared/ModalLayout';
import ModalControlButton from './components/shared/ModalControlButton';
import Spinner from './components/shared/Spinner';
import ModalFormContainer from './components/form';
import ModalSummaryContainer from './components/summary';
import connectToAPI from './utils/connectToAPI'
import './styles/index.scss';

const ModalContainer = () => {
  const [isOpen, toggleModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [isSendingData, setIsSendingData] = useState(false);

  const closeModal = () => {
    toggleModal(false);
    setSubmittedData(null);
  };

  const submit = async data => {
    setIsSendingData(true);

    const receivedData = await connectToAPI(data)

    setIsSendingData(false);
    setSubmittedData(receivedData);
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
            <ModalSummaryContainer onClose={closeModal} data={submittedData} />
          )}
        </ModalLayout>
      ) : (
        <ModalControlButton
          styleName='modal__btn--open'
          buttonText='Export Report'
          handleClick={() => toggleModal(true)}
        />
      )}
    </>
  );
};

export default ModalContainer;
