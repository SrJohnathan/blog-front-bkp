"use client";

import { useTranslations } from "next-intl";
import { HorzNewsSqCard } from "../Cards/HorzNewsSqCard/HorzNewsSqCard";
import Link from "next/link";

export const Articles = ({ title }: { title: string }) => {
  const t = useTranslations("Articles");

  return (
    <article className={"padding background no-elevate "}>
      <p style={{ fontSize: "12pt" }} className={"primary-title margin"}>
        <strong>{title}</strong>
      </p>
      <div
        style={{ backgroundColor: "#ddd", height: "1px" }}
        className={"max"}
      ></div>
      <div className={"small-space"}></div>
      <HorzNewsSqCard />
      <HorzNewsSqCard />
      <Link href={"/articles"} className={"primary-title margin"}>
        {t("Ver Mais")} <i>expand_more</i>
      </Link>
    </article>
  );
};
