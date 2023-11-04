"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Collapse } from "./Collapse";
import Link from "next/link";

export const NavLinkDesktop = () => {
  const t = useTranslations("NavLinkDesktopFooter");
  const [isOpen, setIsOpen] = useState(false);

  const categories = {
    STW: [
      { label: "Noticias", route: "news" },
      { label: "Servicos", route: "services" },
      { label: "Eventos", route: "events" },
      { label: "Trabalhe_Conosco", route: "work-with-us" },
    ],
    ESTRANGEIRO: [
      { label: "Destinos", route: "destinations" },
      { label: "Universidades_PT", route: "pt-universities" },
      { label: "Academicos", route: "academics" },
      { label: "Cursos", route: "courses" },
      { label: "Estude", route: "study" },
      { label: "Bolsas", route: "becas" },
      { label: "Trabalhe", route: "work" },
    ],
    PROJETOS: [
      { label: "Programa_de_Integracao", route: "integration-program" },
      { label: "Universidades_pelo_Mundo", route: "world-universities" },
      { label: "Podcasts", route: "podcasts" },
      { label: "Top_Students", route: "top-students" },
    ],
    TOPICOS: [
      { label: "Oportunidades", route: "oportunities" },
      { label: "Tempo", route: "weather" },
      { label: "Mais_Noticias", route: "more-news" },
      { label: "Ciencia_e_Inovacao", route: "innovation" },
    ],
  };

  return (
    <div
      className="max"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Submenu */}
      <div>
        <div className={"grid left-align"}>
          {Object.entries(categories).map(([key, links]) => (
            <div key={key} className={"m3 no-padding"}>
              <h6 className="small bold">{t(key)}</h6>
              <Collapse isOpen={isOpen}>
                {links.map((link, index) => (
                  <>
                    <Link
                      key={`${key}-${index}`}
                      href={`/${key.toLowerCase()}/${link.route}`}
                    >
                      <h6 className="small small-line">{t(link.label)}</h6>
                    </Link>
                    <br />
                  </>
                ))}
                <div className="space"></div>
              </Collapse>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
