import React from "react";
import Title from "../Title/Title";
import UpComingDesign from "../Design/UpComingDesign";
import { upComing } from "@/assets/assets";

const UpComing = () => {
  return (
    <div className="px-4 sm:px-10 lg:px-20 py-3">
      <div>
        <Title title1={"Up-Coming Feature"} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-3">
        {upComing.map((item) => {
          return (
            <div key={item.id} className="">
              <UpComingDesign
                img={item.img}
                description={item.description}
                title={item.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpComing;
