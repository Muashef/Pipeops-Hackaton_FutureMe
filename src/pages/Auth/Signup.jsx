import React, { useState } from 'react'
import AuthLogo from '../../assets/auth_logo.svg';
import Goggle from '../../assets/google.svg';
import FB from '../../assets/fb.svg';
import Apple from '../../assets/apple.svg';
import { CiMail } from "react-icons/ci";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Signup = () => {
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
        <div className="max-w-md p-6 mt-32 md:mt-28">
          <h2 className="text-2xl text-center text-[#334158] font-semibold mb-2">
            Create Your Account
          </h2>
          <form className="mt-5">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="text-lg font-normal text-[#334158]"
              >
                Name
              </label>
              <input
                id="username"
                type="text"
                className="rounded-md px-4 py-3 w-full bg-[#F8F8F8] border border-[#F8F8F8] outline-none"
                name="username"
                autoComplete="off"
                autoFocus
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="email"
                className="text-lg font-normal text-[#334158]"
              >
                Email
              </label>
              <div className="absolute inset-y-0 right-0 top-5 pr-3 flex items-center pointer-events-none">
                <CiMail className="h-4 w-4 text-gray-400" aria-hidden="true" />
              </div>
              <input
                id="email"
                type="text"
                className="rounded-md px-4 py-3 w-full bg-[#F8F8F8] border border-[#F8F8F8] outline-none"
                name="email"
                autoComplete="off"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-2 relative">
              <label
                htmlFor="password"
                className="text-lg font-normal text-[#334158]"
              >
                Password
              </label>
              <div className="absolute inset-y-0 right-0 pr-3 top-5 flex items-center">
                {showPassword ? (
                  <IoEyeOutline
                    className="h-4 w-4 text-gray-400 cursor-pointer"
                    onClick={togglePasswordVisibility}
                    aria-hidden="true"
                  />
                ) : (
                  <IoEyeOffOutline
                    className="h-4 w-4 text-gray-400 cursor-pointer"
                    onClick={togglePasswordVisibility}
                    aria-hidden="true"
                  />
                )}
              </div>
              <input
                id="password-input"
                type={showPassword ? "text" : "password"}
                className="rounded-md px-4 py-3 w-full bg-[#F8F8F8] border border-[#F8F8F8] outline-none"
                name="password"
                required
                autoComplete="off"
                placeholder="Password"
              />
            </div>
            <p className="text-[#334158] text-sm font-normal">
              Must be at least 8 characters
            </p>
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-900"
              >
                I agree to the <span className='text-[#334158] text-lg underline font-medium'>Terms and condition</span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 mt-8 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#F97699]"
            >
              Sign Up
            </button>
          </form>
          <div className="flex items-center justify-center space-x-4 mt-4 mb-4">
            <div className="border-b border-[#F0F2F5] w-16 lg:w-36 h-2"></div>
            <p className="text-center text-sm mt-3 mb-3 cursor-pointer whitespace-nowrap">or sign up with</p>
            <div className="border-b border-[#F0F2F5] w-16 lg:w-36 h-2"></div>
          </div>
          <div className="flex items-center justify-center space-x-4 mt-4 mb-4 cursor-pointer">
            <img src={Goggle} alt="google" />
            <img src={FB} alt="facebook" />
            <img src={Apple} alt="apple" />
          </div>
          <p className="text-[#334158] text-base font-normal mt-8 text-center">
            Already have an account?
            <Link to="/login" className="text-base font-semibold text-[#F97699] pl-4">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup