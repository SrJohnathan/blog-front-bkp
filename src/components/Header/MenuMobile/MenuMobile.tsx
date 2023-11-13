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
import { SocialMediaIcons } from "@/components/SocialMediaIcons/SocialMediaIcons";
import StwIcon from "../../../../public/white-home.svg";
import AbroadIcon from "../../../../public/white-plane.svg";
import ProjectsIcon from "../../../../public/white-projects.svg";
import TopicsIcon from "../../../../public/white-topics.svg";

export const MenuMobile = () => {
  const t = useTranslations("NavLinkDesktopFooter");
  const { theme, toggleTheme } = useContext(ThemeModeContext);
  const locale = useLocale();
  const [categoriesData, setCategoriesData] = useState<Category[]>([]);

  useEffect(() => {
    getAllCategories(locale).then(setCategoriesData);
  }, [locale]);

  const categories = {
    STW: {
      topics: ["noticias", "servicos", "eventos", "trabalheconosco"],
      icon: StwIcon,
      size: "s2",
    },
    ESTRANGEIRO: {
      topics: [
        "destinos",
        "universidadespt",
        "academicos",
        "cursos",
        "estude",
        "bolsas",
        "trabalhe",
      ],
      icon: AbroadIcon,
      size: "s4",
    },
    PROJETOS: {
      topics: [
        "programadeintegracao",
        "universidadespelomundo",
        "podcasts",
        "topstudents",
      ],
      icon: ProjectsIcon,
      size: "s3",
    },
    TOPICOS: {
      topics: ["oportunidades", "tempo", "maisnoticias", "cienciaeinovacao"],
      icon: TopicsIcon,
      size: "s3",
    },
  };

  type CategoryKey = keyof typeof categories | "NULL";
  const [selectedTopic, setSelectedTopic] = useState<CategoryKey>("NULL");

  return (
    <>
      <header className={`small-padding s primary fixed ${theme}`}>
        <div>
          <nav className="grid">
            <Link href={"/"} className="left-align s3">
              <Image width={80} height={80} src="/stw.svg" alt="STW icon" />
            </Link>
            <div className="s1"></div>
            <div className="s3">
              <SocialMediaIcons />
            </div>
            <div className="s1"></div>
            <div className="s2">
              <Languages />
            </div>
            <button onClick={toggleTheme} className="circle transparent s2">
              {theme === "dark" ? <i>dark_mode</i> : <i>light_mode</i>}
            </button>
          </nav>
          <div>
            <div className="grid">
              {Object.keys(categories).map((categoryKey) => {
                const key = categoryKey as keyof typeof categories;
                const category = categories[key];
                return (
                  <div key={categoryKey} className={`${category.size}`}>
                    <h6
                      style={{
                        cursor: "pointer",
                        fontSize: "12px",
                        display: "flex",
                        alignItems: "flex-start",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.opacity = "0.5")
                      }
                      onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                      onClick={() => {
                        if (selectedTopic === categoryKey) {
                          setSelectedTopic("NULL");
                        } else {
                          setSelectedTopic(categoryKey as CategoryKey);
                        }
                      }}
                    >
                      <Image
                        src={category.icon}
                        alt={`${categoryKey} icon`}
                        width={15}
                        height={15}
                        style={{
                          marginRight: "3px",
                        }}
                      />
                      {t(categoryKey)}
                    </h6>
                  </div>
                );
              })}
            </div>
            <div>
              {selectedTopic !== "NULL" && selectedTopic in categories && (
                <menu
                  className={`min ${
                    selectedTopic ? "active" : ""
                  } primary bottom-round`}
                >
                  {filteredCategories(
                    categoriesData,
                    categories[selectedTopic as keyof typeof categories].topics
                  ).map((category, index) => (
                    <Link key={index} href={`/category/${category.name_url}`}>
                      {category.name}
                    </Link>
                  ))}
                  <div className="small-space"></div>
                </menu>
              )}
            </div>
          </div>
        </div>
      </header>
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
