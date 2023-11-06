import Image from "next/image";
import { MiniCardViews } from "../MiniCardViews/MiniCardViews";
import Link from "next/link";
import {Ex} from "@/extension/ex";
import {FallbackImage} from "@/components/Cards/MedSqCard/FallbackImage";
import {GetNews} from "@/dtos/News";

export const VertRectTopCard = async ({id}:{id?:number }) => {

  const  response: GetNews = (await  Ex.api().get(`/post/first/${id}`)).data;

  return (
    <div className={"s12 m6"}>
      <article className="no-padding small-round">
        <FallbackImage
            className="responsive extra large-height"
            width={377}
            height={734}
            src={`/api/files/${response.img}`|| "/Component_5.png"}
            fallbackSrc={"/lod.gif"}
            alt=""
        />

       {/* <Image
            className="responsive extra large-height"
            width={377}
            height={734}
            src="/Component_5.png"
            alt=""
        />*/}

        <div className="absolute bottom left right padding bottom-shadow white-text">
          <Link href={"/news/:id"}>
            <div>
              <h5>{response.titulo}</h5>
              <p>
                {response.description}
              </p>
            </div>
          </Link>
          <MiniCardViews   category={response.name_category || ""} views={response.total_views || 0} date={response.data_criacao}   />
        </div>
      </article>
    </div>
  );
};
