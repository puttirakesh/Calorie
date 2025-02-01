import React from 'react'
import Login from './pages/login/Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import { useAuthContext } from './context/useAuthContext'
import Contact from './pages/contact/Contact'

function App() {
  const {authUser}=useAuthContext()

  return (
    <div className='min-h-screen mt-0'>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/login' element={authUser ? <Navigate to='/' />:<Login/>}/>
        <Route path='/signup' element={authUser ? <Navigate to='/' />:<SignUp/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
