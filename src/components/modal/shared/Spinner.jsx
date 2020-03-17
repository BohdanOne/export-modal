import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({ message }) => {
  return <div className='spinner'>{message}</div>;
};

Spinner.propTypes = {
  message: PropTypes.string
};

export default Spinner;