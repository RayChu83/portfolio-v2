import NavMenu from "@/app/_components/NavMenu";

import React from "react";

export default function PortfolioLayout({ children }) {
  return (
    <>
      <NavMenu />
      {children}
    </>
  );
}
