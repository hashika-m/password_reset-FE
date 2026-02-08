import React, { useState } from 'react';
import api from '../api/api';

const ForgotPassword = () => {
  // states
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const res = await api.post('/forgotPassword', { email });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Something went wrong');
      console.log(err);
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-light'>
      {/* card */}
      <div className='card p-4 shadow' style={{ width: '400px' }}>
        {/* header */}
        <h3 className='text-center mb-3 text-primary'>Forgot Password</h3>
        {/* form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={e => setEmail(e.target.value)}
              required
              className="form-control"
            />
            <p className='text-secondary mt-1' style={{ fontSize: '12px' }}>
              We'll send a link via email to reset your password.
            </p>
          </div>
          <button type='submit' className='btn btn-primary w-100 mt-2'>Send</button>
        </form>

        {/* display message */}
        {message && <p className='text-success mt-3 text-center'>{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
