import React from 'react'
import LoginForm from '../components/LoginForm'

const login = () => {
  return (
    <>
        <div className='h-screen flex justify-center items-center'>
            <div className='flex flex-col md:w-[300px] bg-white shadow-md rounded px-8 pt-6 pb-8'>
                <h1 className='text-4xl text-center pt-5 pb-5'>LogIn</h1>
                <LoginForm/>
            </div>
        </div>
    </>
  )
}

export default login