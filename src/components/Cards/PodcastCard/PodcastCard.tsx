import { GetNews } from "@/dtos/News";
import { FallbackImage } from "@/components/Cards/MedSqCard/FallbackImage";
import { MiniCardViews } from "../MiniCardViews/MiniCardViews";

export const PodcastCard = ({ value }: { value: GetNews }) => {
  return (
    <div className="primary small-round s6 m6">
      <article className="no-padding transparent no-elevate">
        <div className="grid padding">
          <FallbackImage
            className="responsive large"
            width={110}
            height={240}
            src={
              "/api/files/" + value.img?.split("||")[0] || "/Component_4.jpeg"
            }
            alt=""
          />
          <div className="m6 responsive small-round wrap">
            <h6 className="small on-primary">#Day1 | Educação em Portugal</h6>
            <MiniCardViews
              views={value.total_views || 0}
              category={value.name_category || ""}
              date={value.data_criacao}
            />
          </div>
        </div>
        <div className="center-align">
          <audio controls>
            <source
              src="/709214__newlocknew__rain_eaves-dropsmelted-snowrainautumncity-yard-3_em.wav"
              type="audio/wav"
            />
            Your browser does not support the audio element.
          </audio>
          <div className="small-space"></div>
        </div>
      </article>
    </div>
  );
};
