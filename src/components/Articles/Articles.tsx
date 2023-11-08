"use client";

import { useLocale, useTranslations } from "next-intl";
import { HorzNewsSqCard } from "../Cards/HorzNewsSqCard/HorzNewsSqCard";
import Link from "next-intl/link";
import { GetNews } from "@/dtos/News";
import { useEffect, useState } from "react";
import { Ex } from "@/extension/ex";
import {getAllCategories, getCategory} from "@/source/category";
import { Category } from "@/dtos/Category";

interface Props {
    id:number
}

export const Articles = ({id}:Props) => {
  const t = useTranslations("Ver_Mais");
  const [news, setNews] = useState<GetNews[]>([]);
    const [category, setCategory] = useState<Category | null>();

    const locale = useLocale();


  useEffect(() => {
    const fetchData = async () => {

        try {
            setCategory( await getCategory(id,locale));
        } catch (error) {
            console.error("Falha ao buscar notícias", error);
        }
      try {
        const response = await Ex.apiClient().get(
          `/api/${locale}/post/list/0/2/desc/${id}`
        );
        setNews(response.data);
      } catch (error) {
        console.error("Falha ao buscar notícias", error);
      }
    };

    fetchData().then();
  }, [locale]);





  const renderVerMais = (category: Category) => {
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

  };

  return news.length == 0 ?  null :  (



    <article className={"padding background no-elevate "}>
      <h6 className={"small bold margin"}>
        {category &&  category.name}
      </h6>
      <div className={"medium-divider"}></div>
      <div className={"small-space"}></div>
      {news.length === 0
        ? null
        : news.map((value, index) => (
            <HorzNewsSqCard value={value} key={index} />
          ))}
      <>
          { category && renderVerMais(category)}
      </>
    </article>


  );
};


