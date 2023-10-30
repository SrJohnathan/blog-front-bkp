"use client";

import Link from "next/link";
import { MedSqCard } from "../Cards/MedSqCard/MedSqCard";
import { box, divider } from "./styles";
import { useTranslations } from "next-intl";
import {useEffect, useState} from "react";
import {GetNew} from "@/dtos/News";
import {Ex} from "@/extension/ex";
import MedSqCardSkeleton from "@/components/Cards/MedSqCard/MedSqCardSkeleton";

export default function MoreNews() {

    const [news,setNews] = useState<GetNew[]>([])

    useEffect(() => {
        Ex.apiClient()
            .get(`/pt/post/list/8/desc/all`)
            .then(r => setNews(r.data))
            .catch(reason => {})
    } ,[])


  // const [showCards, setShowCards] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowCards(true);
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  const t = useTranslations("MoreNews");

  return (
    <div className={"grid"}>
      <div className={"s12 m12"}>
        <div style={box}>
          <h6 className={"primary-title"}>
            <strong>{t("Mais Notícias")}</strong>
          </h6>
          <div className={"primary-title-container"} style={divider}></div>
        </div>
      </div>
      <article className={"s12 m12 large-padding no-elevate"}>
        <div className={"grid "}>


            {news.length > 0 ?

                news
                    .map((value, index) => (
                        <MedSqCard value={value} key={index} />
                    ))

                :

                Array(9)
                    .fill(0)
                    .map((_, index) => (
                        <MedSqCardSkeleton  key={index} />
                    ))

            }




        </div>
        <Link href={"/articles?=full"} className={"primary-title margin"}>
          {t("Ver Mais")} <i>expand_more</i>{" "}
        </Link>
      </article>
    </div>
  );
}
