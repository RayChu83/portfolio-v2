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
import Testimonials from "./Testimonials";
import ContactCard from "./ContactCard";

const GetReceivedMessage = (type, updateChats, portfolio) => {
  let message;
  switch (type) {
    case "Welcome":
      message = (
        <article className="bg-gray-100 text-black p-3 rounded-xl w-fit">
          <p>
            👋 Hello, my name is {portfolio.name.split(" ")[0]}, and I am a
            <strong> {portfolio.role} </strong>
            passionate about developing software applications.
          </p>
          <Cta type={type} updateChats={updateChats} />
        </article>
      );
      break;
    case "his journey":
      message = (
        <span className="space-y-3">
          <article className="bg-gray-100 text-black p-3 rounded-xl w-fit">
            <p>
              Ever since a young age, I’ve always been fascinated with the
              monumental impact on our everyday lives generated from new
              technological innovations. But as I grew older, I’ve seen from
              firsthand these new innovations slowly drifting further and
              further away for those of us living in lower income households.
            </p>
          </article>
          <article className="bg-gray-100 text-black p-3 rounded-xl w-fit">
            <p>
              As an aspiring software engineer, I hope to develop and improve
              everyday technology while maintaining costs at a minimum so
              everyone can experience new innovative breakthroughs.
            </p>
            <Cta type={type} updateChats={updateChats} />
          </article>
        </span>
      );
      break;
    case "work experiences":
      message = (
        <>
          <Experience />
          <article className="bg-gray-100 text-black rounded-xl w-full">
            <Cta type={type} updateChats={updateChats} />
          </article>
        </>
      );
      break;
    case "passion projects":
      message = (
        <>
          <Projects />
          <article className="bg-gray-100 text-black rounded-xl w-full">
            <Cta type={type} updateChats={updateChats} />
          </article>
        </>
      );
      break;
    case "technical skills":
      message = (
        <>
          <span className="space-y-2">
            <Skills />
          </span>
          <article className="bg-gray-100 text-black rounded-xl w-full mt-2">
            <Cta type={type} updateChats={updateChats} />
          </article>
        </>
      );
      break;
    case "testimonials received":
      message = (
        <>
          <Testimonials />
          <article className="bg-gray-100 text-black rounded-xl w-full mt-2">
            <Cta type={type} updateChats={updateChats} />
          </article>
        </>
      );
      break;
    case "contact information":
      message = (
        <>
          <ContactCard />
          <article className="bg-gray-100 text-black rounded-xl w-full mt-2">
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
              <p>Take me to see {chat.message}</p>
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
                <span className="w-full">
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
