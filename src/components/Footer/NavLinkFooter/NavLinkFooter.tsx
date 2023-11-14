"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Category } from "@/dtos/Category";
import { getAllCategories } from "@/source/category";
import styles from "./NavLinkFooter.module.css";

export const NavLinkFooter = () => {
  const [categoriesData, setCategoriesData] = useState<Category[]>([]);
  const t = useTranslations("NavLinkDesktopFooter");
  const locale = useLocale();

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

  type CategoryKey = keyof typeof categories;

  const renderCategorySection = (categoryKey: CategoryKey) => {
    return (
      <div key={categoryKey}>
        <h6 className={styles.topics}>{t(categoryKey)}</h6>
        {filteredCategories(categoriesData, categories[categoryKey])?.map(
          (category, index) => (
            <React.Fragment key={index}>
              <Link href={`/category/${category.name_url}`}>
                <h6 className="small small-line">{category.name}</h6>
              </Link>
              <br />
            </React.Fragment>
          )
        )}
      </div>
    );
  };

  return (
    <div className="max">
      <div className={styles.topics}>
        {Object.keys(categories).map((categoryKey) =>
          renderCategorySection(categoryKey as CategoryKey)
        )}
      </div>
    </div>
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
