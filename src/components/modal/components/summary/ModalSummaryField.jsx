import React from 'react';
import PropTypes from 'prop-types';

const ModalSummaryField = ({ name, content, dateContent }) => {
  if (dateContent) {
    return (
      <div className='summary__field'>
        <span className='summary__field-label'>{name}</span>
        {dateContent}
        <span className='summary__field-label--at'>at</span>
        {content}
      </div>
    );
  } else {
    return (
      <div className='summary__field'>
        <span className='summary__field-label'>{name}</span>
        <span>{content}</span>
      </div>
    );
  }
};

ModalSummaryField.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  dateContent: PropTypes.string.isRequired
};

export default ModalSummaryField;
