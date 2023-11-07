// import layout from "./layout";
import { useLocale, useTranslations } from "next-intl";
import { divider } from "@/styles/styles";
import { TopAdsContainer } from "@/components/Ads/TopAdsContainer/TopAdsContainer";
import { RectVideoCard } from "@/components/Cards/RectVideoCard/RectVideoCard";
import Image from "next/image";
import { Articles } from "@/components/Articles/Articles";
import { MainAdsContainer } from "@/components/Ads/MainAdsContainer/MainAdsContainer";
import { MostRecomNewsContainer } from "@/components/MostSearchedNewsContainer/MostRecomNewsContainer/MostRecomNewsContainer";

import { GetNews } from "@/dtos/News";
import { Ex } from "@/extension/ex";
import { PostText } from "@/components/Post/PostText";
import { FallbackImage } from "@/components/Cards/MedSqCard/FallbackImage";

const Page = async ({ params }: { params: { id: string } }) => {
  const news: GetNews = (await Ex.api().get(`/post/insert_view/${params.id}`))
    .data;
  const array_new: GetNews[] = (
    await Ex.api().get(
      `/post/${news.language}/list/${0}/${2}/desc/${news.categoria_id}`
    )
  ).data;

  return (
    <div className="responsive s m l large-margin center-align">
      <TopAdsContainer />
      <div className="m l medium-space"></div>

      <h3 className="small bold primary-title center-align">{news?.titulo}</h3>

      <div className="medium-space"></div>

      <div className="large-divider"></div>

      <div className="grid">
        <div className="m1"></div>
        <p className="bold s2 m1">Resumo</p>
        <div className="s8 m8">
          <h6 className="small left-align">{news.description}</h6>

          {news.tipo === "Texto" && <PostText news={news} />}

          {news.tipo === "Html" && <PostText news={news} />}

          {news.tipo === "Audio" && <PostText news={news} />}

          {news.tipo === "Video" && <PostText news={news} />}
        </div>
      </div>

      <div className="medium-space"></div>

      <div className="large-divider"></div>

      <div className="grid">
        <div className="m1"></div>
        <p className="bold s2 m1">Vídeos</p>
        <div className="s8 m8">
          <div className={"grid medium-space"}>
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <RectVideoCard key={index} />
              ))}
          </div>
        </div>
        <div className="m1"></div>
      </div>

      <div className="m l small-space"></div>

      <div className="large-divider"></div>

      <div className="m l small-space"></div>

      <div className="grid">
        <div className="m1"></div>

        {/* Coluna principal */}
        <div className="s12 m7 padding">
          <div>
            <FallbackImage
              className=" responsive medium-height round"
              src={"/api/files/" + array_new[0].img}
              width={600}
              height={400}
              alt=""
            />
            <h6 className="small bold">{array_new[0].titulo}</h6>
            <p className="left-align">{array_new[0].description}</p>
            <div className="m l small-space"></div>
            <FallbackImage
              className=" responsive medium-height round"
              src={"/api/files/" + array_new[1].img}
              width={600}
              height={400}
              alt=""
            />
            <div className="m l small-space"></div>
            <p className="left-align">{array_new[1].description}</p>

            <div className={"large-space"}></div>

            <div className="left-align">
              <div className="row">
                <h4 className={"small bold primary-title"}>
                  Mais Recomendadas
                </h4>
                <div
                  className={"primary-title-container"}
                  style={divider}
                ></div>
              </div>

              <div className={"medium-space"}></div>
              <MostRecomNewsContainer />
            </div>
          </div>
        </div>

        {/* Coluna lateral */}
        <div className={"s12 m3"}>
          <Articles />
          <Articles />
          <MainAdsContainer />
          {/* {dataFromAPI.map((item, index) => {
              if (item.type === "category") {
                return <Articles key={index} data={item} />;
              }
              if (item.type === "ad") {
                return <MainAdsContainer key={index} data={item} />;
              }
            })} */}
        </div>
      </div>
    </div>
  );
};

export default Page;

{
  /* <div className="row">
          <h5 className={"small bold primary-title"}>{t("Resumo")}</h5>
          <div className={"primary-title-container"} style={divider}></div>
        </div> */
}
