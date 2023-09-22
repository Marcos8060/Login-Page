import Link from "next/link";
import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { AiFillExclamationCircle } from 'react-icons/ai'

const Login = () => {
  return (
    <section className="flex items-center h-screen">
      <div className="w-1/2">
        <form>
          <section className="flex flex-col space-y-8 items-center justify-center">
            <div className="w-4/12 space-y-1">
              <h1 className="text-3xl font-semibold">Welcome Back</h1>
              <p className="text-xs">
                If you forgot your password, please contact your system
                administrator for a password reset
              </p>
            </div>
            <div className="space-y-2">
              <label
                className="uppercase text-sm text-gray-400"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                className="block border rounded-xl px-3 py-2 focus:outline-none border-gray-400"
                placeholder="Enter Email"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label
                className="uppercase text-sm text-gray-400"
                htmlFor="Email"
              >
                Password
              </label>
              <input
                className="block border rounded-xl px-3 py-2 focus:outline-none border-gray-400"
                placeholder="Enter Password"
                type="password"
              />
            </div>
          </section>
          <div className="flex items-center justify-center">
            <div>
              <FormControlLabel control={<Checkbox />} label="I agree to" />
            </div>
            <div>
              <a className="text-sm underline text-blue-700" href="/">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button className="bg-[#02273D] rounded-3xl px-12 py-2 text-white">
              Login
            </button>
          </div>
        </form>
        <p className="text-center text-xs bottom-0 mt-12 flex items-center justify-center gap-4">
            <AiFillExclamationCircle className="text-xl" />
          Make Easy HMIS v1.0
        </p>
      </div>
      <div className="w-1/2 loginPage text-white flex flex-col items-center justify-center space-y-12">
        <div>
          <p className="text-3xl uppercase font-thin">Welcome to</p>
          <h1 className="uppercase text-4xl border-b py-8">Make-Easy HMIS</h1>
        </div>
        <div>
            <p className="text-3xl">We make HMIS Easy</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
