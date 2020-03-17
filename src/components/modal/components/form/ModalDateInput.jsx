import React from 'react';
import PropTypes from 'prop-types';

const ModalDateInput = ({ schedule }) => {
  if (schedule === 'date') {
    return (
      <>
        <input className='form__input--time' type='date' name='scheduledDate' required/>
        <span className='form__input--span'> at </span>
        <input className='form__input--time' type='time' name='hour' id='' defaultValue='13:00' required/>
      </>
    );
  }

  if (schedule === 'daily') {
    return <input className='form__input--time' type='time' name='hour' id='' defaultValue='13:00' required/>;
  }

  if (schedule === 'weekly') {
    return (
      <>
        <select className='form__input--time form__input--select' name='day' form="modalForm">
          <option value='monday'>Monday</option>
          <option value='tuesday'>Tuesday</option>
          <option value='wednesday'>Wednesday</option>
          <option value='thursday'>Thursday</option>
          <option value='friday'>Friday</option>
          <option value='saturday'>Saturday</option>
          <option value='sunday'>Sunday</option>
        </select>
        <span className='form__input--span'> at </span>
        <input className='form__input--time' type='time' name='hour' id='' defaultValue='13:00' required />
      </>
    );
  }
};

ModalDateInput.propTypes = {
  schedule: PropTypes.string.isRequired
};

export default ModalDateInput;
