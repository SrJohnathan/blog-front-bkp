"use client";

// import layout from "./layout";
import { useTranslations } from "next-intl";
import { divider } from "@/styles/styles";
import { RectVideoCard } from "@/components/Cards/RectVideoCard/RectVideoCard";
import { MostViewedNewsCard } from "@/components/Cards/MostViewedNewsCard/MostViewedNewsCard";
import { ExtendedNews } from "@/components/Cards/ExtendedNews/ExtendedNews";

const CategoryPage = () => {
  const t = useTranslations("FullNews");

  return (
    <div className="responsive s m l large-margin">
      <div className={"grid"}>
        <div className={"s12 m12"}>
          <div className="large-space"></div>
          <div className="row">
            <h4 className={"small bold primary-title"}>
              Categoria selecionada
            </h4>
            <div className={"primary-title-container"} style={divider}></div>
          </div>
        </div>
        <div className={"s12 m12 no-elevate transparent large-padding"}>
          <ExtendedNews />
          <ExtendedNews />
          <ExtendedNews />
          <ExtendedNews />
          <ExtendedNews />
          <ExtendedNews />
          <ExtendedNews />
          <ExtendedNews />
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

      <div className="row">
        <h4 className={"small bold primary-title"}>{t("Mais_Vistas")}</h4>
        <div className={"primary-title-container"} style={divider}></div>
      </div>

      <div className="space"></div>

      <div className={"grid center medium-space"}>
        <div></div>
        <MostViewedNewsCard />
        <MostViewedNewsCard />
        <MostViewedNewsCard />
        <MostViewedNewsCard />
        <MostViewedNewsCard />
      </div>
    </div>
  );
};

export default CategoryPage;
