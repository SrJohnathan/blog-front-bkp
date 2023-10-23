import Link from "next/link";
import { MedSqCard } from "../Cards/MedSqCard/MedSqCard";
import { box, divider } from "./styles";

// const loadNews = 60 * 60 * 8; // Atualiza a cada 8h
// const revalidate = loadNews;

function mockapi(): Promise<number[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Array.from({ length: 9 }).map((_, i) => i));
    }, 3000);
  });
}

export default async function MoreNews() {
  //   const dataNews = await fetch(`${process.env.API}/post`, {
  //     next: { revalidate: loadNews },
  //   });
  //   console.log(dataNews.json());
  const array = await mockapi();

  return (
    <div className={"grid"}>
      <div className={"s12 m12"}>
        <div style={box}>
          <h6 className={"primary-title"}>
            <strong>Mais Notícias</strong>
          </h6>
          <div className={"primary-title-container"} style={divider}></div>
        </div>
      </div>
      <article className={"s12 m12 large-padding no-elevate"}>
        <div className={"grid "}>
          {array.map((i) => {
            return <MedSqCard key={i}></MedSqCard>;
          })}
        </div>
        <Link href={"/articles?=full"} className={"primary-title margin"}>
          Ver Mais <i>expand_more</i>{" "}
        </Link>
      </article>
    </div>
  );
}
