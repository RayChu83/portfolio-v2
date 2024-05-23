"use client";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import DrawerOpen from "@/app/_components/DrawerOpen";
import SideBar from "@/app/_components/SideBar";
import { getPortfolio } from "@/utils";

import React, { useState } from "react";

export default function NavMenu() {
  const portfolio = getPortfolio();
  const [barOpened, setBarOpened] = useState(false);
  return (
    <>
      <SideBar barOpened={barOpened} />
      <nav className="py-3 px-5 bg-gray-100 flex justify-center fixed w-full top-0 drop-shadow-sm z-50">
        <div
          className="flex items-center text-lg text-[--primary-color] cursor-pointer absolute left-5 top-[39px] font-medium"
          onClick={() => setBarOpened((prev) => !prev)}
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
            />
            <h3 className="font-medium flex items-center">
              {portfolio.name} <MdKeyboardArrowRight />
            </h3>
          </div>
        </DrawerOpen>
      </nav>
    </>
  );
}
