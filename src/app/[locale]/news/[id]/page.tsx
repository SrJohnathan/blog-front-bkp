import { divider } from "@/styles/styles";
import { TopAdsContainer } from "@/components/Ads/TopAdsContainer/TopAdsContainer";
import { RectVideoCard } from "@/components/Cards/RectVideoCard/RectVideoCard";
import { Articles } from "@/components/Articles/Articles";
import { MainAdsContainer } from "@/components/Ads/MainAdsContainer/MainAdsContainer";
import { MostRecomNewsContainer } from "@/components/MostSearchedNewsContainer/MostRecomNewsContainer/MostRecomNewsContainer";

import { GetNews } from "@/dtos/News";
import { Ex } from "@/extension/ex";
import { PostText } from "@/components/Post/PostText";
import { FallbackImage } from "@/components/Cards/MedSqCard/FallbackImage";
import { getSettings, LateralPost } from "@/source/settings";
import { SocialMediaIcons } from "@/components/SocialMediaIcons/SocialMediaIcons";

const Page = async ({ params }: { params: { id: string } }) => {
  const news: GetNews = (await Ex.api().get(`/post/insert_view/${params.id}`))
    .data;

  const array_new: GetNews[] = (
    await Ex.api().get(
      `/post/${news.language}/list/${0}/${2}/desc/${news.categoria_id}`
    )
  ).data;

  const lpost = await getSettings(LateralPost);

  return (
    <>
      {/*----------------- DESKTOP ------------------*/}

      <div className="responsive m l center-align">
        <TopAdsContainer />

        <div className="medium-space"></div>

        <h3 className="small bold primary-title center-align ">
          {news?.titulo}
        </h3>

        <div className="small-space"></div>
        <div className="large-divider"></div>
        <div className="small-space"></div>

        <div className="grid">
          <div className="m1"></div>

          <h6
            style={{ flexDirection: "column", justifyContent: "start" }}
            className="small no-margin bold m1 left-align"
          >
            Resumo
          </h6>

          <div className="s12 m8">
            <p className="left-align">{news.description}</p>
            <div className="medium-space"></div>

            {news.tipo === "Texto" && <PostText news={news} />}

            {news.tipo === "Html" && <PostText news={news} />}
          </div>
          <div className="m1"></div>
        </div>

        <div className="medium-space"></div>
        <div className="large-divider"></div>

        <div className="grid">
          <div className="m1"></div>
          <h6
            style={{ flexDirection: "column", justifyContent: "start" }}
            className="small no-margin bold m1 left-align"
          >
            Vídeos
          </h6>
          <div className="s12 m8">
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

        <div className="small-space"></div>
        <div className="large-divider"></div>
        <div className="small-space"></div>

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
              <div className="small-space"></div>
              <h6 className="small bold">{array_new[0].titulo}</h6>
              <p className="left-align">{array_new[0].description}</p>
              <div className="small-space"></div>
              <FallbackImage
                className=" responsive medium-height round"
                src={"/api/files/" + array_new[0].img}
                width={600}
                height={400}
                alt=""
              />
              <div className="small-space"></div>
              <p className="left-align">{array_new[0].description}</p>

              <div className={"large-space"}></div>

              <div className="left-align">
                <div className="row">
                  <h4 className={"small bold primary-title"}>Recomendadas</h4>
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
            {lpost &&
              lpost.data.value?.map((value, index) => {
                if (value.typ === "stw") {
                  return <Articles id={value.id} key={index} />;
                }
                if (value.typ === "google") {
                  return <MainAdsContainer key={index} />;
                }
              })}
          </div>
        </div>
      </div>

      {/*----------------- MOBILE ------------------*/}

      <div className="responsive s center-align">
        <TopAdsContainer />
        <div className="large-space"></div>
        <div className="background s12 small-round elevate">
          <div className="small-space"></div>
          <h3 className="small bold primary-title left-align large-margin">
            {news?.titulo}
          </h3>
          <h6 className="small left-align large-margin">{news.description}</h6>
          <div className="medium-space"></div>
          <div className="primary small-width padding large-margin">
            <SocialMediaIcons />
          </div>
          <div className="medium-space"></div>
        </div>
        <div>
          {news.tipo === "Texto" && <PostText news={news} />}

          {news.tipo === "Html" && <PostText news={news} />}
        </div>

        <div className="medium-space"></div>

        <div className="background elevate">
          <div className="small-space"></div>
          <h6 className="small bold large-margin left-align ">Vídeos</h6>
          <div className="s12">
            <div className={"grid"}>
              {Array(2)
                .fill(null)
                .map((_, index) => (
                  <RectVideoCard key={index} />
                ))}
            </div>
          </div>
        </div>
        <div className="large-space"></div>

        <div className={"s12"}>
          {lpost &&
            lpost.data.value?.map((value, index) => {
              if (value.typ === "stw") {
                return <Articles id={value.id} key={index} />;
              }
              if (value.typ === "google") {
                return <MainAdsContainer key={index} />;
              }
            })}
        </div>

        <div className="large-space"></div>
        <div className="large-space"></div>

        <div className="s12">
          <div>
            <FallbackImage
              className="responsive medium-height"
              src={"/api/files/" + array_new[0].img}
              width={600}
              height={400}
              alt=""
            />
            <div className="small-space"></div>
            <h6 className="small bold">{array_new[0].titulo}</h6>
            <p className="left-align">{array_new[0].description}</p>
            <div className="medium-space"></div>
            <FallbackImage
              className=" responsive medium-height"
              src={"/api/files/" + array_new[0].img}
              width={600}
              height={400}
              alt=""
            />
            <div className="small-space"></div>
            <p className="left-align">{array_new[0].description}</p>

            <div className={"large-space"}></div>

            <div className="left-align background elevate">
              <div className="medium-space"></div>
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
              <div className="padding">
                <MostRecomNewsContainer />
              </div>
              <div className={"large-space"}></div>
            </div>
            <div className={"large-space"}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
