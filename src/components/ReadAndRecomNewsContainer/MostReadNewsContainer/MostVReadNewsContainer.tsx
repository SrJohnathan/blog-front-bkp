import { SmallVertCard } from "@/components/Cards/SmallVertCard/SmallVertCard";

export const MostReadNewsContainer = () => {
  return (
    <div className={"s12 m12"}>
      <div className={"grid"}>
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <SmallVertCard key={index}></SmallVertCard>
          ))}
      </div>
      <a className={"primary-title margin"}>
        Ver Mais <i>expand_more</i>
      </a>
    </div>
  );
};
