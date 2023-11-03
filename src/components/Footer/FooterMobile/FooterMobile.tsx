"use client";

import { useState } from "react";
import Link from "next/link";
import { SocialMediaIcons } from "@/components/SocialMediaIcons/SocialMediaIcons";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const FooterMobile = () => {
  const t = useTranslations("NavLinkDesktopFooter");
  const secT = useTranslations("Footer");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const topics = [
    {
      name: "STW",
      links: [
        { label: "Noticias", route: "news" },
        { label: "Servicos", route: "services" },
        { label: "Eventos", route: "events" },
        { label: "Trabalhe_Conosco", route: "work-with-us" },
      ],
    },
    {
      name: "ESTRANGEIRO",
      links: [
        { label: "Destinos", route: "destinations" },
        { label: "Universidades_PT", route: "pt-universities" },
        { label: "Academicos", route: "academics" },
        { label: "Cursos", route: "courses" },
        { label: "Estude", route: "study" },
        { label: "Bolsas", route: "becas" },
        { label: "Trabalhe", route: "work" },
      ],
    },
    {
      name: "PROJETOS",
      links: [
        { label: "Programa_de_Integracao", route: "integration-program" },
        { label: "Universidades_pelo_Mundo", route: "world-universities" },
        { label: "Podcasts", route: "podcasts" },
        { label: "Top_Students", route: "top-students" },
      ],
    },
    {
      name: "TOPICOS",
      links: [
        { label: "Oportunidades", route: "oportunities" },
        { label: "Tempo", route: "weather" },
        { label: "Mais_Noticias", route: "more-news" },
        { label: "Ciencia_e_Inovacao", route: "innovation" },
      ],
    },
  ];

  return (
    <footer className="responsive s primary">
      <div className="small-space"></div>
      <div className="grid">
        {topics.map((topic) => (
          <button
            className="top-align bold small-padding small-round s3"
            key={topic.name}
            onClick={() => {
              if (selectedTopic === topic.name) {
                setSelectedTopic(null);
              } else {
                setSelectedTopic(topic.name);
              }
            }}
          >
            {t(topic.name)}
          </button>
        ))}
        <div className="small-space"></div>
      </div>
      <div>
        {selectedTopic && (
          <menu
            key={selectedTopic}
            className={`min ${
              selectedTopic ? "active" : ""
            } small-round primary`}
          >
            {topics
              .find((topic) => topic.name === selectedTopic)
              ?.links.map((link) => (
                <Link key={link.route} href={`/${link.route}`}>
                  {t(link.label)}
                </Link>
              ))}
          </menu>
        )}
      </div>
      <div className={"grid s12"}>
        <div className={"s4"}>
          <Image src={"/stw.svg"} width={100} height={70} alt={""} />
          <SocialMediaIcons />
        </div>
        <div className={"s4"}>
          <small>{secT("copyrightText")}</small>
        </div>
        <div className={"s4"}>
          <small>{secT("info")}</small>
        </div>
      </div>
      {selectedTopic && (
        <div>
          <div className={"large-space"}></div>
          <div className={"large-space"}></div>
          <div className={"large-space"}></div>
        </div>
      )}
      <div className={"large-space"}></div>
    </footer>
  );
};
