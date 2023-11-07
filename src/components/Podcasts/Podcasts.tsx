"use client";

import { divider } from "@/styles/styles";
import { PodcastCard } from "../Cards/PodcastCard/PodcastCard";
import {useLocale, useTranslations} from "next-intl";
import {useEffect, useState} from "react";
import {GetNews} from "@/dtos/News";
import {Ex} from "@/extension/ex";

export const PodCasts = () => {
    const [news, setNews] = useState<GetNews[]>([]);


    const locale = useLocale();

    useEffect(() => {
        Ex.apiClient()
            .get(`/api/${locale}/post/list/0/4/desc/16`)
            .then((response) => {
                console.log(response.data);
               // setNews(response.data);
            })
            .catch(() => {});
    }, [locale, setNews]);


    const t = useTranslations("Ver_Mais");

  return (
    <div>
      <div className="space"></div>
      <div className="row">
        <h4 className="small bold primary-title">Podcasts</h4>
        <div className={"primary-title-container"} style={divider}></div>
      </div>
      <div className={"s6 m12 padding"}>
        <div className={"grid"}>
            {news.map((value, index) =>
                <PodcastCard  key={index} value={value} />
            )}



        </div>
      </div>
      <a className={"primary-title margin"}>
        {t("Ver_Mais")} <i>expand_more</i>
      </a>
    </div>
  );
};
