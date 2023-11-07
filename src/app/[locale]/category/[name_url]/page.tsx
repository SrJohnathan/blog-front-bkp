"use client";

import { useTranslations } from "next-intl";
import { divider } from "@/styles/styles";
import { RectVideoCard } from "@/components/Cards/RectVideoCard/RectVideoCard";
import { MostViewedNewsCard } from "@/components/Cards/MostViewedNewsCard/MostViewedNewsCard";
import { ExtendedNews } from "@/components/Cards/ExtendedNews/ExtendedNews";

const CategoryPage = ({ params }: { params: { name_url: string } }) => {
  const t = useTranslations("FullNews");
  const shouldRenderMostViewedNewsCard = params.name_url !== "all";

  return (
    <div className="grid responsive s m l">
      <div className="s1 m1"></div>
      <div className="s10 m10">
        <div className={"grid"}>
          <div className={"s12 m12"}>
            <div className="large-space"></div>
            <div className="row">
              <h4 className={"small bold primary-title"}>gfdfgfdsgf</h4>
              <div className={"primary-title-container"} style={divider}></div>
            </div>
          </div>
          <div className={"s12 m12 no-elevate transparent large-padding"}>
            <ExtendedNews />
            <ExtendedNews />
          </div>
        </div>

        <div className="large-space"></div>

        <div className="row">
          <h4 className={"small bold primary-title"}>
            {t("Videos_Relacionados")}
          </h4>
          <div className={"primary-title-container"} style={divider}></div>
        </div>
        <div className={"grid medium-space"}>
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <RectVideoCard key={index} />
            ))}
        </div>

        <div className="large-space"></div>

        {shouldRenderMostViewedNewsCard && (
          <>
            <div className="row">
              <h4 className={"small bold primary-title"}>{t("Mais_Vistas")}</h4>
              <div className={"primary-title-container"} style={divider}></div>
            </div>
            <div className="space"></div>
            <div className={"grid center medium-space"}>
              <MostViewedNewsCard />
              <MostViewedNewsCard />
              <MostViewedNewsCard />
              <MostViewedNewsCard />
              <MostViewedNewsCard />
              <MostViewedNewsCard />
            </div>
          </>
        )}
        <div className="large-space"></div>
      </div>

      <div></div>
    </div>
  );
};

export default CategoryPage;
