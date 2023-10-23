"use client";

import Link from "next/link";
import { MedSqCard } from "../Cards/MedSqCard/MedSqCard";
import { box, divider } from "./styles";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function MoreNews() {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCards(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

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
          {showCards &&
            Array(9)
              .fill(0)
              .map((_, index) => <MedSqCard key={index} />)}
        </div>
        <Link href={"/articles?=full"} className={"primary-title margin"}>
          {t("Ver Mais")} <i>expand_more</i>{" "}
        </Link>
      </article>
    </div>
  );
}
