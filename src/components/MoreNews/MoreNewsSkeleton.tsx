import { box, divider } from "./styles";
import MedSqCardSkeleton from "../Cards/MedSqCard/MedSqCardSkeleton";
import Link from "next/link";

export default function MoreNewsSkeleton() {
  const numSkeletonCards = 9;

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
          {Array.from({ length: numSkeletonCards }, (_, index) => (
            <MedSqCardSkeleton key={index} />
          ))}
        </div>
        <Link href={"/articles?=full"} className={"primary-title margin"}>
          Ver Mais <i>expand_more</i>{" "}
        </Link>
      </article>
    </div>
  );
}
