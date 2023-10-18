import { CSSProperties } from "react";

const a: CSSProperties = {
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "12pt",
  fontFamily: "Inter,sans-serif",
};
export const NavLinkDesktop = () => {
  return (
    <>
      <div className={"m3"}>
        <button style={a} className=" transparent no-padding no-wave">
          STW
        </button>
      </div>

      <div className={"m3"}>
        <button style={a} className=" transparent no-padding no-wave">
          ESTRANGEIRO
        </button>
      </div>

      <div className={"m3"}>
        <button style={a} className=" transparent no-padding no-wave">
          PROJETOS
        </button>
      </div>
      <div className={"m3"}>
        <button style={a} className="  transparent no-padding no-wave">
          TÓPICOS
        </button>
      </div>
    </>
  );
};
