import React from 'react';
import PropTypes from 'prop-types';

const ModalSummary = ({ data }) => {
  const generateScheduleField = schedule => {
    switch (schedule) {
      case 'date':
        return (
          <div className="summary__field">
            <span className='summary__field-label'>Scheduled for</span>
            {data.date}
            <span className='summary__field-label--at'>at</span>
            {data.hour}hr
          </div>
        );
      case 'daily':
        return (
          <div className="summary__field">
            <span className='summary__field-label'>
              Scheduled for everyday at
            </span>
            {data.hour}hr
          </div>
        );
      case 'weekly':
        return (
          <div className="summary__field">
            <span className='summary__field-label'>Scheduled for every</span>
            {data.day}
            <span className='summary__field-label--at'>at</span>
            {data.hour}hr
          </div>
        );
      default:
        return;
    }
  };

  return (
    <div className='modal__summary'>

      <div className="summary__field">
        <span className='summary__field-label'>Report name</span>
        <span>{data.name}</span>
      </div>
      <div className="summary__field">
        <span className='summary__field-label'>Format</span>
        {data.format}
      </div>
      <div className="summary__field">
        <span className='summary__field-label'>Send to</span>
        {data.email}
      </div>
      {generateScheduleField(data.schedule)}
    </div>
  );
};

ModalSummary.propTypes = {
  data: PropTypes.object.isRequired
};

export default ModalSummary;
