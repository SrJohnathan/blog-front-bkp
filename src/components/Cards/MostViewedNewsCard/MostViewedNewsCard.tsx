import Image from "next/image";
import Link from "next/link";
import { MiniCardViews } from "../MiniCardViews/MiniCardViews";
import { GetNews } from "@/dtos/News";
import { FallbackImage } from "@/components/Cards/MedSqCard/FallbackImage";

export const MostViewedNewsCard = ({ value }: { value: GetNews }) => {
  return (
    <div className="s6 m2 responsive">
      <Link href={"/most-viewed"}>
        <article className="no-padding transparent no-elevate">
          <FallbackImage
            className="small-height small-width small"
            width={110}
            height={110}
            src={"/api/files/" + value.img}
            alt={""}
          />
          <div className="padding">
            <h6 className="small bold">{value.titulo}</h6>
            <p className="small-line">{value.description}</p>
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
