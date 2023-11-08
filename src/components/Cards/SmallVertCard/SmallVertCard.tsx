import Image from "next/image";
import Link from "next/link";
import { MiniCardViews } from "../MiniCardViews/MiniCardViews";
import { GetNews } from "@/dtos/News";
import { FallbackImage } from "@/components/Cards/MedSqCard/FallbackImage";

export const SmallVertCard = ({ value }: { value: GetNews }) => {
  return (
    <Link href={`/news/${value.id}`} className={"s6 m3"}>
      <article className="no-padding transparent no-elevate">
        <FallbackImage
          className="responsive small"
          width={110}
          height={110}
          src={"/api/files/" + value.img}
          alt={""}
        />
        <div className="small-space"></div>
        <div>
          <h6 className="small bold left-align">{value.titulo}</h6>
          <p className="small-line left-align">
            {value.description
              ? value.description.length > 66
                ? value.description.substring(0, 66) + "..."
                : value.description
              : ""}
          </p>
          <MiniCardViews
            views={value.total_views || 0}
            category={value.name_category || ""}
            date={value.data_criacao}
          />

          <div className="medium-space"></div>
        </div>
      </article>
    </Link>
  );
};
