import React, { useState } from 'react'
import api from '../api/api'

const Register =() => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [message,setMessage]=useState('')

    const handleSubmit=async (e)=>{
        e.preventDefault()
        // console.log(email,password)
        setMessage('')

        try{
           const res= await api.post('/register',{email,password})
           setMessage(res.data.message)
           setEmail('')
           setPassword('')
           console.log('sucess:',res.data)
        }catch(err){
            setMessage(err.reponse?.data.message || "Something went wrong")
           console.log(err)
        }

    }
  return (

    <>
            <div className='d-flex justify-content-center align-items-center vh-100 bg-light'>
                {/* card */}
                <div className='card p-4 shadow' style={{ width: '400px' }}>
                    {/* header */}
                    <h3 className='text-center mb-3 text-primary'>Register</h3>
                    {/* form */}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label>Email</label>
                            <input 
                            type='email' 
                            className='form-control' 
                            placeholder='Enter your email' 
                            value={email}
                            onChange={e=>setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input 
                            type='password' 
                            className='form-control' 
                            placeholder='Enter your password' 
                            value={password}
                            onChange={e=>setPassword(e.target.value)}/>
                        </div>
                        <button type='submit' className='btn btn-primary w-100 mt-2'>Register</button>
                    </form>

                    {/* forgotpassword link */}
                    <div className='text-left mt-2 d-flex justify-content-center align-items-center'>
                        <a href="/forgotPassword" className='text-primary '>Forgot-Password?</a>
                         <a href='/login' className='text-primary px-3 '>Login</a>
                       
                    </div>

                    {/* messgae for users */}
                    <div className='text-left mt-2'>
                       {message && <p className='text-center text-success'>{message}</p>}
                       
                    </div>
                </div>

            </div>
        </>
    
  )
}

export default Register