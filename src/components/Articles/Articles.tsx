"use client";

import { useTranslations } from "next-intl";
import { HorzNewsSqCard } from "../Cards/HorzNewsSqCard/HorzNewsSqCard";
import Link from "next-intl/link";
import { Key } from "react";

export const Articles = () => {
  const t = useTranslations("Ver_Mais");

  return (
    <article className={"padding background no-elevate "}>
      <h6 className={"small bold margin"}></h6>
      <div className={"medium-divider"}></div>
      <div className={"small-space"}></div>
      <HorzNewsSqCard />
      <HorzNewsSqCard />
      <Link href={"/"} className={"primary-title margin"}>
        {t("Ver_Mais")} <i>expand_more</i>
      </Link>
    </article>
  );
};

{
  /* <Link href={`/${data.name_category}`} className={"primary-title margin"}>
{t("Ver_Mais")} <i>expand_more</i>
</Link> */
}
