"use client";

import React, { useState } from "react";

export const StudentGuidePanel = () => {
  const [activeContent, setActiveContent] = useState("Estudantes");

  type Content = {
    title: string | undefined;
    text: string | undefined;
  };

  const renderContent = (): Content => {
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
    <article className={"responsive no-margin no-padding no-elevate s m l"}>
      <div className={"grid"}>
        <div className={"s12 m4 primary small-round responsive small-padding"}>
          <button
            className={"small-round"}
            onClick={() => setActiveContent("Estudantes")}
          >
            <h6 className="bold small">Estudantes</h6>
          </button>
          <div className="tiny-space"></div>
          <button
            className={"small-round"}
            onClick={() => setActiveContent("Integração")}
          >
            <h6 className="bold small">Integração</h6>
          </button>
          <div className="tiny-space"></div>
          <button
            className={"small-round "}
            onClick={() => setActiveContent("Universidades")}
          >
            <h6 className="bold small">Universidades</h6>
          </button>
        </div>
        <div className={"s12 m8 padding"}>
          <h5 className={"small primary-title left-align"}>{title}</h5>
          <p className={"primary-description left-align"}>{text}</p>
        </div>
      </div>
    </article>
  );
};
