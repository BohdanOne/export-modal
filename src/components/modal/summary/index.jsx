import React from 'react';
import PropTypes from 'prop-types';
import ModalHeader from '../shared/ModalHeader';
import ModalControlButton from '../shared/ModalControlButton';
import ModalControls from '../shared/ModalControls';

const ModalSummary = ({ onClose, data }) => {
  const closeModal = () => onClose();

  const generateScheduleField = schedule => {
    switch (schedule) {
      case 'date':
        return (
          <div>
            <span className='summary__field-label'>Scheduled for</span>
            {data.date}
            <span className='summary__field-label'>at</span>
            {data.hour}hr
          </div>
        );
      case 'daily':
        return (
          <div>
            <span className='summary__field-label'>
              Scheduled for everyday at
            </span>
            {data.hour}hr
          </div>
        );
      case 'weekly':
        return (
          <div>
            <span className='summary__field-label'>Scheduled for every</span>
            {data.day}
            <span className='summary__field-label'>at</span>
            {data.hour}hr
          </div>
        );
      default:
        return;
    }
  };

  return (
    <>
      <ModalHeader title='Request Submitted!' />
      <div>
        <span className='summary__field-label'>Report name</span>
        {data.name}
      </div>
      <div>
        <span className='summary__field-label'>Format</span>
        {data.format}
      </div>
      <div>
        <span className='summary__field-label'>Send to</span>
        {data.email}
      </div>
      {generateScheduleField(data.schedule)}

      <ModalControls>
        <ModalControlButton styleName='modal__btn--close' buttonText='OK' handleClick={closeModal} />
      </ModalControls>
    </>
  );
};

ModalSummary.propTypes = {
  onClose: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

export default ModalSummary;
