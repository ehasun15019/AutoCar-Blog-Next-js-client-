"use client";

import Link from "next/link";
import React, { use } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { AuthContext } from "@/Context/AuthContext";
import { GoogleAuthProvider } from "firebase/auth";

const RegisterFrom = () => {
  const { createUserFunction, popUp } = use(AuthContext);

  // handle Register
  const handleRegister = (e) => {
    e.preventDefault();

    const target = e.target;
    const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;

    createUserFunction(email, password)
      .then((getUser) => {
        console.log(getUser.user);

        Swal.fire({
          title: "Registered Successfully",
          icon: "success",
          draggable: true,
        });

        target.reset();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.message,
          text: "Something went wrong!",
        });
      });
  };

  // register with google
  const provider = new GoogleAuthProvider();

  const handleGoogleRegister = () => {
    popUp(provider)
    .then((newUser) => {
        console.log(newUser.user)
         Swal.fire({
          title: "Registered With Google Successfully",
          icon: "success",
          draggable: true,
        });
    })
    .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.message,
          text: "Something went wrong!",
        });
    });
  }

  return (
    <div className="mx-6">
      <form
        className="bg-white shadow-lg px-6 py-5 rounded w-full"
        onSubmit={handleRegister}
      >
        <h3 className="text-2xl font-bold text-center mb-3">Register Now</h3>
        <fieldset className="fieldset w-[300px]">
          {/* name */}
          <label className="label text-black font-semibold">Name</label>
          <div className="flex items-center px-3 rounded mb-2 bg-[#F8F7FB]">
            <FaRegUser className="text-primary" />
            <input
              type="text"
              className="input border-0 outline-0 bg-transparent"
              placeholder="Name"
              name="name"
            />
          </div>

          {/* Email */}
          <label className="label text-black font-semibold">Email</label>
          <div className="flex items-center px-3 rounded mb-2 bg-[#F8F7FB]">
            <MdOutlineMailOutline className="text-primary" />
            <input
              type="email"
              className="input border-0 outline-0 bg-transparent"
              placeholder="Email"
              name="email"
            />
          </div>

          {/* Password */}
          <label className="label text-black font-semibold">Password</label>
          <div className="flex items-center px-3 rounded mb-2 bg-[#F8F7FB]">
            <TbLockPassword className="text-primary" />
            <input
              type="password"
              className="input border-0 outline-0 bg-transparent"
              placeholder="Password"
              name="password"
            />
          </div>

          <p className="py-1 text-center">
            Already have an account?
            <Link href="" className="text-primary ps-1">
              Login
            </Link>
          </p>

          <button className="btn btn-primary text-black mt-4">Register</button>

          <div className="flex items-center my-4 text-gray-400 text-sm tracking-wide">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-3">You can Connect with</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <div className="flex justify-center">
            <FcGoogle size={30} className="text-center cursor-pointer" onClick={handleGoogleRegister} />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default RegisterFrom;
