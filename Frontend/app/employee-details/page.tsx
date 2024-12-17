'use client'
import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import EmpDetails from '../components/EmpDetails'
import PersonalDetails from '../components/PersonalDetails'
import ContactDetails from '../components/ContactDetails'
import ProfileBar from '../components/ProfileBar'

const page = () => {

  const [active, setActive] = useState("tab1");

  const tabs = [
    {id:"tab1", label:"Personal Details"},
    {id:"tab2", label:"Contact Details"},
    {id:"tab3", label:"Employee Details"},
  ];

  const tabContent : {[key: string]: JSX.Element} = {
    tab1:(<PersonalDetails/>),
    tab2:(<ContactDetails/>),
    tab3:(<EmpDetails/>)
  }

  return (
    <div>
        <NavBar/>
        <div className='min-h-screen w-full flex md:flex-row flex-col bg-zinc-100 pt-5 relative top-20 md:static'>
          <div className='md:mx-10 mx-2 xl:w-4/5 bg-white py-5 px-8 border rounded-xl drop-shadow-lg md:mb-4'>
            <div className='flex flex-wrap'>
              {tabs.map((tab)=>(
                <button key={tab.id} className={`px-4 py-2 text-md font-semibold ${
                  active === tab.id ? "border-b-2 border-teal-700 text-teal-800": "text-gray-500"
                  }`}
                  onClick={() => setActive(tab.id)}
                  >
                    {tab.label}
                  </button>
              ))}
              <div>{tabContent[active]}</div>
            </div>
          </div>
          <div className='w-full flex justify-end mb-4'>
              <ProfileBar />
          </div>
        </div>
    </div>
  )
}

export default page