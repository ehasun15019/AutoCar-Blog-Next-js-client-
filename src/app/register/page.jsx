import { assets } from "@/assets/assets";
import RegisterFrom from "@/Components/Register/RegisterFrom";
import Image from "next/image";

export default function register() {
  return (
    <div className="py-8 px-4 sm:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row items-center gap-10 justify-center">
        <RegisterFrom />
        <Image
          src={assets.register}
          alt="register image"
          width={420}
          className="hidden md:block"
        />
      </div>
    </div>
  );
}
