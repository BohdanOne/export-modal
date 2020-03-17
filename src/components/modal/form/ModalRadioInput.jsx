import React from 'react';
import PropTypes from 'prop-types';

const ModalRadioInput = ({ name, label, value, checked, onChange }) => {
  const handleChange = e => {
    onChange && onChange(e);
  };

  return (
    <div className='form__field--radio'>
      <input
        className='form__input--radio'
        defaultChecked={checked}
        name={name}
        id={value}
        value={value}
        type='radio'
        onChange={handleChange}
      />
      <label className='form__input--radio__label' htmlFor={value}>
        {label}
      </label>
    </div>
  );
};

ModalRadioInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired
};

export default ModalRadioInput;
