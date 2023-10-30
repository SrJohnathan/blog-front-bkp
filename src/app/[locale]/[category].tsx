"use client";

import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { divider } from "@/styles/styles";

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const t = useTranslations("");

  return (
    <>
      <div className="row">
        <h4 className={"small bold primary-title"}>
          {t("Linkar com título da categoria")}
        </h4>
        <div className={"primary-title-container"} style={divider}></div>;
      </div>
      <div>{category}</div>

      <div className="space"></div>

      <div className="row">
        <h4 className={"small bold primary-title"}>{t("Informacoes")}</h4>
        <div className={"primary-title-container"} style={divider}></div>;
      </div>

      <div className="space"></div>

      <div className="row">
        <h4 className={"small bold primary-title"}>{t("Mais_Vistas")}</h4>
        <div className={"primary-title-container"} style={divider}></div>;
      </div>
    </>
  );
};

export default CategoryPage;
