import React from 'react';
import PropTypes from 'prop-types';

const ModalFormField = ({ label, target, children, groupLabelId }) => {
  if (groupLabelId) {
    return (
      <label className='form__field' htmlFor={target} role='group' aria-labelledby={groupLabelId}>
        <span id={groupLabelId} className='form__label'>{label}</span>
        <div className='form__field--input'>{children}</div>
      </label>
    );
  } else {
    return (
      <label className='form__field' htmlFor={target}>
        <span className='form__label'>{label}</span>
        <div className='form__field--input'>{children}</div>
      </label>
    );
  }
};

ModalFormField.propTypes = {
  label: PropTypes.string.isRequired,
  target: PropTypes.string,
  groupLabelId: PropTypes.string
};

export default ModalFormField;
