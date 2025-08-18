import { getPortfolio } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import DrawerOpen from "./DrawerOpen";

export default function ContactCard() {
  const { name, role, state, phone, email, linkedIn } = getPortfolio();
  return (
    <article className="bg-gray-100 text-black rounded-xl w-full relative p-5 overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-3 bg-[--primary-color]" />
      <header className="flex items-center justify-between">
        <span>
          <h3 className="text-2xl font-serif font-semibold">{name}</h3>
          <p className="text-gray-500 italic">
            {role}, {state}
          </p>
        </span>
        <Image
          src={"/hunter.png"}
          alt={"Hunter College"}
          width={50}
          height={50}
          className="bg-white p-1 rounded-lg mr-3 drop-shadow-md"
        />
      </header>
      <div className="mt-4 italic flex flex-col gap-1.5">
        <span className="flex items-center gap-2">
          <FaPhoneAlt />
          {phone}
        </span>
        <Link
          href={`mailto:${email}`}
          className="flex items-center gap-2 underline"
        >
          <MdEmail />
          {email}
        </Link>
        <Link href={linkedIn} className="flex items-center gap-2 underline">
          <FaLinkedin />
          {linkedIn}
        </Link>
      </div>
    </article>
  );
}
