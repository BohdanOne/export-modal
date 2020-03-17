import React from 'react';
import PropTypes from 'prop-types';

const ModalDateInput = ({ schedule }) => {
  if (schedule === 'date') {
    return (
      <>
        <input type='date' name='scheduledDate' required/>
        <span> at </span>
        <input type='time' name='hour' id='' defaultValue='13:00' />
      </>
    );
  }

  if (schedule === 'daily') {
    return <input type='time' name='hour' id='' defaultValue='13:00' />;
  }

  if (schedule === 'weekly') {
    return (
      <>
        <select name='day' form="modalForm">
          <option value='monday'>Monday</option>
          <option value='tuesday'>Tuesday</option>
          <option value='wednesday'>Wednesday</option>
          <option value='thursday'>Thursday</option>
          <option value='friday'>Friday</option>
          <option value='saturday'>Saturday</option>
          <option value='sunday'>Sunday</option>
        </select>
        <span> at </span>
        <input type='time' name='hour' id='' defaultValue='13:00' />
      </>
    );
  }
};

ModalDateInput.propTypes = {
  schedule: PropTypes.string.isRequired
};

export default ModalDateInput;
