import React from 'react';

//Adding button to Home When click Popup of Add Employees Form open
const AddReq = () => {
  return (
    <div className='action-btn p'>
      <a
        href='#Reg-ser'
        className='waves-effect waves-teal btn-flat modal-trigger'
      >
        Register a Service
      </a>
    </div>
  );
};

export default AddReq;