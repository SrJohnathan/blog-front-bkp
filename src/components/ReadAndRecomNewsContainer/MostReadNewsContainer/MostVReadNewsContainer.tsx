import { SmallVertCard } from "@/components/Cards/SmallVertCard/SmallVertCard";

export const MostReadNewsContainer = () => {
  return (
    <div className={"s12 m12"}>
      <div className={"grid"}>
        <SmallVertCard></SmallVertCard>
        <SmallVertCard></SmallVertCard>
        <SmallVertCard></SmallVertCard>
        <SmallVertCard></SmallVertCard>
      </div>
      <a className={"primary-title margin"}>
        Ver Mais <i>expand_more</i>
      </a>
    </div>
  );
};
