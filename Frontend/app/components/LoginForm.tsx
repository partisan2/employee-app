'use client'
import Link from 'next/link'
import React from 'react'

const LoginForm = () => {
  return (
    <form className=''>
        <div className="mb-4">
            <label className="block text-gray-700 text-md font-bold mb-2">
            Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
        </div>  
        <div className="mb-4">
            <label className="block text-gray-700 text-md font-bold mb-2">
            Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="password" placeholder="Password" />
        </div>    
        <div className='flex justify-center items-center md:mb-4 text-sm'>
            <Link href={"/"}>forgot Passward</Link>
        </div>
        <div className='mb-4 flex justify-center'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign In
            </button>
        </div> 
    </form>
  )
}

export default LoginForm