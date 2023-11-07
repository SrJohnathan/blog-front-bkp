"use client";

import { useState } from "react";
import { MostReadNewsContainer } from "./MostReadNewsContainer/MostReadNewsContainer";
import { MostRecomNewsContainer } from "./MostRecomNewsContainer/MostRecomNewsContainer";
import { useLocale, useTranslations } from "next-intl";

export const MostSearchedNewsContainer = () => {
  const [changeMostSearchedSection, setChangeMostSearchedSection] = useState({
    section: "mostRead",
  });

  const t = useTranslations("MostSearchedNewsContainer");

  return (
    <div className={"grid"}>
      <div className={"s12 m12"}>
        <nav className="no-space">
          <button
            className={`border max left-round ${
              changeMostSearchedSection.section === "mostRead" ? "primary" : ""
            }`}
            onClick={() => {
              setChangeMostSearchedSection({ section: "mostRead" });
            }}
          >
            <span>{t("Mais_Lidas")}</span>
          </button>
          <button
            className={`border max right-round ${
              changeMostSearchedSection.section === "mostRecommended"
                ? "primary"
                : ""
            }`}
            onClick={() => {
              setChangeMostSearchedSection({ section: "mostRecommended" });
            }}
          >
            <span>{t("Mais_Recomendadas")}</span>
          </button>
        </nav>
      </div>
      {changeMostSearchedSection.section === "mostRead" ? (
        <MostReadNewsContainer />
      ) : (
        ""
      )}
      {changeMostSearchedSection.section === "mostRecommended" ? (
        <MostRecomNewsContainer />
      ) : (
        ""
      )}
    </div>
  );
};
