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
          title: "Suporte Completo para Educação Global com a STW",
          text: "A plataforma STW - Study Travel Work oferece uma gama de serviços para estudantes que sonham em estudar, trabalhar ou morar no exterior. Com consultoria especializada, a STW auxilia desde a aplicação e matrícula em instituições estrangeiras até o processo de obtenção de vistos e programas de integração cultural. Os estudantes podem se beneficiar de uma assessoria completa que trata toda a burocracia envolvida no processo de mudança para outro país, inclusive a organização de alojamento e atividades de integração, garantindo uma transição suave para o novo ambiente. Para estudantes interessados em oportunidades internacionais, é aconselhável explorar os serviços da STW, que incluem desde a assistência na escolha do destino até o suporte pós-chegada, proporcionando uma experiência enriquecedora e sem preocupações no exterior.",
        };
      case "Integração":
        return {
          title: "Integração Cultural: Chave para o Sucesso no Exterior",
          text: "A integração é um processo fundamental para qualquer estudante que se muda para outro país. Ela envolve mais do que simplesmente se adaptar ao ambiente acadêmico; é sobre se imergir na cultura, entender as nuances sociais e estabelecer uma nova rotina diária. Serviços de integração, como os oferecidos pela STW, são essenciais para facilitar essa transição. Eles podem incluir desde sessões de orientação cultural até eventos de networking e atividades sociais que ajudam a criar uma rede de apoio. Para estudantes internacionais, aproveitar esses recursos pode ser a chave para não apenas sobreviver, mas prosperar em um novo contexto cultural, abrindo caminho para uma experiência de estudo e trabalho enriquecedora e um sentimento de pertencimento em uma comunidade diversificada.",
        };
      case "Universidades":
        return {
          title: "Educação de Excelência nas Universidades de Portugal",
          text: "As universidades de Portugal oferecem uma combinação única de tradição acadêmica e inovação, atraindo estudantes de todo o mundo com seu ensino de qualidade e pesquisa de ponta. Nestas instituições, pode-se experimentar uma educação enraizada em séculos de conhecimento, mas que simultaneamente impulsiona o progresso em várias áreas do saber. Com cursos que vão desde as humanidades até as ciências e tecnologia, as universidades portuguesas estão equipadas com instalações modernas e oferecem uma ampla gama de atividades extracurriculares e programas de intercâmbio. Além disso, Portugal é conhecido pela sua hospitalidade e baixo custo de vida em comparação com outros países europeus, o que torna a experiência ainda mais atraente para os estudantes internacionais. A beleza histórica, o clima ameno e a rica cultura do país são bônus adicionais que complementam a jornada acadêmica.",
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
            className={"small-round"}
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
