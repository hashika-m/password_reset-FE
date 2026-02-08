
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ForgotPassword from './Components/ForgotPassword'
import Login from './Components/Login'
import ResetPassword from './Components/ResetPassword'
import Register from './Components/Register'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'

function App() {
 console.log(import.meta.env.VITE_API_URL)

  return (
    <>
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
        <Route path='/resetPassword/:token' element={<ResetPassword/>}/>

      </Routes>
    </>
  )
}

export default App
