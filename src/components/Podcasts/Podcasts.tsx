"use client";

import { divider } from "@/styles/styles";
import { PodcastCard } from "../Cards/PodcastCard/PodcastCard";
import { useTranslations } from "next-intl";

export const PodCasts = () => {
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
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
        </div>
      </div>
      <a className={"primary-title margin"}>
        {t("Ver_Mais")} <i>expand_more</i>
      </a>
    </div>
  );
};
