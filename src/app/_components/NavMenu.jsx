"use client";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import DrawerOpen from "@/app/_components/DrawerOpen";
import SideBar from "@/app/_components/SideBar";
import { getPortfolio } from "@/utils";

import React, { useRef, useState } from "react";

export default function NavMenu() {
  const portfolio = getPortfolio();
  const [barOpened, setBarOpened] = useState(false);
  const barRef = useRef(null);
  const barOpenedRef = useRef(barOpened);
  const toggleBarOpened = () => {
    // Toggles the pop up on and off
    setBarOpened((prev) => {
      const updatedVal = !prev;
      barOpenedRef.current = updatedVal; // Update the ref so that event listeners have access to the latest state value
      return !prev;
    });
  };
  return (
    <div ref={barRef}>
      <SideBar
        barRef={barRef}
        barOpened={barOpened}
        barOpenedRef={barOpenedRef}
        toggleBarOpened={toggleBarOpened}
      />
      <nav className="py-3 px-5 bg-gray-100 flex justify-center fixed w-full top-0 drop-shadow-sm z-50">
        <div
          className="flex items-center text-lg text-[--primary-color] cursor-pointer absolute left-5 top-[39px] font-medium"
          onClick={toggleBarOpened}
        >
          <MdKeyboardArrowLeft className="text-3xl" />
          <span className="sm:block hidden text-base">
            {barOpened ? "Hide" : "Go Back"}
          </span>
        </div>
        <DrawerOpen>
          <div
            className="cursor-pointer flex flex-col items-center outline-none"
            title={portfolio.name}
          >
            <Image
              src={portfolio.imageSrc}
              alt={portfolio.name}
              className="bg-gray-300 rounded-full"
              width="50"
              height="50"
              priority
            />
            <h3 className="font-medium flex items-center">
              Ray Chu <MdKeyboardArrowRight />
            </h3>
          </div>
        </DrawerOpen>
      </nav>
    </div>
  );
}
