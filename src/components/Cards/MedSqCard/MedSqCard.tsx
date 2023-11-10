import Link from "next/link";
import { MiniCardViews } from "../MiniCardViews/MiniCardViews";
import { GetNews } from "@/dtos/News";
import { FallbackImage } from "./FallbackImage";

export const MedSqCard = ({ value }: { value: GetNews }) => {
  return (
    <Link href={`/news/${value.id}`} className={"s6 m4"}>
      <article className="no-padding transparent no-elevate">
        <FallbackImage
          className="small-height medium-width medium"
          width={200}
          height={200}
          src={`/api/files/${value.img}` || "/Component_2.avif"}
          fallbackSrc={"/lod.gif"}
          alt=""
        />
        <div className="small-space"></div>
        {/* *************DESKTOP************** */}
        <div className="m l">
          <h6 className="small bold">
            {value.titulo
              ? value.titulo.length > 23
                ? value.titulo.substring(0, 23) + "..."
                : value.titulo
              : ""}
          </h6>
          <p className="small-line">
            {value.description
              ? value.description.length > 28
                ? value.description.substring(0, 28) + "..."
                : value.description
              : ""}
          </p>
          <MiniCardViews
            views={value.total_views || 0}
            category={value.name_category || ""}
            date={value.data_criacao}
          />
        </div>

        {/* *************MOBILE************** */}
        <div className="s">
          <h6 className="small bold">
            {value.titulo
              ? value.titulo.length > 12
                ? value.titulo.substring(0, 12) + "..."
                : value.titulo
              : ""}
          </h6>

          <p className="small-line">
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
  );
};
