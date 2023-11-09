import Image from "next/image";
import { GetNews } from "@/dtos/News";
import { FallbackImage } from "@/components/Cards/MedSqCard/FallbackImage";

interface Props {
  news: GetNews;
}

export const PostText = (props: Props) => {
  return (
    <>
      <FallbackImage
        className="responsive m l medium-height"
        width={800}
        height={358}
        src={`/api/files/${props.news.img}`}
        alt=""
        fallbackSrc={"./lod.gif"}
      />

      <div className="small-space"></div>

      <FallbackImage
        className="s"
        width={800}
        height={358}
        src={`/api/files/${props.news.img}`}
        style={{ width: "100%" }}
        alt=""
        fallbackSrc={"./lod.gif"}
      />
      <p className="left-align">{props.news.conteudo}</p>
    </>
  );
};
