import { PodcastCard } from "../Cards/PodcastCard/PodcastCard";
import { divider } from "./styles";

export const PodCasts = () => {
  return (
    <div>
      <div className="space"></div>
      <div className="row">
        <h4 className="small bold primary-title">Podcasts</h4>
        <div className={"primary-title-container"} style={divider}></div>
      </div>
      <div className={"s6 m12 padding"}>
        <div className={"grid"}>
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
        </div>
      </div>
      <a className={"primary-title margin"}>
        Ver Mais <i>expand_more</i>
      </a>
    </div>
  );
};
