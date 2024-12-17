'use client'
import React from 'react'

const PersonalDetails = () => {
  return (
    <div className=''>
        <div className='my-5 md:mx-10 md:px-5'>
            <h1 className='text-lg py-2'>Personal Information</h1>
            <table className='md:w-[1000px] xl:w-[800px] md:mx-4'>
                <tbody>
                    <tr>
                        <td className='py-2'><label className=''>First Name</label></td>
                        <td><label className=''>Last Name</label></td>
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
                        <td colSpan={2} className='py-2'><label className=''>Full Name</label></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <input className='shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" disabled defaultValue='Vihan' />
                        </td>
                    </tr>
                    <tr>
                        <td className='py-2'><label className=''>Age</label></td>
                        <td><label className=''>Date Of Birth</label></td>
                    </tr>
                    <tr>
                        <td>
                            <input className='shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" disabled defaultValue='24' />
                        </td>
                        <td>
                            <input className='shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" disabled defaultValue='2000' />
                        </td>
                    </tr>
                    <tr>
                        <td className='py-2'><label className=''>Gender</label></td>
                        <td><label className=''>Marital Status</label></td>
                    </tr>
                    <tr>
                        <td>
                            <input className='shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" disabled defaultValue='Gender' />
                        </td>
                        <td>
                            <input className='shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" disabled defaultValue='Single' />
                        </td>
                    </tr>
                    <tr>
                        <td className='py-2'><label className=''>Nationality</label></td>
                        <td><label className=''>Ethnicity</label></td>
                    </tr>
                    <tr>
                        <td>
                            <input className='shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" disabled defaultValue='Gender' />
                        </td>
                        <td>
                            <input className='shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" disabled defaultValue='Single' />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>  
    </div>
  )
}

export default PersonalDetails