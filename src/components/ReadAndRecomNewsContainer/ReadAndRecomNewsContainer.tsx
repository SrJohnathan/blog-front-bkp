"use client";

import { useState } from "react";
import { MostReadNewsContainer } from "./MostReadNewsContainer/MostReadNewsContainer";
import { MostRecomNewsContainer } from "./MostRecomNewsContainer/MostRecomNewsContainer";
import { useTranslations } from "next-intl";

export const ReadAndRecomNewsContainer = () => {
  const [changeMostSearchedSection, setChangeMostSearchedSection] = useState({
    section: "most read",
  });

  const t = useTranslations("MostReadAndRecomNewsContainer");

  return (
    <div className={"grid"}>
      <div className={"s12 m12"}>
        <nav className="no-space">
          <button
            className={`border max left-round ${
              changeMostSearchedSection.section === "most read" ? "primary" : ""
            }`}
            onClick={() => {
              setChangeMostSearchedSection({ section: "most read" });
            }}
          >
            <span>{t("Mais Lidas")}</span>
          </button>
          <button
            className={`border max right-round ${
              changeMostSearchedSection.section === "most recommended"
                ? "primary"
                : ""
            }`}
            onClick={() => {
              setChangeMostSearchedSection({ section: "most recommended" });
            }}
          >
            <span>{t("Mais Recomendadas")}</span>
          </button>
        </nav>
      </div>
      {changeMostSearchedSection.section === "most read" ? (
        <MostReadNewsContainer />
      ) : (
        ""
      )}
      {changeMostSearchedSection.section === "most recommended" ? (
        <MostRecomNewsContainer />
      ) : (
        ""
      )}
    </div>
  );
};
