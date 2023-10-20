"use client";

import { useState } from "react";
import { MostReadNewsContainer } from "./MostReadNewsContainer/MostVReadNewsContainer";
import { MostRecomNewsContainer } from "./MostRecomNewsContainer/MostRecomNewsContainer";

export const ReadAndRecomNewsContainer = () => {
  const [changeMostSearchedSection, setChangeMostSearchedSection] = useState({
    section: "most read",
  });
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
            <span>Mais Lidas</span>
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
            <span>Mais Recomendas</span>
          </button>
        </nav>
      </div>
      {changeMostSearchedSection.section === "most read" ? (
        <MostReadNewsContainer></MostReadNewsContainer>
      ) : null}
      {changeMostSearchedSection.section === "most recommended" ? (
        <MostRecomNewsContainer></MostRecomNewsContainer>
      ) : null}
    </div>
  );
};
