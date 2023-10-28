"use client";

import { MenuMobile } from "./MenuMobile/MenuMobile";
import { MenuDesktop } from "./MenuDesktop/MenuDesktop";

export const Header = () => {
  return (
    <>
      <MenuMobile />
      <MenuDesktop />
    </>
  );
};
