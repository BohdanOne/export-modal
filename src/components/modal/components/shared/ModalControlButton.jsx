import React from 'react';
import PropTypes from 'prop-types';

const ModalControlButton = ({
  styleName,
  buttonText,
  handleClick,
  form,
  type,
  ariaLabel
}) => {
  if (type) {
    return (
      <button className={styleName} type={type} form={form} aria-label={ariaLabel}>
        {buttonText}
      </button>
    );
  }
  return (
    <button className={styleName} onClick={handleClick} aria-label={ariaLabel}>
      {buttonText}
    </button>
  );
};

ModalControlButton.propTypes = {
  styleName: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  form: PropTypes.string,
  type: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired
};

export default ModalControlButton;
