import React, { useState } from 'react';
import ModalLayout from './components/shared/ModalLayout';
import ModalControlButton from './components/shared/ModalControlButton';
import Spinner from './components/shared/Spinner';
import ModalFormContainer from './components/form';
import ModalSummaryContainer from './components/summary';
import connectToAPI from './utils/connectToAPI';
import './styles/index.scss';

const ModalContainer = () => {
  const [isOpen, toggleModal] = useState(false);
  const [dataSubmitted, setDataSubmitted] = useState(null);
  const [isSendingData, setIsSendingData] = useState(false);
  const [submissionFailed, setSubmissionFailed] = useState(false);

  const isReady = !isSendingData && !dataSubmitted && !submissionFailed;

  const resetModal = () => {
    toggleModal(false);
    setDataSubmitted(null);
    setSubmissionFailed(false);
  };

  const handleSubmission = async data => {
    setIsSendingData(true);

    const receivedData = await connectToAPI(data);

    setIsSendingData(false);

    if (receivedData) {
      setDataSubmitted(receivedData);
    } else {
      setSubmissionFailed(true);
    }
  };

  return (
    <>
      {isOpen ? (
        <ModalLayout>
          {isReady && (
            <ModalFormContainer
              onClose={resetModal}
              onSubmit={handleSubmission}
            />
          )}
          {isSendingData && <Spinner message='Submitting your request' />}
          {submissionFailed && (
            <ModalSummaryContainer
              onClose={resetModal}
              data={{ error: true }}
            />
          )}
          {dataSubmitted && (
            <ModalSummaryContainer onClose={resetModal} data={dataSubmitted} />
          )}
        </ModalLayout>
      ) : (
        <ModalControlButton
          styleName='modal__btn--open'
          buttonText='Export Report'
          handleClick={() => toggleModal(true)}
          ariaLabel='Open Export Report submission form'
        />
      )}
    </>
  );
};

export default ModalContainer;
