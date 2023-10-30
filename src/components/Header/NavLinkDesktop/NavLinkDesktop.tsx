"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Collapse } from "./Collapse";
import Link from "next/link";

export const NavLinkDesktop = () => {
  const t = useTranslations("NavLinkDesktopFooter");
  const [isOpen, setIsOpen] = useState(false);

  const subMenuItems = {
    STW: ["Noticias", "Servicos", "Eventos", "Estude", "Bolsas", "Trabalhe"],
    ESTRANGEIRO: [
      "Destinos",
      "Universidades",
      "Academicos",
      "Cursos",
      "Estude",
      "Bolsas",
      "Trabalhe",
    ],
    PROJETOS: [
      "Programa_de_Integracao",
      "Universidades_pelo_Mundo",
      "Podcasts",
      "Top_Students",
    ],
    TOPICOS: ["Oportunidades", "Tempo", "Noticias", "Ciencia_e_Inovacao"],
  };

  return (
    <div
      className="max"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={"grid no-space center-align"}>
        <div className={"m3"}>
          <h6 className="small bold">STW</h6>
        </div>
        <div className={"m3"}>
          <h6 className="small bold">{t("ESTRANGEIRO")}</h6>
        </div>
        <div className={"m3"}>
          <h6 className="small bold">{t("PROJETOS")}</h6>
        </div>
        <div className={"m3"}>
          <h6 className="small bold">{t("TOPICOS")}</h6>
        </div>
      </div>

      {/* Submenu */}
      <Collapse isOpen={isOpen}>
        <div className={"grid left-align"}>
          {Object.entries(subMenuItems).map(([key, items]) =>
            items.map((item, index) => (
              <div key={`${key}-${index}`} className={"m3"}>
                <Link
                  href={`/${key.toLowerCase()}/${item
                    .replace(" ", "-")
                    .toLowerCase()}`}
                >
                  <button className="transparent no-padding no-wave  left-align">
                    <h6 className="small">{t(item)}</h6>
                  </button>
                </Link>
              </div>
            ))
          )}
        </div>
      </Collapse>
    </div>
  );
};
