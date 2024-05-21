import Chats from "@/app/_components/Chats";

import React from "react";

export default function RayChu() {
  return (
    <>
      <main className="mt-28 max-w-5xl m-auto">
        <Chats />
      </main>
      <footer id="latestMessage"></footer>
    </>
  );
}
