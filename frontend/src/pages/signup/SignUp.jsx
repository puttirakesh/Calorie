import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignUp from '../../hooks/useSignUp.js'

const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const { loading, signup } = useSignUp()
  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(inputs)
  }

  return (
    <div className='min-h-screen flex items-center justify-center mt-0'>

      <div className='flex flex-col items-center justify-center min-w-96 mr-auto ml-12'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
          <h1 className='text-3xl font-semibold text-center text-gray-400'>Sign Up
            <span className='text-green-400'> NutriLogix</span></h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label className='label p-2'>
                <span className='label-text text-base'>full Name</span>
              </label>
              <input type="text" placeholder='enter Name' className='w-full input input-bordered h-10'
                value={inputs.fullName}
                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
            </div>
            <div>
              <label className='label p-2'>
                <span className='label-text text-base'>Username</span>
              </label>
              <input type="text" placeholder='enter Username' className='w-full input input-bordered h-10'
                value={inputs.username}
                onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
            </div>
            <div>
              <label className='label p-2'>
                <span className='label-text text-base'>Password</span>
              </label>
              <input type="password" placeholder='enter Password' className='w-full input input-bordered h-10'
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
            </div>
            <div>
              <label className='label p-2'>
                <span className='label-text text-base'>Confirm Password</span>
              </label>
              <input type="password" placeholder='confirm Password' className='w-full input input-bordered h-10'
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
            </div>

            <GenderCheckBox onCheckboxChange={handleCheckBoxChange} selectedGender={inputs.gender} />

            <Link to="/login" className='text-sm hover:underline hover:text-blue-400 mt-2 inline-block'>
              Already have an account?
            </Link>
            <div>
              <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp