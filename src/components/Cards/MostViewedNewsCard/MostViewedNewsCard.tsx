import Link from "next/link";
import { MiniCardViews } from "../MiniCardViews/MiniCardViews";
import { GetNews } from "@/dtos/News";
import { FallbackImage } from "@/components/Cards/MedSqCard/FallbackImage";

export const MostViewedNewsCard = ({ value }: { value: GetNews }) => {
  return (
    <div className="s6 m2 responsive">
      <Link href={`/news/${value.id}`}>
        <article className="no-padding transparent no-elevate">
          <FallbackImage
            className="small-height small-width small"
            width={110}
            height={110}
            src={"/api/files/" + value.img}
            alt={""}
          />

          {/* ********DESKTOP********** */}
          <div className="m l padding">
            <h6 className="small bold">
              {value.titulo
                ? value.titulo.length > 13
                  ? value.titulo.substring(0, 13) + "..."
                  : value.titulo
                : ""}
            </h6>
            <p className="m l small-line">
              {value.description
                ? value.description.length > 19
                  ? value.description.substring(0, 19) + "..."
                  : value.description
                : ""}
            </p>
            <MiniCardViews
              views={value.total_views || 0}
              category={value.name_category || ""}
              date={value.data_criacao}
            />
          </div>
          <div className="small-space"></div>

          {/* ********MOBILE********** */}
          <div className="s">
            <h6 className="small bold">
              {value.titulo
                ? value.titulo.length > 12
                  ? value.titulo.substring(0, 12) + "..."
                  : value.titulo
                : ""}
            </h6>
            <p className="s small-line">
              {value.description
                ? value.description.length > 15
                  ? value.description.substring(0, 15) + "..."
                  : value.description
                : ""}
            </p>
            <MiniCardViews
              views={value.total_views || 0}
              category={value.name_category || ""}
              date={value.data_criacao}
            />
          </div>
        </article>
      </Link>
    </div>
  );
};
