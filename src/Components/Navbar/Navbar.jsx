"use client";

import { assets } from "@/assets/assets";
import { AuthContext } from "@/Context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
import { FaBars } from "react-icons/fa";
import Swal from "sweetalert2";
import { usePathname } from "next/navigation"; // <-- Import
import "./Navbar.css";

const Navbar = () => {
  const { user, signOutFunction } = use(AuthContext);
  const pathname = usePathname(); // <-- Get current path

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

  // Links array with active check
  const links = [
    { href: "/", label: "Home" },
    { href: "/all-cars", label: "All Blogs" },
    { href: "/about", label: "About" },
    { href: "/sell-car", label: "Sell a car" },
  ];

  return (
    <div className="navbar shadow-sm">
      <div className="navbar-start px-4">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FaBars />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? "active" : ""}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link href="/" className="flex gap-2 items-center">
          <Image src={assets.logo} alt="logo" height={40} />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? "active" : ""}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
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
