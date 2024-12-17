'use client'
import React from 'react'

const AttendenceTable = () => {
  return (
    <div className='mt-5 md:mx-5 bg-white py-5 md:px-8 border rounded-xl drop-shadow-lg min-h-full lg:min-w-[1000px]'>
        <div className='py-3'>
            <h1 className='text-md font-semibold md:px-0 px-2'>Search</h1>
            <table className='mx-2'>
                <tbody>
                    <tr>
                        <td className='md:px-2 px-4'><label>From</label></td>
                        <td><input className='shadow appearance-none rounded p-2  text-black-700 leading-tight' type="date" /></td>
                    </tr>
                    <tr>
                        <td className='md:px-2 px-4'><label>To</label></td>
                        <td><input className='shadow appearance-none rounded p-2  text-black-700 leading-tight' type="date" /></td>
                    </tr>
                    <tr>
                        <td colSpan={2} className='py-3'>
                            <button className='border rounded px-2 py-1 bg-teal-400 text-white'>Search</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='mx-2 my-5'>
            <table className='border-slate-600 table-auto rounded-xl md:min-w-[800px] lg:mx-5 text-sm'>
                <thead>
                    <tr>
                        <th className='border border-slate-600 md:px-4 py-2'>Date</th>
                        <th className='border border-slate-600 md:px-4 py-2'>Day of week</th>
                        <th className='border border-slate-600 md:px-4 py-2'>Workday</th>
                        <th className='border border-slate-600 md:px-4 py-2'>In Time</th>
                        <th className='border border-slate-600 md:px-4 py-2'>Out Time</th>
                        <th className='border border-slate-600 md:px-4 py-2'>Work Time</th>
                        <th className='border border-slate-600 md:px-4 py-2'>Apply Leave</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-slate-600 md:px-4 py-2'>20/11/2024</td>
                        <td className='border border-slate-600 md:px-4 py-2'>Wendsday</td>
                        <td className='border border-slate-600 md:px-4 py-2'>1</td>
                        <td className='border border-slate-600 md:px-4 py-2'>08.00</td>
                        <td className='border border-slate-600 md:px-4 py-2'>05.00</td>
                        <td className='border border-slate-600 md:px-4 py-2'>09.00</td>
                        <td className='border border-slate-600 md:px-4 py-2'>09.00</td>
                    </tr>
                </tbody>
            </table>
        </div>                                          
    </div>
  )
}

export default AttendenceTable