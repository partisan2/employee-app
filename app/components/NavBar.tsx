import Link from 'next/Link'
import React from 'react'

const NavBar = () => {
  return (
    <div>
      <div className='py-5 px-4 flex justify-between bg-white' >
        <h1 className='text-3xl font-burtons text-teal-600'>HRIS</h1>
        <ul className='flex items-center'>
          <li className='px-4'>
            <Link href="/" className='hover:text-teal-400 text-lg text-teal-600'>Home</Link>
          </li>
          <li className='px-4'>
            <Link href="/attendence" className='hover:text-teal-400 text-lg text-teal-600'>Attendence</Link>
          </li>
          <li className='px-4'>
            <Link href="/employee-details" className='hover:text-teal-400 text-lg text-teal-600'>Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar