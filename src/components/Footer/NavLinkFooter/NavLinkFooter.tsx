"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Category } from "@/dtos/Category";
import { getCategoryAll } from "@/source/category";

export const NavLinkFooter = () => {
  const [categoriesData, setCategoriesData] = useState<Category[]>([]);
  const t = useTranslations("NavLinkDesktopFooter");
  const locale = useLocale();

  useEffect(() => {
    getCategoryAll(locale).then(setCategoriesData);
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
      <div key={categoryKey} className={"m3 no-padding"}>
        <h6 className="small bold">{t(categoryKey)}</h6>
        {filter(categoriesData, categories[categoryKey])?.map(
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
      <div className={"grid left-align"}>
        {Object.keys(categories).map((categoryKey) =>
          renderCategorySection(categoryKey as CategoryKey)
        )}
      </div>
    </div>
  );
};

function filter(categories: Category[], filterItems: string[]) {
  return categories.filter((category) =>
    filterItems.includes(category.name_url)
  );
}
