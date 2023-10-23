"use client";

import { titleStyle } from "./styles";
import { useTranslations } from "next-intl";

export const NavLinkDesktop = () => {
  const t = useTranslations("NavLinkDesktop");

  return (
    <>
      <div className={"m3"}>
        <button style={titleStyle} className=" transparent no-padding no-wave">
          STW
        </button>
      </div>

      <div className={"m3"}>
        <button style={titleStyle} className=" transparent no-padding no-wave">
          {t("ESTRANGEIRO")}
        </button>
      </div>

      <div className={"m3"}>
        <button style={titleStyle} className=" transparent no-padding no-wave">
          {t("PROJETOS")}
        </button>
      </div>
      <div className={"m3"}>
        <button style={titleStyle} className="  transparent no-padding no-wave">
          {t("TÓPICOS")}
        </button>
      </div>
      {/* <Collapse isOpen={isOpen}>
        <div className={"grid left-align"}>
          <div className={"m3"}>
            <button
              style={titleStyle}
              className=" transparent no-padding no-wave"
            >
              NO ESTRANGEIRO
            </button>
          </div>
          <div className={"m3"}>
            <button
              style={titleStyle}
              className=" transparent no-padding no-wave"
            >
              STW
            </button>
          </div>
          <div className={"m3"}>
            <button
              style={titleStyle}
              className=" transparent no-padding no-wave"
            >
              PROJETOS
            </button>
          </div>
          <div className={"m3"}>
            <button
              style={titleStyle}
              className="  transparent no-padding no-wave"
            >
              OUTROS TÓPICOS
            </button>
          </div>
          <div className={"m3"}>
            <button
              style={titleStyle}
              className=" transparent no-padding no-wave"
            >
              NO ESTRANGEIRO
            </button>
          </div>
          <div className={"m3"}>
            <button
              style={titleStyle}
              className=" transparent no-padding no-wave"
            >
              STW
            </button>
          </div>
          <div className={"m3"}>
            <button
              style={titleStyle}
              className=" transparent no-padding no-wave"
            >
              PROJETOS
            </button>
          </div>
          <div className={"m3"}>
            <button
              style={titleStyle}
              className="  transparent no-padding no-wave"
            >
              OUTROS TÓPICOS
            </button>
          </div>
          <div className={"m3"}>
            <button
              style={titleStyle}
              className=" transparent no-padding no-wave"
            >
              NO ESTRANGEIRO
            </button>
          </div>
          <div className={"m3"}>
            <button
              style={titleStyle}
              className=" transparent no-padding no-wave"
            >
              STW
            </button>
          </div>
          <div className={"m3"}>
            <button
              style={titleStyle}
              className=" transparent no-padding no-wave"
            >
              PROJETOS
            </button>
          </div>
          <div className={"m3"}>
            <button
              style={titleStyle}
              className="  transparent no-padding no-wave"
            >
              OUTROS TÓPICOS
            </button>
          </div>
          <div className={"m3"}>
            <button
              style={titleStyle}
              className=" transparent no-padding no-wave"
            >
              NO ESTRANGEIRO
            </button>
          </div>
          <div className={"m3"}>
            <button
              style={titleStyle}
              className=" transparent no-padding no-wave"
            >
              STW
            </button>
          </div>
          <div className={"m3"}>
            <button
              style={titleStyle}
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
              style={titleStyle}
              className="  transparent no-padding no-wave"
            >
              OUTROS TÓPICOS
            </button>
          </div>
        </div>
      </Collapse> */}
    </>
  );
};
