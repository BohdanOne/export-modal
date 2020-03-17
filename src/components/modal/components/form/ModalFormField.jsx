import React from 'react';
import PropTypes from 'prop-types';

const ModalFormField = ({ label, target, children }) => {
  return (
    <label className='form__field' htmlFor={target}>
      <span className='form__label'>{label}</span>
      <div className='form__field--input'>{children}</div>
    </label>
  );
};

ModalFormField.propTypes = {
  label: PropTypes.string.isRequired,
  target: PropTypes.string
};

export default ModalFormField;
