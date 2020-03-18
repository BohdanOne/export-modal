import React from 'react';
import PropTypes from 'prop-types';
import ModalSummaryField from './ModalSummaryField';

const ModalSummary = ({ data }) => {
  const generateScheduleField = schedule => {
    switch (schedule) {
      case 'date':
        return (
          <ModalSummaryField
            name='Scheduled for'
            content={data.hour}
            dateContent={data.date}
          />
        );
      case 'daily':
        return (
          <ModalSummaryField
            name='Scheduled for everyday at'
            content={data.hour}
          />
        );
      case 'weekly':
        return (
          <ModalSummaryField
            name='Scheduled for every'
            content={data.hour}
            dateContent={data.day}
          />
        );
      default:
        return;
    }
  };

  return (
    <div className='modal__summary'>
      <ModalSummaryField name='Report name' content={data.name} />
      <ModalSummaryField name='Format' content={data.format} />
      <ModalSummaryField name='Send to' content={data.email} />

      {generateScheduleField(data.schedule)}
    </div>
  );
};

ModalSummary.propTypes = {
  data: PropTypes.object.isRequired
};

export default ModalSummary;
