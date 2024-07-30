"use client";
import Link from "next/link";
import Cta from "@/app/_components/Cta";
import Projects from "@/app/_components/Projects";
import Skills from "@/app/_components/Skills";
import Image from "next/image";
import DrawerOpen from "@/app/_components/DrawerOpen";
import Animation from "@/app/_components/Animation";
import { getPortfolio } from "@/utils";

import React, { useEffect, useRef, useState } from "react";
import Experience from "./Experience";

const GetReceivedMessage = (type, updateChats, portfolio) => {
  let message;
  switch (type) {
    case "Welcome":
      message = (
        <article className="bg-gray-100 text-black p-3 rounded-xl w-fit">
          <p>
            👋 Hello, my name is {portfolio.name.split(" ")[0]}, and I am a
            <strong> {portfolio.role} </strong>
            passionate about creating stunning web applications.
          </p>
          <Cta type={type} updateChats={updateChats} />
        </article>
      );
      break;
    case "About":
      message = (
        <span className="space-y-3">
          <article className="bg-gray-100 text-black p-3 rounded-xl w-fit">
            <p>
              👋 Hey, I am {portfolio.name.split(" ")[0]} as mentioned earlier,
              I was born and raised in Manhattan NY, and I recently started my
              position as a <strong>Front End Engineer</strong> at Unlevered.
            </p>
          </article>
          <article className="bg-gray-100 text-black p-3 rounded-xl w-fit">
            <p>
              Outside of my work, I am currently attending school at the
              Manhattan Early College School for Advertising while taking
              courses at the Borough of Manhattan Community College. Throughout
              my time in school, I have deeply immersed myself in the
              fundamentals of <strong>design for the last 3 years.</strong>
            </p>
          </article>
          <article className="bg-gray-100 text-black p-3 rounded-xl w-fit">
            <p>
              On a personal level I am very enthusiastic about trying new things
              and building connections with people. If you have any questions
              feel free to reach out via{" "}
              <Link
                href={portfolio.linkedIn}
                target="_blank"
                className="font-medium text-[--primary-color]"
              >
                {" "}
                LinkedIn{" "}
              </Link>
              or through
              <Link
                href={`mailto:${portfolio.email}`}
                target="_blank"
                className="font-medium text-[--primary-color]"
              >
                {" "}
                Email
              </Link>
              .
            </p>
            <Cta type={type} updateChats={updateChats} />
          </article>
        </span>
      );
      break;
    case "Experience":
      message = (
        <>
          <Experience />
          <article className="bg-gray-100 text-black rounded-xl w-full">
            <Cta type={type} updateChats={updateChats} />
          </article>
        </>
      );
      break;
    case "Projects":
      message = (
        <>
          <Projects />
          <article className="bg-gray-100 text-black rounded-xl w-full">
            <Cta type={type} updateChats={updateChats} />
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
              🚀 Above are the technologies/tools I&apos;ve used as a{" "}
              {portfolio.role}.
            </h3>
            <Cta type={type} updateChats={updateChats} />
          </article>
        </>
      );
      break;
    default: {
      message = (
        <article className="bg-gray-100 text-black p-3 rounded-xl w-full">
          <p>Unable to handle your request, Please try again!</p>
          <Cta type={type} updateChats={updateChats} />
        </article>
      );
    }
  }
  return message;
};

export default function Chats() {
  const latestMessageRef = useRef(null);
  const portfolio = getPortfolio();
  const [chats, setChats] = useState([
    { direction: "received", type: "Welcome" },
  ]);
  useEffect(() => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chats]);
  return (
    <>
      <section className="flex flex-col p-5 gap-3">
        {chats.map((chat, index) =>
          chat.direction === "sent" ? (
            <article
              key={index}
              className="bg-[--primary-color] text-white self-end p-3 rounded-xl max-w-xl"
            >
              <p>{chat.message}</p>
            </article>
          ) : (
            <span key={index} className="self-start max-w-xl w-[95%]">
              <Animation>
                <DrawerOpen className="flex-shrink-0 w-[50px] h-[50px] flex items-center justify-center">
                  <Image
                    src={portfolio.imageSrc}
                    alt={portfolio.name}
                    height={25}
                    width={25}
                    className="rounded-full cursor-pointer bg-gray-500"
                    title={portfolio.name}
                  />
                </DrawerOpen>
                <span>
                  {GetReceivedMessage(chat.type, setChats, portfolio)}
                </span>
              </Animation>
            </span>
          )
        )}
      </section>
      <footer ref={latestMessageRef} />
    </>
  );
}
