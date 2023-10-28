"use client";

import { MenuMobile } from "./MenuMobile/MenuMobile";
import { MenuDesktop } from "./MenuDesktop/MenuDesktop";

export const Header = () => {
  return (
    <header className="responsive m l no-padding fixed">
      <MenuMobile />
      <MenuDesktop />
    </header>
  );
};
