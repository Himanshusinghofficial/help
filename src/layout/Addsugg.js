import React from 'react';

//Adding button to Home When click Popup of Add Employees Form open
const Addsugg = () => {
  return (
    <div className='action-btn p'>
      <a
        href='#Sugg'
        className='waves-effect waves-teal btn-flat modal-trigger'
      >
        Share Suggestion
      </a>
    </div>
  );
};

export default Addsugg;