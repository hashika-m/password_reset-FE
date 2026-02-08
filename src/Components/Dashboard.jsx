import React, { useEffect, useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [data, setData] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/login'); // redirect if no token
        return;
      }

      try {
        const res = await api.get('/dashboard', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(res.data.message);
      } catch (err) {
        console.error(err);
        navigate('/login'); // redirect if token invalid
      }
    };

    fetchDashboard();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
 <>
            <div className='d-flex justify-content-center align-items-center vh-100 bg-light'>
                {/* card */}
                <div className='card p-4 shadow' style={{ width: '400px' }}>
                    {/* header */}
                    <h3 className='text-center mb-3 text-primary '>{data}!</h3>
                    <button className='btn btn-danger' onClick={handleLogout}>Log out</button>
                </div>

            </div>
        </>
  );
};

export default Dashboard;
