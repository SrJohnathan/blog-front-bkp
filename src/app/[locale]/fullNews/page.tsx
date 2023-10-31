"use client";

import { useTranslations } from "next-intl";
import { divider } from "@/styles/styles";
import { RectVideoCard } from "@/components/Cards/RectVideoCard/RectVideoCard";
import { MostViewedNewsCard } from "@/components/Cards/MostViewedNewsCard/MostViewedNewsCard";

const CategoryPage = () => {
  const t = useTranslations("FullNews");

  return (
    <div className="responsive">
      <div className={"grid"}>
        <div className={"s12 m12"}>
          <div className="row">
            <h4 className={"small bold primary-title"}>
              Categoria selecionada
            </h4>
            <div className={"primary-title-container"} style={divider}></div>
          </div>
        </div>
        <article className={"s12 m12 large-padding no-elevate"}>
          <div>Aqui vai a lista de notícias</div>
        </article>
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

      <div className={"grid medium-space"}>
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <MostViewedNewsCard key={index} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPage;
