import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaLessThan } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export default function Home() {
  return (
    <main>
      <nav className="p-3 bg-gray-100 flex justify-center fixed w-full">
        <div className="flex items-center gap-1 text-lg text-[--primary-color] cursor-pointer absolute left-4 top-[39px] font-medium">
          <FaLessThan />
          Go Back
        </div>
        <Drawer>
          <DrawerTrigger>
            <div className="cursor-pointer flex flex-col items-center">
              <Image
                src={`/ray.jpg`}
                alt="Ray Chu"
                className="bg-gray-300 rounded-full"
                width="50"
                height="50"
              />
              <h3 className="font-medium">Ray Chu</h3>
            </div>
          </DrawerTrigger>
          <DrawerContent className="h-[80%]">
            <DrawerHeader>
              <div className="cursor-pointer flex flex-col items-center">
                <Image
                  src={`/ray.jpg`}
                  alt="Ray Chu"
                  className="bg-gray-300 rounded-full"
                  width="100"
                  height="100"
                />
                <h3 className="font-semibold text-2xl">Ray Chu</h3>
              </div>
            </DrawerHeader>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-3 mx-auto max-w-[400px] w-[100%]">
              <Link
                href="mailto:rayc12079@gmail.com"
                target="_blank"
                className="bg-gray-100 py-2 px-5 flex flex-col items-center rounded-lg hover:bg-gray-200 transition-colors"
              >
                <MdEmail className="text-xl" />
                <span className="text-sm">Email</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/raychu83/"
                target="_blank"
                className="bg-gray-100 py-2 px-5 flex flex-col items-center rounded-lg hover:bg-gray-200 transition-colors"
              >
                <FaLinkedin className="text-xl" />
                <span className="text-sm">LinkedIn</span>
              </Link>
              <Link
                href=""
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
                <PopoverContent>+1 646-925-0205</PopoverContent>
              </Popover>
            </div>
            <section className="mx-auto my-4 rounded-lg overflow-hidden bg-gray-100 ">
              <Image
                src="/location.png"
                alt="Location"
                width="400"
                height="400"
              />
              <article className="p-4 flex flex-col">
                <h2 className="text-xl font-semibold">New York, NY</h2>
                <small className="text-gray-500">Manhattan</small>
              </article>
            </section>
          </DrawerContent>
        </Drawer>
      </nav>
    </main>
  );
}
