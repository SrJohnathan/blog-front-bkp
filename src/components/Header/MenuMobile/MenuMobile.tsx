"use client";

import React, { useContext, useState } from "react";
import { ThemeModeContext } from "@/context/ThemeModeContext";
import Image from "next/image";

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
          <a href={"/"} className="center-align max">
            <Image width={80} height={80} src="/stw_1.png" alt={"STW icon"} />
          </a>
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
              onClick={(event) => setDrawer(false)}
              className="transparent circle large"
            >
              <i>close</i>
            </button>
            <h5 className="max">Header</h5>
          </nav>
        </header>
        <a className="row round">
          <i>inbox</i>
          <span>Inbox</span>
          <div className="max"></div>
          <div>24</div>
        </a>
        <a className="row round">
          <i>send</i>
          <span>Outbox</span>
          <div className="max"></div>
          <div>100+</div>
        </a>
        <a className="row round">
          <i>favorite</i>
          <span>Favorities</span>
        </a>
        <a className="row round">
          <i>delete</i>
          <span>Trash</span>
        </a>
      </dialog>
    </>
  );
};
