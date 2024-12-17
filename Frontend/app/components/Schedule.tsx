import React from 'react'

const Schedule = () => {
  return (
    <div className='mt-5 md:mx-5 mx-2 bg-white py-5 px-8 border rounded-xl drop-shadow-lg'>
        <h1 className='text-md font-semibold'>Schedules & Meetings</h1>
        <input className='shadow appearance-none border rounded w-full my-2 py-2 px-3 text-gray-700 text-sm truncate text-clip leading-tight focus:outline-none focus:shadow-outline' type="text" disabled defaultValue='Event' />
    </div>
  )
}

export default Schedule