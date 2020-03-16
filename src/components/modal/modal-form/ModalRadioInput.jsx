import React from 'react';
import PropTypes from 'prop-types';

const ModalRadioInput = ({ name, label, value }) => {
  return (
    <>
      <input name={name} id={value} value={value} type='radio' />
      <label htmlFor={value}>{label}</label>
    </>
  );
};

ModalRadioInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default ModalRadioInput;
