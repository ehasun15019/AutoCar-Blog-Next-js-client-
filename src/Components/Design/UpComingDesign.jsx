import Image from "next/image";
import React from "react";

const UpComingDesign = ({ img, title, description }) => {
  return (
    <div>
      <div className="card bg-gray-200 w-60 md:w-70 shadow-sm">
        <figure className="px-5 pt-5">
          <Image src={img} alt="feature image" />
        </figure>

        <div className="card-body items-center text-center">
          <h2 className="card-title text-[1rem] font-bold">{title}</h2>

          <div className="card-actions flex items-center">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComingDesign;
