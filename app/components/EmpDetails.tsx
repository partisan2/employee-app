'use client'
import React from 'react'

const EmpDetails = () => {
  return (
    <div className='my-5 mx-10 px-5'>
      <h1 className='text-lg py-2'>Employee Information</h1>
      <table className='md:w-[1000px] xl:w-[800px] mx-4'>
            <tbody>
                <tr>
                    <td className='py-2'><label className=''>Employee Number</label></td>
                    <td className='py-2'><label className=''>Employee Designation</label></td>
                </tr>
                <tr>
                    <td>
                        <input className='shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" disabled value='Vihan' />
                    </td>
                    <td>
                        <input className='shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" disabled value='Vihan' />
                    </td>
                </tr>
                <tr>
                    <td className='py-2'><label className=''>Company</label></td>
                    <td className='py-2'><label className=''>Department</label></td>
                </tr>
                <tr>
                    <td>
                        <input className='shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" disabled defaultValue='Vihan' />
                    </td>
                    <td>
                        <input className='shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" disabled defaultValue='Vihan' />
                    </td>
                </tr>
                <tr>
                    <td className='py-2'><label className=''>Company</label></td>
                    <td className='py-2'><label className=''>Department</label></td>
                </tr>
                <tr>
                    <td>
                        <input className='shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" disabled defaultValue='Vihan' />
                    </td>
                    <td>
                        <input className='shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" disabled defaultValue='Vihan' />
                    </td>
                </tr>
                <tr>
                    <td className='py-2'><label className=''>Employee Type</label></td>
                    <td className='py-2'><label className=''>Location</label></td>
                </tr>
                <tr>
                    <td>
                        <input className='shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" disabled defaultValue='Vihan' />
                    </td>
                    <td>
                        <input className='shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" disabled defaultValue='Vihan' />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default EmpDetails