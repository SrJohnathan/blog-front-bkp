import { MiniCardViews } from "../MiniCardViews/MiniCardViews";
import Link from "next/link";
import { FallbackImage } from "../MedSqCard/FallbackImage";
import { GetNews } from "@/dtos/News";
import { Ex } from "@/extension/ex";

export const TopMedRectCard = async ({ id }: { id?: number }) => {


  let response: GetNews | undefined
  try {
    response  = (await Ex.api().get(`/post/first/${id}`)).data;
  }catch (e) {
    console.log(e)
  }




  return  response !== undefined ? (
    <div>
      <article className="no-padding small-round">
        <FallbackImage
          className="responsive large"
          width={377}
          height={358}
          src={`/api/files/${response.img}` || "/Component_5.png"}
          alt=""
        />
        <div className="absolute bottom left right padding bottom-shadow white-text">
          <Link href={"/news/:id"}>
            <div>
              <h5 className="bottom-padding">{response.titulo}</h5>
              <p>
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
  ) : null;
};
