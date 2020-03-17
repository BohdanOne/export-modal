import React from 'react';
import PropTypes from 'prop-types';

const ModalTextInput = ({ type, placeholder, id }) => {
  const validate = e => {
    if (type === 'email') {
      if (e.target.validity.typeMismatch) {
        e.target.setCustomValidity("Please enter valid email.");
      } else {
        e.target.setCustomValidity("");
      }
    }
  }

  return (
    <input id={id} type={type} placeholder={placeholder} onInput={validate} required/>
  )
}

ModalTextInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

export default ModalTextInput;