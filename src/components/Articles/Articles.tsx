"use client";

import { useLocale, useTranslations } from "next-intl";
import { HorzNewsSqCard } from "../Cards/HorzNewsSqCard/HorzNewsSqCard";
import Link from "next-intl/link";
import { GetNews } from "@/dtos/News";
import { useEffect, useState } from "react";
import { Ex } from "@/extension/ex";
import { getAllCategories } from "@/source/category";
import { Category } from "@/dtos/Category";

export const Articles = ({ value }: { value: GetNews }) => {
  const t = useTranslations("Ver_Mais");
  const [news, setNews] = useState<GetNews[]>([]);
  const [categoriesData, setCategoriesData] = useState<Category[]>([]);
  const locale = useLocale();

  useEffect(() => {
    getAllCategories(locale).then(setCategoriesData);
  }, [locale]);

  useEffect(() => {
    Ex.apiClient()
      .get(`/api/${locale}/post/list/0/2/desc/all`)
      .then((response) => {
        console.log(response.data);
        setNews(response.data);
      })
      .catch(() => {});
  }, [locale, setNews]);

  const categories = {
    TOPICOS: [`${"aqui: value.name_category"}`],
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
            {t("Ver_Mais")} <i>expand_more</i>{" "}
          </Link>
          <br />
        </>
      );
    }
    return null;
  };

  return (
    <article className={"padding background no-elevate "}>
      <h6 className={"small bold margin"}>
        {"aqui vai o value.name_category"}
      </h6>
      <div className={"medium-divider"}></div>
      <div className={"small-space"}></div>
      {news.length === 0
        ? null
        : news.map((value, index) => (
            <HorzNewsSqCard value={value} key={index} />
          ))}
      <>
        {Object.keys(categories).map((categoryKey) =>
          renderVerMais(categoryKey as CategoryKey)
        )}
      </>
    </article>
  );
};

const filteredCategories = (categories: Category[], filterItems: string[]) => {
  return categories.filter((category) =>
    filterItems.includes(category.name_url)
  );
};
