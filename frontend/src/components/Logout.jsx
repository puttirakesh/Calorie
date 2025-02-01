import React from 'react'
import useLogout from '../hooks/useLogout'

const LogoutButton = () => {
  const {loading,logout}=useLogout()
  return (
    <div className='mt-auto'>
      {!loading ? (
        <button className='text-xl text-white font-bold' onClick={logout}>LogOut</button>
      ):(
        <span className='loading loading-spinner'></span>
      )}
    </div>
  )
}

export default LogoutButton