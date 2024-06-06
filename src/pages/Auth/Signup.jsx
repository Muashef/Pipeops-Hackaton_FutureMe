import React, { useState } from "react";
import AuthLogo from "../../assets/auth_logo.svg";
import Goggle from "../../assets/google.svg";
import FB from "../../assets/fb.svg";
import Apple from "../../assets/apple.svg";
import { CiMail } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../../firebase.config";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const handleSignUp = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        console.log(response);
        setTimeout(() => {
          navigate("/login");
        }, 1500);
        setLoading(false);
        toast.success("Account created successfully", {
          theme: "colored",
          autoClose: 1500,
        });
      } catch (error) {
        setLoading(false);
        console.error(error.message);
        if (error.code === "auth/email-already-in-use") {
          toast.error("User with this email already exists. Please log in.", {
            theme: "colored",
            autoClose: 1500,
          });
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        } else if (error.code === "auth/weak-password") {
          toast.error("Password should be at least 8 characters.", {
            theme: "colored",
          });
        }
      }
    }
  };

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please Enter a Username", {
        theme: "light",
        autoClose: 3000,
      });
    }
    if (email === "" || email === null) {
      result = false;
      toast.warning("Please Enter Email Address", {
        theme: "light",
        autoClose: 3000,
      });
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password", {
        theme: "light",
        autoClose: 3000,
      });
    }

    return result;
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
            <div className="mb-4 relative">
              <label
                htmlFor="name"
                className="text-lg font-normal text-[#334158]"
              >
                Name
              </label>
              <div className="absolute inset-y-0 left-3 top-6 pr-3 flex items-center pointer-events-none">
                <LuUser2 className="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <input 
                id="username"
                type="text"
                className="rounded-md pl-10 pr-4 py-3 w-full bg-[#F8F8F8] placeholder:text-[#D6D6D6] border border-[#F8F8F8] outline-none"
                name="username"
                autoComplete="off"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
              <div className="absolute inset-y-0 left-3 top-6 pr-3 flex items-center pointer-events-none">
                <CiMail className="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <input
                id="email"
                type="text"
                className="rounded-md pl-10 pr-4 py-3 w-full bg-[#F8F8F8] placeholder:text-[#D6D6D6] border border-[#F8F8F8] outline-none"
                name="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <div className="absolute inset-y-0 left-3 top-6 pr-3 flex items-center">
                {showPassword ? (
                  <IoEyeOutline
                    className="h-5 w-5 text-gray-400 cursor-pointer"
                    onClick={togglePasswordVisibility}
                    aria-hidden="true"
                  />
                ) : (
                  <IoEyeOffOutline
                    className="h-5 w-5 text-gray-400 cursor-pointer"
                    onClick={togglePasswordVisibility}
                    aria-hidden="true"
                  />
                )}
              </div>
              <input
                id="password-input"
                type={showPassword ? "text" : "password"}
                className="rounded-md pl-9 pr-4 py-3 w-full bg-[#F8F8F8] placeholder:text-[#D6D6D6] border border-[#F8F8F8] outline-none"
                name="password"
                required
                autoComplete="off"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                I agree to the{" "}
                <span className="text-[#334158] text-lg underline font-medium">
                  Terms and condition
                </span>
              </label>
            </div>
            <button
              type="submit"
              onClick={handleSignUp}
              className="w-full py-3 px-4 mt-8 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#F97699]"
            >
              {loading ? "Loading" : "Sign Up"}
            </button>
          </form>
          <div className="flex items-center justify-center space-x-4 mt-4 mb-4">
            <div className="border-b border-[#F0F2F5] w-16 lg:w-36 h-2"></div>
            <p className="text-center text-sm mt-3 mb-3 cursor-pointer whitespace-nowrap">
              or sign up with
            </p>
            <div className="border-b border-[#F0F2F5] w-16 lg:w-36 h-2"></div>
          </div>
          <div className="flex items-center justify-center space-x-4 mt-4 mb-4 cursor-pointer">
            <img src={Goggle} alt="google" />
            <img src={FB} alt="facebook" />
            {/* <img src={Apple} alt="apple" /> */}
          </div>
          <p className="text-[#334158] text-base font-normal mt-8 text-center">
            Already have an account?
            <Link
              to="/login"
              className="text-base font-semibold text-[#F97699] pl-4"
            >
              Sign In
            </Link>
          </p>
        </div>
        <ToastContainer transition={Zoom} />
      </div>
    </div>
  );
};

export default Signup;
