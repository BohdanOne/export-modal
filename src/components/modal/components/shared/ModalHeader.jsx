import React from 'react';
import PropTypes from 'prop-types';

const ModalHeader = ({ title }) => {
  return (
    <header className='modal__header'>
      <h2 className='modal__title'>{title}</h2>
    </header>
  );
};

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default ModalHeader;
