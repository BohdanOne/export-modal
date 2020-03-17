import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({ message }) => {
  return (
    <div className='spinner'>
      <p className='spinner__message'>{message}</p>
      <div className='spinner__wrapper'>
        <div className='spinner__animation'></div>
      </div>
    </div>
  );
};

Spinner.propTypes = {
  message: PropTypes.string
};

export default Spinner;
