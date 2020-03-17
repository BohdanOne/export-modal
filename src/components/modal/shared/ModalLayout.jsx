import React from 'react';

export default ({ children }) => {
  return (
    <div className='backdrop'>
      <div className='modal'>{children}</div>
    </div>
  );
};
