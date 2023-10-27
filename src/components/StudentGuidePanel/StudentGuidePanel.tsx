"use client";

import React, { useState } from "react";

export const StudentGuidePanel = () => {
  const [activeContent, setActiveContent] = useState("default");

  const renderContent = () => {
    switch (activeContent) {
      case "Estudantes":
        return {
          title: "Título para Estudantes",
          text: "Texto referente aos Estudantes",
        };
      case "Integração":
        return {
          title: "Título para Integração",
          text: "Texto referente à Integração",
        };
      case "Universidades":
        return {
          title: "Título para Universidades",
          text: "Texto referente às Universidades",
        };
      default:
        return { title: "Título padrão", text: "Texto padrão" };
    }
  };

  const { title, text } = renderContent();

  return (
    <article className={"no-margin no-padding no-elevate"}>
      <div className={"grid"}>
        <div
          className={
            "s6 m3 primary no-round border-bottom-left-radius border-top-left-radius responsive padding"
          }
        >
          <button
            className={"no-round small-round responsive"}
            onClick={() => setActiveContent("Estudantes")}
          >
            <h6 className="bold small">Estudantes</h6>
          </button>
          <button
            className={"no-round small-round responsive"}
            onClick={() => setActiveContent("Integração")}
          >
            <h6 className="bold small">Integração</h6>
          </button>
          <button
            className={"no-round small-round responsive"}
            onClick={() => setActiveContent("Universidades")}
          >
            <h6 className="bold small">Universidades</h6>
          </button>
        </div>
        <div className={"s12 m8 padding"}>
          <h5 className={"small primary-title"}>{title}</h5>
          <p className={"primary-description"}>{text}</p>
        </div>
      </div>
    </article>
  );
};
