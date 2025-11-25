"use client";

import { AuthContext } from "@/Context/AuthContext";
import { GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import Swal from "sweetalert2";

const LoginFrom = () => {
  const { popUp, loginWithEmailPassword } = use(AuthContext);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/";

  // login with email, password
  const handleLogin = (e) => {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    const password = target.password.value;

    loginWithEmailPassword(email, password)
      .then((getUser) => {
        console.log(getUser.user);
        Swal.fire({
          title: "Login Successfully",
          icon: "success",
        });
        target.reset();
        router.push(redirectPath);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.message,
          text: "Something went wrong!",
        });
      });
  };

  // Login with google
  const provider = new GoogleAuthProvider();

  const handleGoogleRegister = () => {
    popUp(provider)
      .then((newUser) => {
        console.log(newUser.user);
        Swal.fire({
          title: "Login With Google Successfully",
          icon: "success",
          draggable: true,
        });
        router.push(redirectPath);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.message,
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div className="mx-6">
      <form
        className="bg-white shadow-lg px-6 py-5 rounded w-full"
        onSubmit={handleLogin}
      >
        <h3 className="text-2xl font-bold text-center mb-3">Login Now</h3>
        <fieldset className="fieldset w-[300px]">
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

          <div className="flex flex-col items-center space-y-2">
            <p className="">
              Do not have any account?
              <Link href="/register" className="text-primary ps-1">
                Register
              </Link>
            </p>

            <Link
              href="/forgot-password"
              className="text-primary cursor-pointer hover:underline"
            >
              Forgot Password
            </Link>
          </div>

          <button className="btn btn-primary text-black mt-4">Login</button>

          <div className="flex items-center my-4 text-gray-400 text-sm tracking-wide">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-3">You can Connect with</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <div className="flex justify-center">
            <FcGoogle
              size={30}
              className="text-center cursor-pointer"
              onClick={handleGoogleRegister}
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default LoginFrom;
