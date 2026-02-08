// import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api";



const ResetPassword = () => {
  const { token } = useParams()
  const navigate = useNavigate()
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const [error,setError]=useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match!");
    }
    
     setError('')
     setLoading(true)
    try {
      const res = await api.post(`/resetPassword/${token}`, { newPassword, confirmPassword })
      alert(res.data.message)
      navigate('/login')
    } catch (err) {
      setError(err.response?.data.message || 'Incorrect password')
      console.log(err);
    } finally{
      setLoading(false)
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      {/* card */}
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        {/* header */}
        <h4 className="text-center mb-3 text-primary">Reset Password</h4>
        {/* error msg */}
        {error && <p style={{color:'red'}}>{error}</p>}
        {/* form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>New Password</label>
            <input
              type="password"
              className="form-control"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
          {loading? 'Resetting....':'Reset Password'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
