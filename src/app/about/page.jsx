"use client";

import { assets } from "@/assets/assets";
import AllCategories from "@/Components/All-Categories/AllCategories";
import AmericanCarsCard from "@/Components/AmericansCard/American";
import Image from "next/image";
import Link from "next/link";
import { FaCar, FaUsers, FaStar } from "react-icons/fa";

export default function About() {
  return (
    <div className="w-11/12 mx-auto py-16 space-y-24">
      {/* Hero Section */}
      <AmericanCarsCard />

      {/* About Us Section */}
      <section className="text-gray-800 space-y-6 md:space-y-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center">About Us</h2>
        <p className="text-center max-w-3xl mx-auto text-lg md:text-xl">
          AutoCar is a community-driven platform where car enthusiasts meet,
          buyers find the perfect vehicle, and sellers get the best deals. We
          combine innovation, transparency, and trust to make car trading easy.
        </p>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <FaCar className="text-blue-600 text-5xl mx-auto mb-4" />
          <h3 className="text-3xl font-bold">500+</h3>
          <p className="text-gray-500 mt-2">Cars Sold</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <FaUsers className="text-purple-600 text-5xl mx-auto mb-4" />
          <h3 className="text-3xl font-bold">300+</h3>
          <p className="text-gray-500 mt-2">Happy Users</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <FaStar className="text-yellow-400 text-5xl mx-auto mb-4" />
          <h3 className="text-3xl font-bold">4.9/5</h3>
          <p className="text-gray-500 mt-2">Average Rating</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="space-y-6 md:space-y-10">
        <AllCategories />
      </section>

      {/* Call To Action */}
      <section className="bg-secondary rounded-3xl text-white p-10 text-center shadow-xl hover:shadow-2xl transition">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join the AutoCar Community Today!
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Explore, buy, and sell cars with confidence.
        </p>
        <Link
          href="/all-cars"
          className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform inline-block"
        >
          Explore Cars
        </Link>
      </section>
    </div>
  );
}
