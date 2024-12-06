import React from 'react'
import NavBar from '../components/NavBar'
import AttendenceTable from '../components/AttendenceTable'
import AttendencePerformance from '../components/AttendencePerformance'

const page = () => {
  return (
    <div>
        <NavBar />
        <div className='min-h-screen w-full flex md:flex-row flex-col relative md:static top-20 bg-zinc-100'>
            <div className=' md:mb-5'>
                <AttendenceTable />
            </div>
            <div className='min-h-full'>
                <AttendencePerformance />
            </div>
        </div>
    </div>
  )
}

export default page