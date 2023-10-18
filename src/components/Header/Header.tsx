import { MenuMobile } from "./MenuMobile/MenuMobile";
import { MenuDesktop } from "./MenuDesktop/MenuDesktop";
// import { useEffect, useState } from "react";
// import { Ex } from "@/extension/ex";

export const Header = () => {
  //   const [them, setTheme] = useState<{ t: string; b: boolean }>({
  //     t: "light",
  //     b: false,
  //   });

  //   useEffect(() => {
  //     setTheme(Ex.isThemeBackInit());
  //   }, []);

  return (
    <>
      <MenuMobile />
      <MenuDesktop />

      <div className="overlay"></div>
      {/* <dialog className="left">
        <header className="fixed">
          <nav>
            <button className="transparent circle large">
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
      </dialog> */}
    </>
  );
};
