import React from 'react';
import PropTypes from 'prop-types';

const ModalControlButton = ({ buttonText, handleClick, form, type }) => {
  if (type) {
    return <button type={type} form={form}>{buttonText}</button>
  }
  return <button onClick={handleClick}>{buttonText}</button>;
};

ModalControlButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  form: PropTypes.string,
  type: PropTypes.string
};

export default ModalControlButton;
