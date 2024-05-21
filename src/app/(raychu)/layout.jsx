import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import DrawerOpen from "@/app/_components/DrawerOpen";

import React from "react";

export default function RayChuLayout({ children }) {
  return (
    <>
      <nav className="py-3 px-5 bg-gray-100 flex justify-center fixed w-full top-0 border-b border-gray-200 drop-shadow-sm z-50">
        <div className="flex items-center text-lg text-[--primary-color] cursor-pointer absolute left-5 top-[39px] font-medium">
          <MdKeyboardArrowLeft className="text-3xl" />
          <span className="sm:block hidden text-base">Go Back</span>
        </div>
        <DrawerOpen>
          <div className="cursor-pointer flex flex-col items-center outline-none">
            <Image
              src={`/ray.jpg`}
              alt="Ray Chu"
              className="bg-gray-300 rounded-full"
              width="50"
              height="50"
            />
            <h3 className="font-medium flex items-center">
              Ray Chu <MdKeyboardArrowRight />
            </h3>
          </div>
        </DrawerOpen>
      </nav>
      {children}
    </>
  );
}
