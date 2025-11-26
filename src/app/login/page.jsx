import { assets } from "@/assets/assets";
import LoginFrom from "@/Components/Login/LoginFrom";
import Image from "next/image";
import { Suspense } from "react";

export default function login() {
  return (
    <div className="py-8 px-4 sm:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row items-center gap-10 justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          <LoginFrom />
        </Suspense>
        <Image
          src={assets.login}
          alt="register image"
          width={420}
          className="hidden md:block"
        />
      </div>
    </div>
  );
}
