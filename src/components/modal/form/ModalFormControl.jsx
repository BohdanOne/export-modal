import React from 'react';
import PropTypes from 'prop-types';

const ModalFormControl = ({ label, target, children }) => {
  return (
    <label htmlFor={target}>
      {label}
      {children}
    </label>
  )
}

ModalFormControl.propTypes = {
  label: PropTypes.string.isRequired,
  target: PropTypes.string
}

export default ModalFormControl;