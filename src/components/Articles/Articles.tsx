import { HorzNewsSqCard } from "../Cards/HorzNewsSqCard/HorzNewsSqCard";

export const Articles = ({ title }: { title: string }) => {
  return (
    <article className={"padding background no-elevate "}>
      <p style={{ fontSize: "12pt" }} className={"primary-title margin"}>
        <strong>{title}</strong>
      </p>
      <div
        style={{ backgroundColor: "#ddd", height: "1px" }}
        className={"max"}
      ></div>
      <div className={"small-space"}></div>
      <HorzNewsSqCard></HorzNewsSqCard>
      <HorzNewsSqCard></HorzNewsSqCard>
      <a className={"primary-title margin"}>
        Ver Mais <i>expand_more</i>{" "}
      </a>
    </article>
  );
};
