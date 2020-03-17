import React from 'react';
import PropTypes from 'prop-types';

const ModalControlButton = ({ styleName, buttonText, handleClick, form, type }) => {
  if (type) {
    return <button className={styleName} type={type} form={form}>{buttonText}</button>
  }
  return <button className={styleName} onClick={handleClick}>{buttonText}</button>;
};

ModalControlButton.propTypes = {
  styleName: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  form: PropTypes.string,
  type: PropTypes.string
};

export default ModalControlButton;
