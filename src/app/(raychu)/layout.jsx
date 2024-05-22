import NavMenu from "@/app/_components/NavMenu";

import React from "react";

export default function RayChuLayout({ children }) {
  return (
    <>
      <NavMenu />
      {children}
    </>
  );
}
