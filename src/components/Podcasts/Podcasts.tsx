"use client";

import { divider } from "@/styles/styles";
import { PodcastCard } from "../Cards/PodcastCard/PodcastCard";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { GetNews } from "@/dtos/News";
import { Ex } from "@/extension/ex";
import { Category } from "@/dtos/Category";
import { getAllCategories } from "@/source/category";
import Link from "next/link";

export const PodCasts = () => {
  const [news, setNews] = useState<GetNews[]>([]);
  const t = useTranslations("Ver_Mais");
  const locale = useLocale();
  const [categoriesData, setCategoriesData] = useState<Category[]>([]);

  useEffect(() => {
    getAllCategories(locale).then(setCategoriesData);
  }, [locale]);

  useEffect(() => {
    Ex.apiClient()
      .get(`/api/${locale}/post/audio/4/all`)
      .then((response) => {
        console.log(response.data);
        setNews(response.data);
      })
      .catch(() => {});
  }, [locale, setNews]);

  const categories = {
    TOPICOS: ["podcasts"],
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
            className={"primary-title"}
          >
            {t("Ver_Mais")} <i>expand_more</i>{" "}
          </Link>
          <br />
        </>
      );
    }
    return null;
  };

  return (
    <div>
      <div className="space"></div>
      <div className="row">
        <h4 className="small bold primary-title">Podcasts</h4>
        <div className={"primary-title-container"} style={divider}></div>
      </div>
      <div className={"small-padding"}>
        <div className={"grid s12 m12"}>
          {news.map((value, index) => (
            <PodcastCard key={index} value={value} />
          ))}
        </div>
      </div>
      <div className="small-space"></div>
      <>
        {Object.keys(categories).map((categoryKey) =>
          renderVerMais(categoryKey as CategoryKey)
        )}
      </>
    </div>
  );
};

const filteredCategories = (categories: Category[], filterItems: string[]) => {
  return categories.filter((category) =>
    filterItems.includes(category.name_url)
  );
};
