import { PodcastCard } from "../Cards/PodcastCard/PodcastCard";

export const PodCasts = () => {
  return (
    <div>
      <div className="space"></div>
      <h4 className="small bold">Podcasts</h4>
      <div className="large-divider"></div>

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
