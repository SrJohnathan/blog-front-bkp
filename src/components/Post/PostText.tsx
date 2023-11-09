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
        className="responsive m l large-height round"
        width={800}
        height={358}
        src={`/api/files/${props.news.img}`}
        alt=""
      />
      <div className="small-space"></div>

      <FallbackImage
        className="s large-height extra-width no-padding no-margin"
        style={{ width: "100%" }}
        src={`/api/files/${props.news.img}`}
        alt=""
      />
      <h6 className="small left-align">{props.news.conteudo}</h6>
      <div className="m1"></div>
    </>
  );
};
