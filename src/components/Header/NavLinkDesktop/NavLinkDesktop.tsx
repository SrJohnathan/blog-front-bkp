import { desktopNavLinkStyle } from "./styles";

export const NavLinkDesktop = () => {
  return (
    <>
      <div className={"m3"}>
        <button
          style={desktopNavLinkStyle}
          className=" transparent no-padding no-wave"
        >
          STW
        </button>
      </div>

      <div className={"m3"}>
        <button
          style={desktopNavLinkStyle}
          className=" transparent no-padding no-wave"
        >
          ESTRANGEIRO
        </button>
      </div>

      <div className={"m3"}>
        <button
          style={desktopNavLinkStyle}
          className=" transparent no-padding no-wave"
        >
          PROJETOS
        </button>
      </div>
      <div className={"m3"}>
        <button
          style={desktopNavLinkStyle}
          className="  transparent no-padding no-wave"
        >
          TÓPICOS
        </button>
      </div>
    </>
  );
};
