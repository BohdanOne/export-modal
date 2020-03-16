import React from 'react';
import PropTypes from 'prop-types';

const ModalContainer = ({ isOpen, onModalClose }) => {
  const closeModal = () => onModalClose();

  if (isOpen) {
    return (
      <div>
        <h2>Modal</h2>
        <button onClick={closeModal}>Close</button>
      </div>
    );
  }

  return null;
};

ModalContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired
};

export default ModalContainer;
