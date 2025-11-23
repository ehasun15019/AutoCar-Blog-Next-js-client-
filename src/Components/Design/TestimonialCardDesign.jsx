import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";

const TestimonialCardDesign = ({
  user_photoURL,
  userName,
  ratings,
  review,
}) => {
  return (
    <div className="p-4">
      <div className="card bg-black/20 shadow-md p-6 rounded-xl border border-white text-white max-w-md mx-auto">
        {/* Quote Icon */}
        <FaQuoteLeft className="text-3xl text-primary mb-4" />

        {/* Review Text */}
        <p className="leading-relaxed mb-6">{review}</p>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-300 mb-4"></div>

        {/* User Section */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 relative rounded-full overflow-hidden">
            {/* <Image
              src={user_photoURL}
              alt={userName}
              fill
              className="object-cover"
            /> */}
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-600">{userName}</h3>

            <div className="flex gap-2 pt-2">
              <TiStarFullOutline className="text-yellow-400" />
              <p className="text-gray-200 text-sm">{ratings}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCardDesign;
