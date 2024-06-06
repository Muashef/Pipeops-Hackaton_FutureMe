import React from 'react'
import User from '../../assets/user.svg';
import Sidebar from './Sidebar'

const Settings = () => {
  return (
    <div className='h-[100vh] w-full flex justify-start'>
        <Sidebar />
        <div className='flex flex-col md:items-start lg:ml-[20%] max-w-full md:max-w-[80vw] lg:max-w-7xl w-full px-6 py-10 mx-auto '>
            <h2 className='text-base font-bold text-[#334158]'>Personal Information</h2>
            <div className='flex items-center gap-4 mt-3'>
                <img src={User} alt="avatar" />
                <div>
                    <button className='bg-[#334158] text-white text-sm py-2 px-2 rounded-2xl'>Change Avatar </button>
                </div>
            </div>
            <div className='w-full md:w-[80%] mt-4'>
              <div className="flex flex-col md:flex-row flex-wrap justify-between gap-1">
                <div className="my-2 w-full md:w-[48%] flex flex-col">
                  <label className="text-[#334158] text-sm font-semibold mb-1">First Name</label>
                  <input
                    type="text"
                    className="rounded-md px-4 py-2 w-full border border-[#AEB8CF] outline-none"
                  />
                </div>
                <div className="my-2 w-full md:w-[48%] flex flex-col">
                  <label className="text-[#334158] text-sm font-semibold mb-1">Last Name</label>
                  <input
                    type="text"
                    className="rounded-md px-4 py-2 w-full border border-[#AEB8CF] outline-none"
                  />
                </div>
              </div>
              <div className="my-2 w-full flex flex-col mb-5">
                  <label className="text-[#334158] text-sm font-semibold mb-1">Email address</label>
                  <input
                    type="text"
                    className="rounded-md px-4 py-2 w-full border border-[#AEB8CF] outline-none"
                  />
               </div>
               <h2 className='text-[#334158] font-bold text-base mt-4 mb-5'>Change Password</h2>
               <div className="my-2 w-full flex flex-col mb-5">
                  <label className="text-[#334158] text-sm font-semibold mb-1">Current Password</label>
                  <input
                    type="text"
                    className="rounded-md px-4 py-2 w-full border border-[#AEB8CF] outline-none"
                  />
               </div>
               <div className="my-2 w-full flex flex-col mb-5">
                  <label className="text-[#334158] text-sm font-semibold mb-1">New Password</label>
                  <input
                    type="text"
                    className="rounded-md px-4 py-2 w-full border border-[#AEB8CF] outline-none"
                  />
               </div>
               <div className="my-2 w-full flex flex-col mb-5">
                  <label className="text-[#334158] text-sm font-semibold mb-1">Confirm Password</label>
                  <input
                    type="text"
                    className="rounded-md px-4 py-2 w-full border border-[#AEB8CF] outline-none"
                  />
               </div>

               <button className='w-full bg-[#F97699] py-2 rounded-lg text-center text-white text-base font-bold'>
                 Save
               </button>
               <hr />
               <div className='mt-10'>
                <p className='text-[#334158] text-base font-bold mb-4'>Delete Account</p>
                <p className='text-base text-[#334158] font-normal'>
                No longer want to use our service? You can delete your account here. All information related to this account will be deleted permanently
                </p>
                <button className='w-full border border-[#F4485D] mt-5 py-2 rounded-lg text-center text-[#F4485D] text-base font-bold mb-6'>
                 Yes, delete my account
               </button>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Settings