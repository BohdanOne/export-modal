import React from 'react';
import PropTypes from 'prop-types';

const ModalRadioInput = ({ name, label, value, checked, onChange}) => {
  const handleChange = e => {
    onChange && onChange(e);
  }

  return (
    <>
      <input defaultChecked={checked} name={name} id={value} value={value} type='radio' onChange={handleChange}/>
      <label htmlFor={value}>{label}</label>
    </>
  );
};

ModalRadioInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired
};

export default ModalRadioInput;
