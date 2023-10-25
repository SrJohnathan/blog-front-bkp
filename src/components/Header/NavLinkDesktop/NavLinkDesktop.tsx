"use client";

import { useState } from "react";
import { titleStyle } from "./styles";
import { useTranslations } from "next-intl";
import { Collapse } from "./Collapse";
import Link from "next/link";

export const NavLinkDesktop = () => {
  const t = useTranslations("NavLinkDesktop");
  const [isOpen, setIsOpen] = useState(false);

  const subMenuItems = {
    STW: ["Notícias", "Serviços", "Eventos", "Estudar", "Bolsas", "Trabalho"],
    ESTRANGEIRO: [
      "Destinos",
      "Universidades",
      "Acadêmicos",
      "Cursos",
      "Estudar",
      "Bolsas",
      "Trabalho",
    ],
    PROJETOS: [
      "Programa de Integração",
      "Universidades pelo Mundo",
      "Podcast",
      "Top Students",
    ],
    TÓPICOS: ["Oportunidades", "Tempo", "Notícias", "Ciência e Inovação"],
  };

  return (
    <>
      <div
        className={"max"}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
        }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className={"grid no-space left-align"}>
          <div className={"m3"}>
            <button
              style={titleStyle}
              className="transparent no-padding no-wave"
            >
              STW
            </button>
          </div>
          <div className={"m3"}>
            <button
              style={titleStyle}
              className="transparent no-padding no-wave"
            >
              {t("ESTRANGEIRO")}
            </button>
          </div>
          <div className={"m3"}>
            <button
              style={titleStyle}
              className="transparent no-padding no-wave"
            >
              {t("PROJETOS")}
            </button>
          </div>
          <div className={"m3"}>
            <button
              style={titleStyle}
              className="transparent no-padding no-wave"
            >
              {t("TÓPICOS")}
            </button>
          </div>
        </div>

        {/* Submenu */}
        <Collapse isOpen={isOpen}>
          <div className={"grid no-space left-align"}>
            {Object.entries(subMenuItems).map(([key, items]) =>
              items.map((item, index) => (
                <div key={`${key}-${index}`} className={"m3"}>
                  <Link
                    href={`/${key.toLowerCase()}/${item
                      .replace(" ", "-")
                      .toLowerCase()}`}
                  >
                    <button
                      style={titleStyle}
                      className="transparent no-padding no-wave left-align"
                    >
                      {item}
                    </button>
                  </Link>
                </div>
              ))
            )}
          </div>
        </Collapse>
      </div>
    </>
  );
};
