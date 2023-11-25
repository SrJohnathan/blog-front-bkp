import { MiniCardViews } from "../MiniCardViews/MiniCardViews";
import Link from "next/link";
import { Ex } from "@/extension/ex";
import { FallbackImage } from "@/components/Cards/MedSqCard/FallbackImage";
import { GetNews } from "@/dtos/News";

export const VertRectTopCard = async ({ id }: { id?: number }) => {

  let response: GetNews | undefined
  try {
    response  = (await Ex.api().get(`/post/first/${id}`)).data;
  }catch (e) {
    console.log(e)
  }
  return response !== undefined ? (
    <div className={"s12 m6"}>
      <article className="no-padding small-round">
        <FallbackImage
          className="responsive extra large-height"
          width={377}
          height={734}
          src={`/api/files/${response.img}` || "/Component_5.png"}
          fallbackSrc={"/lod.gif"}
          alt=""
        />

        <div className="absolute bottom left right padding bottom-shadow white-text">
          <Link href={`/news/${id}`}>
            <div>
              <h5>{response.titulo}</h5>
              <p>
                {" "}
                {response.description
                  ? response.description.length > 66
                    ? response.description.substring(0, 66) + "..."
                    : response.description
                  : ""}
              </p>
            </div>
          </Link>
          <MiniCardViews
            category={response.name_category || ""}
            views={response.total_views || 0}
            date={response.data_criacao}
          />
        </div>
      </article>
    </div>
  ) : null ;
};
