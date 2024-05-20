"use client";
import Link from "next/link";
import Cta from "@/app/_components/Cta";
import Projects from "@/app/_components/Projects";
import { useRouter } from "next/navigation";
import Skills from "@/app/_components/Skills";
import Image from "next/image";
import DrawerOpen from "./DrawerOpen";

import React, { useState } from "react";

const GetReceivedMessage = (type, updateChats) => {
  const { push } = useRouter();
  let message;
  switch (type) {
    case "Welcome":
      message = (
        <article className="bg-gray-100 text-black p-3 rounded-xl w-fit">
          <p>
            👋 Welcome, my name is Ray, and I am an aspiring{" "}
            <strong>Front End Developer </strong>
            passionate about creating stunning web applications.
          </p>
          <Cta type={type} updateChats={updateChats} push={push} />
        </article>
      );
      break;
    case "About":
      message = (
        <article className="bg-gray-100 text-black p-3 rounded-xl w-fit">
          <p>
            👋 Hey, I am Ray as mentioned earlier, I was born and raised in
            Manhattan NY, and I&apos;ve have been{" "}
            <strong>coding for a little over a year</strong>. Outside of my
            work, I am currently attending school at the Manhattan Early College
            School for Advertising while taking courses at the Borough of
            Manhattan Community College. On a personal level I am very
            enthusiastic about trying new things and building connections with
            people. If you have any questions feel free to reach out via{" "}
            <Link
              href="https://www.linkedin.com/in/raychu83/"
              target="_blank"
              className="font-medium text-[--primary-color]"
            >
              {" "}
              LinkedIn{" "}
            </Link>
            or through
            <Link
              href="mailto:rayc12079@gmail.com"
              target="_blank"
              className="font-medium text-[--primary-color]"
            >
              {" "}
              Email
            </Link>
            .
          </p>
          <Cta type={type} updateChats={updateChats} push={push} />
        </article>
      );
      break;
    case "Projects":
      message = (
        <>
          <Projects />
          <article className="bg-gray-100 text-black rounded-xl w-full">
            <Cta type={type} updateChats={updateChats} push={push} />
          </article>
        </>
      );
      break;
    case "Skills":
      message = (
        <>
          <span className="space-y-2">
            <Skills />
          </span>
          <article className="bg-gray-100 text-black p-3 rounded-xl w-full mt-2">
            <h3>
              💪 Above are all the technical skills I&apos;ve learned throughout
              software development journey.
            </h3>
            <Cta type={type} updateChats={updateChats} push={push} />
          </article>
        </>
      );
      break;
    default: {
      message = (
        <article className="bg-gray-100 text-black p-3 rounded-xl w-full">
          <p>Unable to handle your request, Please try again!</p>
          <Cta type={type} updateChats={updateChats} push={push} />
        </article>
      );
    }
  }
  return message;
};

export default function Chats() {
  const [chats, setChats] = useState([
    { direction: "received", type: "Welcome" },
  ]);
  return (
    <section className="flex flex-col py-3 px-5 gap-2">
      {chats.map((chat) =>
        chat.direction === "sent" ? (
          <article
            key={chat}
            className="bg-[--primary-color] text-white self-end p-3 rounded-xl max-w-xl"
          >
            <p>{chat.message}</p>
          </article>
        ) : (
          <span
            key={chat}
            className="self-start max-w-xl w-[80%] flex items-end gap-1"
          >
            <DrawerOpen className="flex-shrink-0 w-[50px] h-[50px] flex items-center justify-center">
              <Image
                src="/ray.jpg"
                alt="Ray Chu"
                height={25}
                width={25}
                className="rounded-full cursor-pointer"
              />
            </DrawerOpen>
            <span>{GetReceivedMessage(chat.type, setChats)}</span>
          </span>
        )
      )}
    </section>
  );
}
