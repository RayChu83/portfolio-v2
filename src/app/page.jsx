import { FaLessThan } from "react-icons/fa6";

import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <nav className="p-4 bg-gray-100 flex justify-center fixed w-full">
        <div className="flex items-center gap-1 text-lg text-[--primary-color] cursor-pointer absolute left-4 top-[39px] font-medium">
          <FaLessThan />
          Go Back
        </div>
        <div className="cursor-pointer flex flex-col items-center">
          <Image
            src="/ray.jpg"
            alt=""
            className="bg-gray-300 rounded-full"
            width="50"
            height="50"
          />
          <h3 className="font-medium">Ray Chu</h3>
        </div>
      </nav>
    </main>
  );
}
