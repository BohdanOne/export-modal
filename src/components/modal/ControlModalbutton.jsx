import React from 'react';
import PropTypes from 'prop-types';

const ControlModalButton = ({ buttonText, handleClick }) => {
  return <button onClick={handleClick}>{buttonText}</button>;
};

ControlModalButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default ControlModalButton;
