'use client'
import React from 'react'

const AttendencePerformance = () => {
  return (
    <div className='mt-5 mx-5 bg-white py-5 px-8 border rounded-xl drop-shadow-lg'>
        <h1 className='text-md font-semibold'>PERFORMANCE</h1>
        <table className='mt-5'>
            <tbody>
                <tr className=''>
                    <td>
                        <label className='px-5'>Average In Time</label>
                    </td>
                    <td>
                        <input type="text" defaultValue="08.00" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label className='px-5'>Average Out Time</label>
                    </td>
                    <td>
                        <input type="text" defaultValue="05.00" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label className='px-5'>Total Man hours</label>
                    </td>
                    <td>
                        <input type="text" defaultValue="08.00" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default AttendencePerformance