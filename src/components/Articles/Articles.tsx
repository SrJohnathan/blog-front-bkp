"use client";

import { useLocale, useTranslations } from "next-intl";
import { HorzNewsSqCard } from "../Cards/HorzNewsSqCard/HorzNewsSqCard";
import Link from "next-intl/link";
import { GetNews } from "@/dtos/News";
import { useEffect, useState } from "react";
import { Ex } from "@/extension/ex";

export const Articles = () => {
  const t = useTranslations("Ver_Mais");
  const [news, setNews] = useState<GetNews[]>([]);
  const locale = useLocale();

  useEffect(() => {
    Ex.apiClient()
      .get(`/api/${locale}/post/list/0/2/desc/all`)
      .then((response) => {
        console.log(response.data);
        setNews(response.data);
      })
      .catch(() => {});
  }, [locale, setNews]);

  return (
    <article className={"padding background no-elevate "}>
      <h6 className={"small bold margin"}>Categoria da API</h6>
      <div className={"medium-divider"}></div>
      <div className={"small-space"}></div>
      {news.length === 0
        ? null
        : news.map((value, index) => (
            <HorzNewsSqCard value={value} key={index} />
          ))}
      <Link href={"/"} className={"primary-title margin"}>
        {t("Ver_Mais")} <i>expand_more</i>
      </Link>
    </article>
  );
};
