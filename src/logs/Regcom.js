import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

//Add Employee Details 
const Regcom = () => {
  const [Name, setName] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Email, setEmail] = useState('');
  const [Address, setAddress] = useState('');
  const [City, setCity] = useState('');
  const [Message, setMessage] = useState('');

  const onSubmit = () => {
    if (Name === '' ||  Mobile=== '' || Email==='' || Address==='' || City==='' || Message==='') {
      M.toast({ html: 'Please Enter All Fields' });
    } else {
      const newLog = {
        Name,
        Mobile,
        Email,
        Address,
        City,
        Message
      };

    //   addLog(newLog);

      M.toast({ html: `Complaint is Register` });

      // Clear Fields
      setName('');
      setMobile('');
      setEmail('');
      setAddress('');
      setCity('');
      setMessage('');
    
    }
  };

  return (
    <div id='Reg-com' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Register a Complaint</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='Name'
              value={Name}
              onChange={e => setName(e.target.value)}
              required
            />
            <label htmlFor='Name' className='active'>
              Name
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='number'
              name='Mobile'
              value={Mobile}
              onChange={e => setMobile(e.target.value)}
              required
            />
            <label htmlFor='Mobile' className='active'>
              Phone Number
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='email'
              name='Email'
              value={Email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <label htmlFor='Email' className='active'>
              Email
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='Address'
              value={Address}
              onChange={e => setAddress(e.target.value)}
              required
            />
            <label htmlFor='Address' className='active'>
              Address
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='City'
              value={City}
              onChange={e => setCity(e.target.value)}
              required
            />
            <label htmlFor='City' className='active'>
              City
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='Message'
              value={Message}
              onChange={e => setMessage(e.target.value)}
              required
            />
            <label htmlFor='Message' className='active'>
              Complaint(Message)
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

// AddLogModal.propTypes = {
//   addLog: PropTypes.func.isRequired
// };

const modalStyle = {
  width: '75%',
  height: '75%',
};

// export default connect(
//   null,
// //   { addLog }
// )(AddLogModal);
export default Regcom;
