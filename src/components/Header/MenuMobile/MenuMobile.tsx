"use client";

import React, { useContext, useEffect, useState } from "react";
import { ThemeModeContext } from "@/context/ThemeModeContext";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Languages } from "../MenuDesktop/Languages/Languages";
import { Category } from "@/dtos/Category";
import { getAllCategories } from "@/source/category";
import { useLocale } from "next-intl";

export const MenuMobile = () => {
  const t = useTranslations("NavLinkDesktopFooter");
  const { theme, toggleTheme } = useContext(ThemeModeContext);
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [categoriesData, setCategoriesData] = useState<Category[]>([]);

  useEffect(() => {
    getAllCategories(locale).then(setCategoriesData);
  }, [locale]);

  const categories = {
    STW: ["noticias", "servicos", "eventos", "trabalheconosco"],
    ESTRANGEIRO: [
      "destinos",
      "universidadespt",
      "academicos",
      "cursos",
      "estude",
      "bolsas",
      "trabalhe",
    ],
    PROJETOS: [
      "programadeintegracao",
      "universidadespelomundo",
      "podcasts",
      "topstudents",
    ],
    TOPICOS: ["oportunidades", "tempo", "maisnoticias", "cienciaeinovacao"],
  };

  type CategoryKey = "STW" | "ESTRANGEIRO" | "TOPICOS" | "PROJETOS" | "NULL";
  const [selectedTopic, setSelectedTopic] = useState<CategoryKey>();

  return (
    <>
      <header className={`responsive s primary fixed ${theme}`}>
        <nav>
          <div className={"absolute left-align"}>
            <button
              onClick={() => setIsOpen(true)}
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

      <dialog className="left primary" open={isOpen}>
        {Object.keys(categories).map((category, index) => (
          <button
            className="row bold small-padding small-round"
            key={index}
            onClick={() => {
              if (selectedTopic === category) {
                setSelectedTopic("NULL");
              } else {
                setSelectedTopic(category as CategoryKey);
              }
            }}
          >
            {t(category)}
          </button>
        ))}

        <div>
          {selectedTopic !== "NULL" && (
            <menu
              key={selectedTopic}
              className={`min ${
                selectedTopic ? "active" : ""
              } small-round primary`}
            >
              {filteredCategories(
                categoriesData,
                categories[
                  selectedTopic === undefined ? "PROJETOS" : selectedTopic
                ]
              ).map((category, index) => (
                <Link key={index} href={`/category/${category.name_url}`}>
                  {category.name}
                </Link>
              ))}
            </menu>
          )}
        </div>

        <div className="right-align">
          <Languages />
          <button
            className="transparent circle large"
            onClick={() => setIsOpen(false)}
          >
            <i>close</i>
          </button>
        </div>
      </dialog>
    </>
  );
};
const filteredCategories = (
  categories: Category[],
  filteredItems: string[]
) => {
  return categories.filter((category) =>
    filteredItems.includes(category.name_url)
  );
};
