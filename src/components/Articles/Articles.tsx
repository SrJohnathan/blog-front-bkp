"use client";

import { useTranslations } from "next-intl";
import { HorzNewsSqCard } from "../Cards/HorzNewsSqCard/HorzNewsSqCard";
import Link from "next/link";

export const Articles = ({ title }: { title: string }) => {
  const t = useTranslations("Articles");

  return (
    <article className={"padding background no-elevate "}>
      <h6 className={"small bold margin"}>{title}</h6>
      <div className={"medium-divider"}></div>
      <div className={"small-space"}></div>
      <HorzNewsSqCard />
      <HorzNewsSqCard />
      <Link href={"/articles"} className={"primary-title margin"}>
        {t("Ver_Mais")} <i>expand_more</i>
      </Link>
    </article>
  );
};
