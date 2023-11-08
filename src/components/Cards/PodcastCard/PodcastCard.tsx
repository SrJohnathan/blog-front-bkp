import { GetNews } from "@/dtos/News";
import { FallbackImage } from "@/components/Cards/MedSqCard/FallbackImage";
import { MiniCardViews } from "../MiniCardViews/MiniCardViews";

export const PodcastCard = ({ value }: { value: GetNews }) => {
  console.log(value);

  return (
    <div className="primary small-round s12 m6">
      <article className="padding transparent no-elevate">
        <div className="grid">
          <FallbackImage
            className="s7 m7 large small-height small-width"
            width={110}
            height={240}
            src={
              "/api/files/" + value.img?.split("||")[0] || "/Component_4.jpeg"
            }
            alt=""
          />

          <div className="s5 m5 small-round wrap responsive">
            <h6 className="small on-primary">
              #STW1 |{" "}
              {value.titulo
                ? value.titulo.length > 66
                  ? value.titulo.substring(0, 66) + "..."
                  : value.titulo
                : ""}
            </h6>
            <MiniCardViews
              views={value.total_views || 0}
              category={value.name_category || ""}
              date={value.data_criacao}
            />
          </div>
        </div>
        <div className="small-space"></div>
        <div className="center-align">
          <audio controls className="small-padding">
            <source
              src={
                "/api/files/" + value.conteudo?.split("||")[0] ||
                "/709214__newlocknew__rain_eaves-dropsmelted-snowrainautumncity-yard-3_em.wav"
              }
              type="audio/wav"
            />
            Your browser does not support the audio element.
          </audio>
        </div>
      </article>
    </div>
  );
};
