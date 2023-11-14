"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { SocialMediaIcons } from "@/components/SocialMediaIcons/SocialMediaIcons";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { getAllCategories } from "@/source/category";
import { Category } from "@/dtos/Category";
import styles from "./FooterMobile.module.css";

export const FooterMobile = () => {
  const t = useTranslations("NavLinkDesktopFooter");
  const secT = useTranslations("Footer");
  const [categoriesData, setCategoriesData] = useState<Category[]>([]);
  const locale = useLocale();

  useEffect(() => {
    getAllCategories(locale).then(setCategoriesData);
  }, [locale]);

  const categories = {
    STW: {
      topics: ["noticias", "servicos", "eventos", "trabalheconosco"],
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
    },
    PROJETOS: {
      topics: [
        "programadeintegracao",
        "universidadespelomundo",
        "podcasts",
        "topstudents",
      ],
    },
    TOPICOS: {
      topics: ["oportunidades", "tempo", "maisnoticias", "cienciaeinovacao"],
    },
  };

  type CategoryKey = keyof typeof categories | "NULL";
  const [selectedTopic, setSelectedTopic] = useState<CategoryKey>("NULL");

  return (
    <footer className="responsive s primary">
      <div className="small-space"></div>
      <div>
        <div className={styles.topics}>
          {Object.keys(categories).map((categoryKey) => {
            return (
              <div key={categoryKey} className={styles.category}>
                <h6
                  className={styles.title}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = "0.5")}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                  onClick={() => {
                    if (selectedTopic === categoryKey) {
                      setSelectedTopic("NULL");
                    } else {
                      setSelectedTopic(categoryKey as CategoryKey);
                    }
                  }}
                >
                  {t(categoryKey)}
                </h6>
              </div>
            );
          })}
        </div>
        <div>
          {selectedTopic !== "NULL" && selectedTopic in categories && (
            <menu className={`min ${selectedTopic ? "active" : ""} primary`}>
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
      {selectedTopic !== "NULL" && (
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
const filteredCategories = (
  categories: Category[],
  filteredItems: string[]
) => {
  return categories.filter((category) =>
    filteredItems.includes(category.name_url)
  );
};
