"use client";

// import layout from "./layout";
import {useLocale, useTranslations} from "next-intl";
import { divider } from "@/styles/styles";
import { TopAdsContainer } from "@/components/Ads/TopAdsContainer/TopAdsContainer";
import { RectVideoCard } from "@/components/Cards/RectVideoCard/RectVideoCard";
import Image from "next/image";
import { Articles } from "@/components/Articles/Articles";
import { MainAdsContainer } from "@/components/Ads/MainAdsContainer/MainAdsContainer";
import { MostRecomNewsContainer } from "@/components/MostSearchedNewsContainer/MostRecomNewsContainer/MostRecomNewsContainer";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {GetNews} from "@/dtos/News";
import {Ex} from "@/extension/ex";

const News = () => {

  const route = useRouter()
  const locale = useLocale();

  const [news, setNews] = useState<GetNews| null>(null);



  useEffect(() => {


    Ex.apiClient().get(`/api/${locale}/post/first/${route.query.id}`).then(value =>  setNews(value.data))


  }, [route.query.news]);

  const t = useTranslations("");

  return (
    <div className="responsive s m l large-margin center-align">
      <TopAdsContainer />
      <div className="m l medium-space"></div>

      <h3 className="small bold primary-title center-align">
        Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Adipisci, illum.
      </h3>

      <div className="medium-space"></div>

      <div className="large-divider"></div>

      <div className="grid">
        <div className="m1"></div>

        <p className="bold s2 m1">Resumo</p>
        <div className="s8 m8">
          <h6 className="small left-align">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            alias tempora non magnam, quia fuga, mollitia laudantium debitis
            doloremque ea aperiam ad, aliquid cumque autem dolor repudiandae
            aliquam totam facere eaque voluptatum recusandae necessitatibus
            quidem ab earum! Pariatur minima nulla inventore sit doloremque
            reprehenderit dolorum.
          </h6>

          <Image
            className="responsive large-height round"
            width={800}
            height={358}
            src="/Component_5.png"
            alt=""
          />
          <div className="small-space"></div>
          <h5 className="small bold">Lorem ipsum dolor sit</h5>
          <h6 className="small left-align">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            veritatis doloremque aspernatur saepe repudiandae eum facere hic
            earum! Consectetur aliquam perspiciatis ratione odit reiciendis
            blanditiis itaque dolore, corporis odio quo officiis veniam nemo
            dolor rem, incidunt nostrum! Voluptate magni at iure numquam,
            architecto laborum cupiditate impedit beatae consectetur? Aspernatur
            ullam blanditiis fugiat recusandae mollitia tenetur unde.
          </h6>
          <div className="m1"></div>
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
            <Image
              className=" responsive medium-height round"
              src={"/Component_2.avif"}
              width={600}
              height={400}
              alt=""
            />
            <h6 className="small bold">Lorem ipsum dolor sit</h6>
            <p className="left-align">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A nemo
              aliquam id quos, eveniet veritatis! <br /> Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Aspernatur inventore quia
              repudiandae hic ab itaque?
            </p>
            <div className="m l small-space"></div>
            <Image
              className=" responsive medium-height round"
              src={"/Component_2.avif"}
              width={600}
              height={400}
              alt=""
            />
            <div className="m l small-space"></div>
            <p className="left-align">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A nemo
              aliquam id quos, eveniet veritatis! <br /> Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Aspernatur inventore quia
              repudiandae hic ab itaque?
            </p>

            <div className={"large-space"}></div>

            <div className="row">
              <h4 className={"small bold primary-title"}>Mais Recomendadas</h4>
              <div className={"primary-title-container"} style={divider}></div>
            </div>

            <div className={"medium-space"}></div>
            <MostRecomNewsContainer />
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

export default News;

{
  /* <div className="row">
        <h5 className={"small bold primary-title"}>{t("Resumo")}</h5>
        <div className={"primary-title-container"} style={divider}></div>
      </div> */
}
