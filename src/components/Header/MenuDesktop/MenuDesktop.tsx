import { CSSProperties } from "react";
import { Languages } from "../Languages/Languages";
import { SocialMediaIcons } from "../SocialMediaIcons/SocialMediaIcons";

const a: CSSProperties = {
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "12pt",
  fontFamily: "Inter,sans-serif",
};

export const MenuDesktop = () => {
  return (
    <header className={`responsive m l primary fixed`}>
      <div className={"grid"}>
        <div className={"m1"}>
          <a href={"/"} className="left-align transparent">
            <img width={80} src="/stw_1.png" alt={""} />
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

            {/* <button
              className="circle transparent"
            >
              {them.b && <i>dark_mode</i>}
              {!them.b && <i>light_mode</i>}
            </button> */}
          </nav>
          <div className={"small-space"}></div>
        </div>
      </div>
    </header>
  );
};
