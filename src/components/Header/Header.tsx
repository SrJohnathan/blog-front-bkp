"use client";

import { MenuMobile } from "./MenuMobile/MenuMobile";
import { MenuDesktop } from "./MenuDesktop/MenuDesktop";

export const Header = () => {
  return (
    <div className="bottom-margin">
      <MenuMobile />
      <MenuDesktop />
    </div>
  );
};
