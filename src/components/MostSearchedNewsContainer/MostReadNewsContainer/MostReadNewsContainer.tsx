"use client";

import { SmallVertCard } from "@/components/Cards/SmallVertCard/SmallVertCard";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const MostReadNewsContainer = () => {
  const t = useTranslations("Ver_Mais");

  return (
    <div className={"s12 m12"}>
      <div className={"grid"}>
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <SmallVertCard key={index}></SmallVertCard>
          ))}
      </div>
      <Link href={"/most-read"} className={"primary-title"}>
        {t("Ver_Mais")} <i>expand_more</i>
      </Link>
    </div>
  );
};
