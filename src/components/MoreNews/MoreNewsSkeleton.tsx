import { box, divider } from "./styles";
import MedSqCardSkeleton from "../Cards/MedSqCard/MedSqCardSkeleton";

export default function MoreNewsSkeleton() {
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
          <MedSqCardSkeleton></MedSqCardSkeleton>
          <MedSqCardSkeleton></MedSqCardSkeleton>
          <MedSqCardSkeleton></MedSqCardSkeleton>
          <MedSqCardSkeleton></MedSqCardSkeleton>
          <MedSqCardSkeleton></MedSqCardSkeleton>
          <MedSqCardSkeleton></MedSqCardSkeleton>
          <MedSqCardSkeleton></MedSqCardSkeleton>
          <MedSqCardSkeleton></MedSqCardSkeleton>
          <MedSqCardSkeleton></MedSqCardSkeleton>
        </div>
        <a href={"/articles?=full"} className={"primary-title margin"}>
          Ver Mais <i>expand_more</i>{" "}
        </a>
      </article>
    </div>
  );
}
