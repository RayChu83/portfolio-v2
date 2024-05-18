"use client";
import Link from "next/link";

import React, { useState } from "react";
import Cta from "./Cta";

const getReceivedMessage = (type, updateChats) => {
  let message;
  switch (type) {
    case "Welcome":
      message = (
        <>
          <p>
            👋 Welcome, my name is Ray, and I am an aspiring{" "}
            <strong>Front End Developer </strong>
            passionate about creating stunning web applications.
          </p>
          <Cta type={type} updateChats={updateChats} />
        </>
      );
      break;
    case "About":
      message = (
        <>
          <p>
            Hey, I am Ray as mentioned earlier, I was born and raised in
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
          <Cta type={type} updateChats={updateChats} />
        </>
      );
      break;
    default: {
      message = (
        <>
          <p>Unable to handle your request, Please try again!</p>
        </>
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
    <section className="flex flex-col py-3 px-5 gap-3">
      {chats.map((chat) => (
        <article
          key={chat}
          className={`
            ${
              chat.direction === "received"
                ? "bg-gray-100 text-black rounded-bl-none self-start"
                : "bg-[--primary-color] text-white rounded-br-none self-end"
            }
            p-3 rounded-xl max-w-xl
          `}
        >
          {chat.direction === "sent" ? (
            <p>{chat.message}</p>
          ) : (
            getReceivedMessage(chat.type, setChats)
          )}
        </article>
      ))}
    </section>
  );
}
