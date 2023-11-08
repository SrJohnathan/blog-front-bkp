import { MiniCardViews } from "../MiniCardViews/MiniCardViews";
import Link from "next/link";
import { FallbackImage } from "../MedSqCard/FallbackImage";
import { GetNews } from "@/dtos/News";

export const HorzNewsSqCard = ({ value }: { value: GetNews }) => {
  return (
    <>
      <Link href={`/news/${value.id}`}>
        <article className="no-padding transparent no-elevate">
          <div className="grid no-space">
            <div className="s6 padding">
              <FallbackImage
                className="extra small-height small-width"
                width={110}
                height={110}
                src={`/api/files/${value.img}` || "/Component_3.avif"}
                alt={""}
              />
            </div>
            <div className="padding s6">
              <h6 className="small bold">{value.titulo}</h6>
              <p className="tiny-line">
                {value.description
                  ? value.description.length > 60
                    ? value.description.substring(0, 60) + "..."
                    : value.description
                  : ""}
              </p>
              <MiniCardViews
                views={value.total_views || 0}
                category={value.name_category || ""}
                date={value.data_criacao}
              />
            </div>
          </div>
          <div className="medium-divider"></div>
        </article>
      </Link>

      <div className={"small-space"}></div>
    </>
  );
};
