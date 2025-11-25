"use client";

import { assets } from "@/assets/assets";
import { AuthContext } from "@/Context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
import { FaBars } from "react-icons/fa";
import Swal from "sweetalert2";

const links = (
  <>
    <li>
      <Link href="/">Home</Link>
    </li>

    <li>
      <Link href="">Blogs</Link>
    </li>

    <li>
      <Link href="">About</Link>
    </li>

    <li>
      <Link href="/sell-car">Sell a car</Link>
    </li>

    <li>
      <Link href="">Contact Us</Link>
    </li>
  </>
);

const Navbar = () => {
  const { user, signOutFunction } = use(AuthContext);

  // handle signout
  const handleSignOut = () => {
    signOutFunction()
      .then(() => {
        Swal.fire({
          title: "Log out Successfully",
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
  };

  return (
    <div className="navbar shadow-sm">
      <div className="navbar-start px-4">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBars />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link href="/" className="flex gap-2 items-center">
          <Image src={assets.logo} alt="logo" height={40} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        <div className="flex gap-3">
          {user ? (
            <button
              className="btn btn-sm border-none text-black"
              onClick={handleSignOut}
            >
              log out
            </button>
          ) : (
            <Link href="/login" className="btn btn-sm border-none text-black">
              Login
            </Link>
          )}

          <Link href="/register" className="btn btn-sm border-none text-black">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// bg-[#232536] text-white
