"use client";

import Link from "next/link";
import { MedSqCard } from "../Cards/MedSqCard/MedSqCard";
import { useTranslations, useLocale } from "next-intl";
import React, { useEffect, useState } from "react";
import { GetNews } from "@/dtos/News";
import { Ex } from "@/extension/ex";
import MedSqCardSkeleton from "@/components/Cards/MedSqCard/MedSqCardSkeleton";
import { divider } from "@/styles/styles";
import { Category } from "@/dtos/Category";
import { getAllCategories } from "@/source/category";

export default function MoreNews() {
  const [news, setNews] = useState<GetNews[]>([]);
  const locale = useLocale();
  const [categoriesData, setCategoriesData] = useState<Category[]>([]);
  const t = useTranslations("MoreNews");
  const secT = useTranslations("Ver_Mais");

  useEffect(() => {
    getAllCategories(locale).then(setCategoriesData);
  }, [locale]);

  useEffect(() => {
    Ex.apiClient()
      .get(`/api/${locale}/post/list/0/8/desc/all`)
      .then((response) => {
        console.log(response.data);
        setNews(response.data);
      })
      .catch(() => {});
  }, [locale, setNews]);

  const categories = {
    TOPICOS: ["maisnoticias"],
  };

  type CategoryKey = keyof typeof categories;

  const renderVerMais = (categoryKey: CategoryKey) => {
    const categoryUrls = categories[categoryKey];
    const filteredCategoryData = filteredCategories(
      categoriesData,
      categoryUrls
    );
    if (filteredCategoryData.length > 0) {
      const category = filteredCategoryData[0];
      return (
        <>
          <Link
            href={`/category/${category.name_url}`}
            className={"primary-title margin"}
          >
            {secT("Ver_Mais")} <i>expand_more</i>{" "}
          </Link>
          <br />
        </>
      );
    }
    return null;
  };

  return (
    <div className={"grid"}>
      <div className={"s12 m12"}>
        <div className="row">
          <h4 className={"small bold primary-title"}>{t("Mais_Noticias")}</h4>
          <div className={"primary-title-container"} style={divider}></div>
        </div>
      </div>
      <article className={"s12 m12 large-padding no-elevate"}>
        <div className={"grid "}>
          {news.length == 0
            ? Array(9)
                .fill(0)
                .map((_, index) => <MedSqCardSkeleton key={index} />)
            : news.map((value, index) => (
                <MedSqCard value={value} key={index} />
              ))}
        </div>
        <>
          {Object.keys(categories).map((categoryKey) =>
            renderVerMais(categoryKey as CategoryKey)
          )}
        </>
      </article>
    </div>
  );
}

const filteredCategories = (categories: Category[], filterItems: string[]) => {
  return categories.filter((category) =>
    filterItems.includes(category.name_url)
  );
};
