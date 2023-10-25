"use client";

import React, { useContext } from "react";
import { ThemeModeContext } from "@/context/ThemeModeContext";
import { Languages } from "./Languages/Languages";
import { SocialMediaIcons } from "./SocialMediaIcons/SocialMediaIcons";
import Image from "next/image";
import { NavLinkDesktop } from "../NavLinkDesktop/NavLinkDesktop";

export const MenuDesktop = () => {
  const { toggleTheme, isDark } = useContext(ThemeModeContext);

  return (
    <>
      <header
        className={`responsive m l ${isDark ? "small-blur" : "primary"} fixed`}
      >
        <div className={"grid"}>
          <div className={"m1"}>
            <a href={"/"} className="left-align transparent">
              <Image width={80} height={80} src="/stw_1.png" alt={"STW icon"} />
            </a>
          </div>
          <div className={"m11"}>
            <div className={"small-padding"}></div>
            <nav>
              <NavLinkDesktop />
              <SocialMediaIcons />

              <div className="field label prefix center-align small fill">
                <input type="text" name="" />
                <i>search</i>
              </div>

              <Languages />

              <button
                onClick={function () {
                  toggleTheme();
                }}
                className="circle transparent"
              >
                {isDark ? <i>dark_mode</i> : <i>light_mode</i>}
              </button>
            </nav>
            <div className={"small-padding"}></div>
          </div>
        </div>
      </header>
    </>
  );
};
