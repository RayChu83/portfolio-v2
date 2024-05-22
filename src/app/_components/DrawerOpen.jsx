import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { getPortfolio } from "@/utils";

import React from "react";

export default function DrawerOpen({ children }) {
  const portfolio = getPortfolio();
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="min-h-[80%] h-fit p-3 outline-none">
        <div className="flex flex-col items-center my-3">
          <Image
            src={portfolio.imageSrc}
            alt={portfolio.name}
            className="bg-gray-300 rounded-full"
            width="100"
            height="100"
          />
          <h3 className="font-semibold text-2xl">{portfolio.name}</h3>
          <h4 className="font-medium text-sm text-gray-500">
            {portfolio.role}
          </h4>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-3 mx-auto max-w-[400px] w-[100%]">
          <Link
            href={`mailto:${portfolio.email}`}
            target="_blank"
            className="bg-gray-100 py-2 px-5 flex flex-col items-center rounded-lg hover:bg-gray-200 transition-colors"
          >
            <MdEmail className="text-xl" />
            <span className="text-sm">Email</span>
          </Link>
          <Link
            href={portfolio.linkedIn}
            target="_blank"
            className="bg-gray-100 py-2 px-5 flex flex-col items-center rounded-lg hover:bg-gray-200 transition-colors"
          >
            <FaLinkedin className="text-xl" />
            <span className="text-sm">LinkedIn</span>
          </Link>
          <Link
            href={portfolio.resume}
            target="_blank"
            className="bg-gray-100 py-2 px-5 flex flex-col items-center rounded-lg hover:bg-gray-200 transition-colors"
          >
            <FaFilePdf className="text-xl" />
            <span className="text-sm">Resume</span>
          </Link>
          <Popover>
            <PopoverTrigger>
              <article className="bg-gray-100 py-2 px-5 flex flex-col items-center rounded-lg hover:bg-gray-200 transition-colors">
                <FaPhoneAlt className="text-xl" />
                <span className="text-sm">Phone</span>
              </article>
            </PopoverTrigger>
            <PopoverContent>{portfolio.phone}</PopoverContent>
          </Popover>
        </div>
        <section className="mx-auto my-3 rounded-lg overflow-hidden bg-gray-100 ">
          <Image
            src={portfolio.locationSrc}
            alt="Location"
            width="400"
            height="400"
            className="hover:opacity-50 transition-opacity"
          />
          <article className="p-3 flex flex-col">
            <h2 className="text-xl font-semibold">{portfolio.state}</h2>
            <small className="text-gray-500">{portfolio.borough}</small>
          </article>
        </section>
      </DrawerContent>
    </Drawer>
  );
}
