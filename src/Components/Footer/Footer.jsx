"use client"

import React from "react";
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, 
  FaLocationArrow, FaPhoneAlt, FaEnvelope, FaArrowUp 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-tr from-[#1A1C2B] to-[#11121A] text-white mt-10">
      <div className="px-6 sm:px-12 lg:px-24 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Finstreet</h2>
          <p className="text-gray-400">
            Innovating finance solutions for a better future. Stay in touch for news and updates.
          </p>
          <div className="flex gap-4 mt-2">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a key={i} href="#" className="p-2 bg-gray-700 rounded-full hover:bg-red-500 transition-transform transform hover:scale-110">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            {["Home", "About", "Services", "Blog", "Contact"].map((link, i) => (
              <li key={i}>
                <a href="#" className="hover:text-red-500 transition">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            {["Consulting", "Investments", "Strategy", "Support"].map((service, i) => (
              <li key={i}>
                <a href="#" className="hover:text-red-500 transition">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-4">Join our newsletter for updates and insights.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-4 py-2 rounded-l-md text-white w-full border border-gray-600 bg-transparent placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="bg-red-500 px-4 py-2 rounded-r-md hover:bg-red-600 transition flex items-center gap-1">
              <FaLocationArrow /> Send
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 py-6 flex flex-col md:flex-row md:justify-between md:items-center px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row gap-4 text-gray-400">
          <div className="flex items-center gap-2"><FaLocationArrow /> Finstreet 118, Abctown</div>
          <div className="flex items-center gap-2"><FaEnvelope /> example@femail.com</div>
          <div className="flex items-center gap-2"><FaPhoneAlt /> 001 21345 442</div>
        </div>
        <p className="text-gray-500 mt-4 md:mt-0">&copy; 2025 Finstreet. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
