'use client'
import React from 'react'

const ApplyLeave = () => {
  return (
    <div className='mt-5 md:mx-5 mx-2 bg-white py-5 px-8 border rounded-xl drop-shadow-lg'>
        <h1 className='text-md font-semibold'>Apply Leave</h1>
        <table className='mt-4 mx-4'>
            <tbody>
                <tr>
                    <td className='px-4 py-4'>Date</td>
                    <td><input type="date" className='shadow appearance-none rounded p-2 text-black-700 leading-tight' /></td>
                </tr>
                <tr>
                    <td colSpan={2}><textarea placeholder='Comment' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/></td>
                </tr>
                <tr>
                    <td>
                        <button className='border rounded px-2 py-1 bg-teal-400 text-white'>Search</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ApplyLeave