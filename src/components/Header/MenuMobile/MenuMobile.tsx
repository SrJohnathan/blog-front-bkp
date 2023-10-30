"use client";

import React, { useContext, useState } from "react";
import { ThemeModeContext } from "@/context/ThemeModeContext";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const MenuMobile = () => {
  const t = useTranslations("NavLinkDesktopFooter");
  const { theme, toggleTheme } = useContext(ThemeModeContext);
  const [drawer, setDrawer] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const topics = [
    {
      name: "STW",
      links: [
        { label: "Noticias", route: "news" },
        { label: "Servicos", route: "services" },
        { label: "Eventos", route: "events" },
        { label: "Estude", route: "study" },
        { label: "Bolsas", route: "becas" },
        { label: "Trabalhe", route: "work" },
      ],
    },
    {
      name: "ESTRANGEIRO",
      links: [
        { label: "Destinos", route: "destinations" },
        { label: "Universidades", route: "universities" },
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
        { label: "Noticias", route: "news" },
        { label: "Ciencia_e_Inovacao", route: "innovation" },
      ],
    },
  ];

  return (
    <>
      <header className={`responsive s primary fixed ${theme}`}>
        <nav>
          <div className={"absolute left-align"}>
            <button
              onClick={() => setDrawer(true)}
              className="circle transparent"
            >
              <i>menu</i>
            </button>
          </div>
          <Link href={"/"} className="center-align max">
            <Image width={80} height={80} src="/stw_1.png" alt={"STW icon"} />
          </Link>
          <button onClick={toggleTheme} className="circle transparent">
            {theme === "dark" ? <i>dark_mode</i> : <i>light_mode</i>}
          </button>
        </nav>
      </header>

      <div
        onClick={() => setDrawer(false)}
        className={"overlay " + (drawer ? " active" : "")}
      ></div>
      <dialog open={drawer} className="">
        <header className="fixed">
          <nav>
            <button
              onClick={() => setDrawer(false)}
              className="transparent circle large"
            >
              <i>close</i>
            </button>
            <div className="max padding left-align">
              {topics.map((topic) => (
                <button
                  className="bold small-padding small-round"
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
          </nav>
        </header>
      </dialog>
    </>
  );
};
