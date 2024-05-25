import { getPortfolio } from "@/utils";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import DrawerOpen from "@/app/_components/DrawerOpen";

import React from "react";

export default function SideBar({ barOpened }) {
  const portfolio = getPortfolio();
  return (
    <>
      <div
        className={`fixed bg-gray-100 top-0 bottom-0 ${
          barOpened ? "left-0" : "sm:left-[-275px] left-[-100%]"
        } sm:w-[275px] w-full overflow-y-auto text-center drop-shadow-md transition-left duration-300 z-40`}
      >
        <section className="mt-28 flex flex-col items-center rounded-md py-3">
          <DrawerOpen>
            <article
              key={portfolio.imageSrc}
              className="bg-[--primary-color] w-full p-3 flex items-center justify-start gap-3 drop-shadow-lg cursor-pointer hover:opacity-[92%]"
              title={portfolio.name}
            >
              <Image
                src={portfolio.imageSrc}
                height={50}
                width={50}
                alt={portfolio.name}
                className="rounded-full"
              />
              <h3 className="font-medium flex items-center text-white">
                {portfolio.name} <MdKeyboardArrowRight />
              </h3>
            </article>
          </DrawerOpen>
        </section>
      </div>
    </>
  );
}
