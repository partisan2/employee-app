'use client'
import React from 'react'

const PaySlip = () => {
  return (
    <div className='mt-5 md:mx-5 mx-2 bg-white py-5 px-8 border rounded-xl drop-shadow-lg md:h-auto'>
        <h1 className='text-md font-semibold'>My Payslip</h1>
        <table className='mt-4 mx-4'>
            <tbody>
                <tr>
                    <td>
                        <label className='px-4'>Month</label>
                    </td>
                    <td>
                        <input type="month" className='shadow appearance-none rounded p-2 text-black-700 leading-tight' />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} className='py-3 px-2'>
                        <button className='border rounded px-2 py-1 bg-teal-400 text-white'>Search</button>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} className='px-4'>View Slip</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default PaySlip