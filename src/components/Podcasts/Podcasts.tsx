import { VertVideoCard } from "../Cards/VertVideoCard/VertVideoCard";
import { box, divider } from "../MoreNews/styles";

export const PodCasts = () => {
  return (
    <div className={"grid"}>
      <div className={"s12 m12"}>
        <div style={box}>
          <h6 className={"primary-title"}>
            <strong>Podcast</strong>
          </h6>
          <div className={"primary-title-container"} style={divider}></div>
        </div>
      </div>
      <div className={"s12 m12"}>
        <div className={"grid"}>
          <VertVideoCard></VertVideoCard>
          <VertVideoCard></VertVideoCard>
          <VertVideoCard></VertVideoCard>
          <VertVideoCard></VertVideoCard>
        </div>
        <a className={"primary-title margin"}>
          Ver Mais <i>expand_more</i>
        </a>
      </div>
    </div>
  );
};
