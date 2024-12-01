'use client'
import Link from 'next/Link'
import React, { useState } from 'react'
import Image from 'next/image'
import pic from '../../public/image.png'
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [sideBarActive, setSideBarActive]= useState(true);
  return (
    <div>
      <div className='py-5 px-4 flex justify-between bg-white md:relative z-10 w-full fixed top-0 md:relative ' >
        <h1 className='md:text-3xl text-2xl font-burtons text-teal-600'>HRIS</h1>
        <ul className='md:flex hidden items-center'>
          <li className='px-4'>
            <Link href="/" className='hover:text-teal-400 text-md text-teal-600'>Home</Link>
          </li>
          <li className='px-4'>
            <Link href="/attendence" className='hover:text-teal-400 text-md text-teal-600'>Attendence</Link>
          </li>
          <li className='px-4'>
            <Link href="/employee-details" className='text-md text-teal-600 hover:text-teal-400'>Profile</Link>
          </li>
          <li className='px-4'>
            <Link href="/">
              <Image className='rounded-full w-[50px] h-[50px] flex items-center justify-center bg-zinc-100' src={pic} alt='profile picture' />
            </Link>
          </li>
        </ul>
        <ul className='md:hidden'>
          <button onClick={()=>setSideBarActive(!sideBarActive)}><FiMenu className={`w-8 h-8 ${sideBarActive === true ? "display":"hidden"}`} /></button>
          <button onClick={()=>setSideBarActive(!sideBarActive)}><IoClose className={`w-8 h-8 ${sideBarActive === true ? "hidden":"display"}`} /></button>
        </ul>
      </div>
      <div className={`w-2/5 h-screen  fixed left-0 top-20 z-10 bg-white ${sideBarActive === true ? "hidden":"display"}`}>
          <ul className='py-4 px-2'>
            <li className='px-4 border-b border-zinc-400'>
              <Link href="/" className='text-lg text-teal-600'>Home</Link>
            </li>
            <li className='px-4 mt-4 border-b border-zinc-400'>
              <Link href="/attendence" className='text-lg text-teal-600'>Attendence</Link>
            </li>
            <li className='px-4 mt-4 border-b border-zinc-400'>
              <Link href="/employee-details" className='text-lg text-teal-600 '>Profile</Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default NavBar