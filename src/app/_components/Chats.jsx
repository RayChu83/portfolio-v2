"use client";
import { ReactTyped } from "react-typed";

import React, { useState } from "react";

export default function Chats() {
  const [chats, setChats] = useState([
    { direction: "received", type: "welcome" },
    { direction: "sent" },
  ]);
  return (
    <section className="flex flex-col py-3 px-5 gap-5">
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </article>
      ))}
    </section>
  );
}
