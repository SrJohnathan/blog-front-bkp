"use client";

import React, { useContext } from "react";
import { ThemeModeContext } from "@/context/ThemeModeContext";
import { Languages } from "./Languages/Languages";
import { SocialMediaIcons } from "../../SocialMediaIcons/SocialMediaIcons";
import Image from "next/image";
import { NavLinkDesktop } from "../NavLinkDesktop/NavLinkDesktop";
import Link from "next/link";

export const MenuDesktop = () => {
  const { toggleTheme, isDark } = useContext(ThemeModeContext);

  return (
    <header
      className={`responsive m l ${isDark ? "small-blur" : "primary"} fixed`}
    >
      <div className={"grid"}>
        <div className={"m1"}>
          <Link href={"/"} className="left-align transparent">
            <Image width={80} height={80} src="/stw_1.png" alt={"STW icon"} />
          </Link>
        </div>
        <div className="m11">
          <div className={"small-padding"}></div>
          <nav>
            <NavLinkDesktop />
            <div className={"max"}></div>
            <SocialMediaIcons />

            <div className="field label prefix center-align small fill small-round">
              <input type="text" name="" />
              <i>search</i>
            </div>

            <Languages />

            <button
              className="circle transparent"
              onClick={() => toggleTheme()}
            >
              {isDark ? <i>dark_mode</i> : <i>light_mode</i>}
            </button>
          </nav>
          <div className={"small-space"}></div>
        </div>
      </div>
    </header>
  );
};
