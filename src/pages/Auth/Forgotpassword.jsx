import React, { useState } from 'react'
import AuthLogo from '../../assets/auth_logo.svg';
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

const Forgotpassword = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

  return (
    <div className="flex h-screen">
      <div className="hidden md:block md:w-1/2 overflow-hidden">
        <img className="object-cover h-full w-full" src={AuthLogo} alt="Logo" />
      </div>
      <div className="w-full md:w-1/2 flex md:px-16 bg-white overflow-y-auto justify-center flex-col max-md:items-center">
        <div className="max-w-md p-6 mt-32 md:mt-0">
          <h2 className="text-2xl text-center text-[#334158] font-semibold mb-2">
            Forgot Password
          </h2>
          <form className="mt-5">
            <div className="mb-4 relative">
              <label
                htmlFor="email"
                className="text-lg font-normal text-[#334158]"
              >
                Email
              </label>
              <div className="absolute inset-y-0 left-3 top-6 pr-3 flex items-center pointer-events-none">
                <CiMail className="h-6 w-6 text-gray-400" aria-hidden="true"  />
              </div>
              <input
                id="email"
                type="text"
                className="rounded-md pl-10 pr-4 py-3 w-full bg-[#F8F8F8] placeholder:text-[#D6D6D6] border border-[#F8F8F8] outline-none"
                name="email"
                autoComplete="off"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 mt-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#F97699]"
            >
              Send Verification Link
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Forgotpassword