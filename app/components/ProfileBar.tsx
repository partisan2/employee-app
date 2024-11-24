'use client'
import React from 'react'
import pic from '../../public/image.png'
import Image from 'next/image'

const ProfileBar = () => {
  return (
    <div className='md:w-3/4 xl:w-full mx-5 flex flex-col justify-start items-center bg-white px-5 rounded-xl drop-shadow-lg'>
        <div>
            <Image className='rounded-full w-[200px] h-[200px] flex items-center justify-center my-5 bg-zinc-100' src={pic} alt='profile picture' />
        </div>
        <div className='md:min-w-[300px]'>
            <table>
                <tbody>
                    <tr className='border-b border-slate-300'>
                        <td className='px-2 py-4'><label className='text-sm'>Name</label></td>
                        <td className='px-2'>
                            <input className='shadow appearance-none rounded p-2 text-sm text-black-700 leading-tight' type="text" disabled defaultValue='Vihan Gayathra' />
                        </td>
                    </tr>
                    <tr className='border-b border-slate-300'>
                        <td className='px-2 py-4'><label className='text-sm'>Employee Number</label></td>
                        <td className='px-2'>
                            <input className='shadow appearance-none rounded p-2 text-sm text-black-700 leading-tight' type="text" disabled defaultValue='Vihan' />
                        </td>
                    </tr>
                    <tr className='border-b border-slate-300'>
                        <td className='px-2 py-4'><label className='text-sm'>Position</label></td>
                        <td className='px-2'>
                            <input className='shadow appearance-none rounded p-2 text-sm text-black-700 leading-tight' type="text" disabled defaultValue='Vihan' />
                        </td>
                    </tr>
                    <tr className='border-b border-slate-300'>
                        <td className='px-2 py-4'><label className='text-sm'>Direct Supervisor</label></td>
                        <td className='px-2'>
                            <input className='shadow appearance-none rounded p-2 text-sm text-black-700 leading-tight' type="text" disabled defaultValue='Vihan' />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ProfileBar