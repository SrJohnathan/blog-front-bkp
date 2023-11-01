"use client";

import { divider } from "@/styles/styles";
import MedSqCardSkeleton from "../Cards/MedSqCard/MedSqCardSkeleton";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function MoreNewsSkeleton() {
  const numSkeletonCards = 9;
  const t = useTranslations("MoreNewsSkeleton");

  return (
    <div className={"grid"}>
      <div className={"s12 m12"}>
        <div className="row">
          <h4 className={"small bold primary-title"}>
            {t("Carregando_Mais_Noticias")}
          </h4>
          <div className={"primary-title-container"} style={divider}></div>
        </div>
      </div>
      <article className={"s12 m12 large-padding no-elevate"}>
        <div className={"grid "}>
          {Array.from({ length: numSkeletonCards }, (_, index) => (
            <MedSqCardSkeleton key={index} />
          ))}
        </div>
        <Link href={"/articles?=full"} className={"primary-title margin"}>
          {t("Carregando_Ver_Mais")} <i>expand_more</i>{" "}
        </Link>
      </article>
    </div>
  );
}
