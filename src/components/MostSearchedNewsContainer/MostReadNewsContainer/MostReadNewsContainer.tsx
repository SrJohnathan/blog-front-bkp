"use client";

import { SmallVertCard } from "@/components/Cards/SmallVertCard/SmallVertCard";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GetNews } from "@/dtos/News";
import { Ex } from "@/extension/ex";

export const MostReadNewsContainer = () => {
  const [news, setNews] = useState<GetNews[]>([]);

  const locale = useLocale();

  useEffect(() => {
    Ex.apiClient()
      .get(`/api/${locale}/post/views/4/all`)
      .then((response) => {
        setNews(response.data);
      })
      .catch(() => {});
  }, [locale, setNews]);

  const t = useTranslations("Ver_Mais");

  return (
    <div className={"s12 m12"}>
      <div className={"grid"}>
        {news.map((value, index) => (
          <SmallVertCard value={value} key={index} />
        ))}
      </div>
      <div className="small-space"></div>
      <Link href={"/category/all"} className={"primary-title"}>
        {t("Ver_Mais")} <i>expand_more</i>
      </Link>
    </div>
  );
};
