"use client";

import { useTranslations } from "next-intl";
import { HorzNewsSqCard } from "../Cards/HorzNewsSqCard/HorzNewsSqCard";
import Link from "next-intl/link";
import { Key } from "react";

export const Articles = ({ data }: { data: any }) => {
  const t = useTranslations("Ver_Mais");

  return (
    <article className={"padding background no-elevate "}>
      <h6 className={"small bold margin"}>{data.name_category}</h6>
      <div className={"medium-divider"}></div>
      <div className={"small-space"}></div>
      <HorzNewsSqCard article={data} />
      <HorzNewsSqCard article={data} />
      <Link href={`/${data.name_category}`} className={"primary-title margin"}>
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
