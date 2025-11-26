"use client";

import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets";

export default function AmericanCarsCard() {
  return (
    <div className="p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full max-w-5xl mx-auto">
      
      {/* Text Content */}
      <div className="flex-1 space-y-4">
        <p className="text-sm text-gray-500">Cars.com news</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Which Cars Are Most American?
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          We analyze five factors to determine which new cars are the most American.
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          <button className="cursor-pointer px-5 py-2 border border-gray-900 rounded-full text-gray-900 font-medium hover:bg-gray-100 transition text-[0.9rem]">
            See all tariff news
          </button>
          <button className="cursor-pointer px-5 py-2 bg-gray-900 text-white rounded-full font-medium hover:bg-black transition text-[0.9rem]">
            Shop American-made cars
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1">
        <Image
          src={assets.about}
          alt="American Cars"
          className="rounded-xl object-contain"
        />
      </div>
    </div>
  );
}
