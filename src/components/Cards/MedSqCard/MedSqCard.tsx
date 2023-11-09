import Link from "next/link";
import { MiniCardViews } from "../MiniCardViews/MiniCardViews";
import { GetNews } from "@/dtos/News";
import { FallbackImage } from "./FallbackImage";

export const MedSqCard = ({ value }: { value: GetNews }) => {
  return (
    <Link href={`/news/${value.id}`} className={"s6 m4"}>
      <article className="no-padding transparent no-elevate">
        <FallbackImage
          className="small-height medium-width medium border"
          width={200}
          height={200}
          src={`/api/files/${value.img}` || "/Component_2.avif"}
          fallbackSrc={"/lod.gif"}
          alt=""
        />
        <div className="padding">
          <h6 className="small bold">
            {value.titulo
              ? value.titulo.length > 17
                ? value.titulo.substring(0, 17) + "..."
                : value.titulo
              : ""}
          </h6>
          <p className="small-line">
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
      </article>
    </Link>
  );
};
