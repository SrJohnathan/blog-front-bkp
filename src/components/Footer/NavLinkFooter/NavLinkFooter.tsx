"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const NavLinkFooter = () => {
  const t = useTranslations("NavLinkDesktopFooter");

  const STWLinks = [
    { label: "Notícias", route: "news" },
    { label: "Serviços", route: "services" },
    { label: "Eventos", route: "events" },
    { label: "Estude", route: "study" },
    { label: "Bolsas", route: "becas" },
    { label: "Trabalhe", route: "work" },
  ];

  const estrangeiroLinks = [
    { label: "Destinos", route: "destinations" },
    { label: "Universidades", route: "universities" },
    { label: "Acadêmicos", route: "academics" },
    { label: "Cursos", route: "courses" },
    { label: "Estude", route: "study" },
    { label: "Bolsas", route: "becas" },
    { label: "Trabalhe", route: "work" },
  ];

  const projetosLinks = [
    { label: "Programa de Integração", route: "integration-program" },
    { label: "Universidades pelo Mundo", route: "world-universities" },
    { label: "Podcasts", route: "podcasts" },
    { label: "Top Students", route: "top-students" },
  ];

  const topicosLinks = [
    { label: "Oportunidades", route: "oportunities" },
    { label: "Tempo", route: "weather" },
    { label: "Notícias", route: "news" },
    { label: "Ciência e Inovação", route: "innovation" },
  ];
  return (
    <>
      <div className="center middle large-width">
        <div className="grid m12">
          <div className={"m3 left-align"}>
            <h6 className="bold small">STW</h6>
            {STWLinks.map((link, index) => (
              <React.Fragment key={index}>
                <Link className="medium-line" href={`/stw/${link.route}`}>
                  {t(link.label)}
                </Link>
                <br />
              </React.Fragment>
            ))}
          </div>

          <div className={"m3 left-align"}>
            <h6 className="bold small">{t("ESTRANGEIRO")}</h6>
            {estrangeiroLinks.map((link, index) => (
              <React.Fragment key={index}>
                <Link className="medium-line" href={`/abroad/${link.route}`}>
                  {t(link.label)}
                </Link>
                <br />
              </React.Fragment>
            ))}
          </div>

          <div className={"m3 left-align"}>
            <h6 className="bold small">{t("PROJETOS")}</h6>
            {projetosLinks.map((link, index) => (
              <React.Fragment key={index}>
                <Link className="medium-line" href={`/projects/${link.route}`}>
                  {t(link.label)}
                </Link>
                <br />
              </React.Fragment>
            ))}
          </div>

          <div className={"m3 left-align"}>
            <h6 className="bold small">{t("TÓPICOS")}</h6>
            {topicosLinks.map((link, index) => (
              <React.Fragment key={index}>
                <Link className="medium-line" href={`/topics/${link.route}`}>
                  {t(link.label)}
                </Link>
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
