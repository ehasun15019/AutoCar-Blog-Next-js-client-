import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";

const links = (
  <>
    <li>
      <a>Home</a>
    </li>

    <li>
      <a>About</a>
    </li>

    <li>
      <a>Blogs</a>
    </li>

    <li>
      <a>Contact Us</a>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div className="navbar shadow-sm">
      <div className="navbar-start">
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
        <Link href="/">
          <Image src={assets.logo} alt="logo" height={40} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        <div className="flex gap-3">
          <Link
            href=""
            className="btn btn-sm border-none text-black"
          >
            Login
          </Link>

          <Link
            href=""
            className="btn btn-sm border-none text-black"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// bg-[#232536] text-white