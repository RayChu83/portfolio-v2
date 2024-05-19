import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Chats from "@/app/_components/Chats";

import React from "react";

export default function Home() {
  return (
    <>
      <nav className="py-3 px-5 bg-gray-100 flex justify-center fixed w-full top-0 border-b border-gray-200 drop-shadow-sm">
        <div className="flex items-center text-lg text-[--primary-color] cursor-pointer absolute left-5 top-[39px] font-medium">
          <MdKeyboardArrowLeft className="text-3xl" />
          <span className="sm:block hidden">Go Back</span>
        </div>
        <Drawer>
          <DrawerTrigger>
            <div className="cursor-pointer flex flex-col items-center outline-none">
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
          <DrawerContent className="min-h-[80%] h-fit p-3 outline-none">
            <div className="flex flex-col items-center my-3">
              <Image
                src={`/ray.jpg`}
                alt="Ray Chu"
                className="bg-gray-300 rounded-full"
                width="100"
                height="100"
              />
              <h3 className="font-semibold text-2xl">Ray Chu</h3>
            </div>
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
                href="/resume.pdf"
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
            <section className="mx-auto my-3 rounded-lg overflow-hidden bg-gray-100 ">
              <Image
                src="/location.png"
                alt="Location"
                width="400"
                height="400"
                className="hover:opacity-50 transition-opacity"
              />
              <article className="p-3 flex flex-col">
                <h2 className="text-xl font-semibold">New York, NY</h2>
                <small className="text-gray-500">Manhattan</small>
              </article>
            </section>
          </DrawerContent>
        </Drawer>
      </nav>
      <main className="mt-28 max-w-5xl m-auto">
        <Chats />
      </main>
      <footer id="latestMessage"></footer>
    </>
  );
}
