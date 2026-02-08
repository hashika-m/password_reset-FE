import React from 'react'

const Home = () => {
  return (
     <>
            <div className='d-flex justify-content-center align-items-center vh-100 bg-light'>
                {/* card */}
                <div className='card p-4 shadow' style={{ width: '400px' }}>
                    {/* header */}
                    <h3 className='text-center mb-3 text-primary '>Welcome !</h3>
                    <p className='text-center text-secondary'>Click the link below to signUp / Login</p>

                    {/* links to navigate urls */}
                    <div className='text-left mt-2 items-center d-flex justify-content-center align-items-center'>
                        <a href="/register" className='text-primary'>Register/Sign Up</a>
                        <a href='/login' className='text-primary px-3'>Login</a>
                       
                    </div>
                </div>

            </div>
        </>
    
  )
}

export default Home