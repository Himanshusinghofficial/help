import React from 'react';

//Adding button to Home When click Popup of Add Employees Form open
const AddReg = () => {
  return (
    <div className='action-btn p'>
      <a
        href='#Reg-com'
        className='waves-effect waves-teal btn-flat modal-trigger'
      >
        Register a Complaint
      </a>
    </div>
  );
};

export default AddReg;
