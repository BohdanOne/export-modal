import React from 'react';
import PropTypes from 'prop-types';

const ModalControlButton = ({ buttonText, handleClick }) => {
  return <button onClick={handleClick}>{buttonText}</button>;
};

ModalControlButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default ModalControlButton;
