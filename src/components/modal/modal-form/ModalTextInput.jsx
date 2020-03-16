import React from 'react';
import PropTypes from 'prop-types';

const ModalTextInput = ({ type, placeholder, id }) => {
  return (
    <input id={id} type={type} placeholder={placeholder} />
  )
}

ModalTextInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

export default ModalTextInput;