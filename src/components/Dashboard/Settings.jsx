import React from 'react'
import User from '../../assets/user.svg';
import Sidebar from './Sidebar'

const Settings = () => {
  return (
    <div className='h-[100vh] w-full flex justify-start'>
        <Sidebar />
        <div className='flex flex-col md:items-start max-w-[80vw] lg:max-w-7xl w-full px-6 py-10 mx-auto '>
            <h2 className='text-base font-bold text-[#334158]'>Personal Information</h2>
            <div className='flex items-center gap-4 mt-3'>
                <img src={User} alt="avatar" />
                <div>
                    <button className='bg-[#334158] text-white text-sm py-2 px-2 rounded-2xl'>Change Avatar </button>
                </div>
            </div>
            <div className='w-[80%] mt-10'>
            <div className="flex flex-wrap justify-between gap-1">
                <div className="my-2 w-[48%] flex flex-col">
                  <label className="font-semibold">First Name</label>
                  <input
                    type="text"
                    className="rounded-md px-4 py-3 w-full border border-gray outline-none shadow-md"
                  />
                </div>
                <div className="my-2 w-[48%] flex flex-col">
                  <label className="font-semibold">Last Name</label>
                  <input
                    type="text"
                    className="rounded-md px-4 py-3 w-full border border-gray outline-none shadow-md"
                  />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Settings