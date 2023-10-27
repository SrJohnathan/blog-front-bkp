"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { NavLinkStyleTop, titleStyle } from "./styles";

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
      <div style={NavLinkStyleTop}>
        <div className={"m3 left-align"}>
          <h1 style={titleStyle}>STW</h1>
          {STWLinks.map((link, index) => (
            <React.Fragment key={index}>
              <Link href={`/stw/${link.route}`}>{t(link.label)}</Link>
              <br />
            </React.Fragment>
          ))}
        </div>

        <div className={"m3 left-align"}>
          <h1 style={titleStyle}>{t("ESTRANGEIRO")}</h1>
          {estrangeiroLinks.map((link, index) => (
            <React.Fragment key={index}>
              <Link href={`/abroad/${link.route}`}>{t(link.label)}</Link>
              <br />
            </React.Fragment>
          ))}
        </div>

        <div className={"m3 left-align"}>
          <h1 style={titleStyle}>{t("PROJETOS")}</h1>
          {projetosLinks.map((link, index) => (
            <React.Fragment key={index}>
              <Link href={`/projects/${link.route}`}>{t(link.label)}</Link>
              <br />
            </React.Fragment>
          ))}
        </div>

        <div className={"m3 left-align"}>
          <h1 style={titleStyle}>{t("TÓPICOS")}</h1>
          {topicosLinks.map((link, index) => (
            <React.Fragment key={index}>
              <Link href={`/topics/${link.route}`}>{t(link.label)}</Link>
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
