"use client";

import React, { CSSProperties, useContext } from "react";
import { ThemeModeContext } from "@/context/ThemeModeContext";
import { Languages } from "./Languages/Languages";
import { SocialMediaIcons } from "./SocialMediaIcons/SocialMediaIcons";
import Image from "next/image";

const a: CSSProperties = {
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "12pt",
  fontFamily: "Inter,sans-serif",
};

export const MenuDesktop = () => {
  const { toggleTheme, isDark } = useContext(ThemeModeContext);
  // const { isThemeBlackInit, modeTheme } = Ex;
  // const [themeObject, setThemeObject] = useState<{ t: string; b: boolean }>({
  //   t: "light",
  //   b: false,
  // });

  // useEffect(() => {
  //   setThemeObject(isThemeBlackInit());

  //   eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
              <div
                className={"max"}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                }}
              >
                <div className={"grid no-space center-align"}>
                  <div className={"m3"}>
                    <button
                      style={a}
                      className=" transparent no-padding no-wave"
                    >
                      STW
                    </button>
                  </div>

                  <div className={"m3"}>
                    <button
                      style={a}
                      className=" transparent no-padding no-wave"
                    >
                      ESTRANGEIRO
                    </button>
                  </div>

                  <div className={"m3"}>
                    <button
                      style={a}
                      className=" transparent no-padding no-wave"
                    >
                      PROJETOS
                    </button>
                  </div>
                  <div className={"m3"}>
                    <button
                      style={a}
                      className="  transparent no-padding no-wave"
                    >
                      TÓPICOS
                    </button>
                  </div>
                </div>

                {/* <Collapse isOpen={isOpen}>
                  <div className={"grid left-align"}>
                    <div className={"m3"}>
                      <button
                        style={a}
                        className=" transparent no-padding no-wave"
                      >
                        NO ESTRANGEIRO
                      </button>
                    </div>
                    <div className={"m3"}>
                      <button
                        style={a}
                        className=" transparent no-padding no-wave"
                      >
                        STW
                      </button>
                    </div>
                    <div className={"m3"}>
                      <button
                        style={a}
                        className=" transparent no-padding no-wave"
                      >
                        PROJETOS
                      </button>
                    </div>
                    <div className={"m3"}>
                      <button
                        style={a}
                        className="  transparent no-padding no-wave"
                      >
                        OUTROS TÓPICOS
                      </button>
                    </div>
                    <div className={"m3"}>
                      <button
                        style={a}
                        className=" transparent no-padding no-wave"
                      >
                        NO ESTRANGEIRO
                      </button>
                    </div>
                    <div className={"m3"}>
                      <button
                        style={a}
                        className=" transparent no-padding no-wave"
                      >
                        STW
                      </button>
                    </div>
                    <div className={"m3"}>
                      <button
                        style={a}
                        className=" transparent no-padding no-wave"
                      >
                        PROJETOS
                      </button>
                    </div>
                    <div className={"m3"}>
                      <button
                        style={a}
                        className="  transparent no-padding no-wave"
                      >
                        OUTROS TÓPICOS
                      </button>
                    </div>
                    <div className={"m3"}>
                      <button
                        style={a}
                        className=" transparent no-padding no-wave"
                      >
                        NO ESTRANGEIRO
                      </button>
                    </div>
                    <div className={"m3"}>
                      <button
                        style={a}
                        className=" transparent no-padding no-wave"
                      >
                        STW
                      </button>
                    </div>
                    <div className={"m3"}>
                      <button
                        style={a}
                        className=" transparent no-padding no-wave"
                      >
                        PROJETOS
                      </button>
                    </div>
                    <div className={"m3"}>
                      <button
                        style={a}
                        className="  transparent no-padding no-wave"
                      >
                        OUTROS TÓPICOS
                      </button>
                    </div>
                    <div className={"m3"}>
                      <button
                        style={a}
                        className=" transparent no-padding no-wave"
                      >
                        NO ESTRANGEIRO
                      </button>
                    </div>
                    <div className={"m3"}>
                      <button
                        style={a}
                        className=" transparent no-padding no-wave"
                      >
                        STW
                      </button>
                    </div>
                    <div className={"m3"}>
                      <button
                        style={a}
                        className=" transparent no-padding no-wave"
                      >
                        PROJETOS
                      </button>
                    </div>
                    <div
                      onClick={(event) => {
                        alert("ai");
                      }}
                      className={"m3"}
                    >
                      <button
                        style={a}
                        className="  transparent no-padding no-wave"
                      >
                        OUTROS TÓPICOS
                      </button>
                    </div>
                  </div>
                </Collapse> */}
              </div>

              <div className={"max"}></div>

              <SocialMediaIcons />

              <div className="field label prefix center-align small fill">
                <input type="text" />
                <i>search</i>
              </div>

              <Languages />
              <button
                onClick={(event) => {
                  toggleTheme();
                }}
                className="circle transparent"
              >
                {isDark ? <i>dark_mode</i> : <i>light_mode</i>}
              </button>
            </nav>
            <div className={"small-space"}></div>
          </div>
        </div>
      </header>
    </>
  );
};
