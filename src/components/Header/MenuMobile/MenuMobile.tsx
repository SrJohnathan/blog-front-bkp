"use client";

import React, { useContext, useState } from "react";
import { ThemeModeContext } from "@/context/ThemeModeContext";
import Image from "next/image";
import Link from "next/link";

export const MenuMobile = () => {
  const { theme, toggleTheme } = useContext(ThemeModeContext);
  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <header className={`responsive s primary fixed ${theme}`}>
        <nav>
          <div className={"absolute left-align"}>
            <button
              onClick={() => setDrawer(true)}
              className="circle transparent"
            >
              <i>menu</i>
            </button>
          </div>
          <Link href={"/"} className="center-align max">
            <Image width={80} height={80} src="/stw_1.png" alt={"STW icon"} />
          </Link>
          <button onClick={toggleTheme} className="circle transparent">
            {theme === "dark" ? <i>dark_mode</i> : <i>light_mode</i>}
          </button>
        </nav>
      </header>

      <div
        onClick={() => setDrawer(false)}
        className={"overlay " + (drawer ? " active" : "")}
      ></div>
      <dialog open={drawer} className="left">
        <header className="fixed">
          <nav>
            <button
              onClick={() => setDrawer(false)}
              className="transparent circle large"
            >
              <i>close</i>
            </button>
            <h5 className="max">Menu Mobile</h5>
          </nav>
        </header>
      </dialog>
    </>
  );
};
