"use client";

import { useTranslations } from "next-intl";
import { divider } from "@/styles/styles";
import { TopAdsContainer } from "@/components/Ads/TopAdsContainer/TopAdsContainer";
import { RectVideoCard } from "@/components/Cards/RectVideoCard/RectVideoCard";
import Image from "next/image";
import { Articles } from "@/components/Articles/Articles";

import { MainAdsContainer } from "@/components/Ads/MainAdsContainer/MainAdsContainer";
import { MostRecomNewsContainer } from "@/components/MostSearchedNewsContainer/MostRecomNewsContainer/MostRecomNewsContainer";

const News = () => {
  const t = useTranslations("");

  return (
    <>
      <TopAdsContainer />

      <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit</h5>

      <div className="row">
        <h4 className={"small bold primary-title"}>{t("Resumo")}</h4>
        <div className={"primary-title-container"} style={divider}></div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A nemo aliquam
        id quos, eveniet veritatis! <br /> Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Aspernatur inventore quia repudiandae hic
        ab itaque?
      </p>
      <Image
        className="large"
        src={"/Component_5.png"}
        alt=""
        width={200}
        height={100}
      />
      <h6 className="small bold">Lorem ipsum dolor sit</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A nemo aliquam
        id quos, eveniet veritatis! <br /> Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Aspernatur inventore quia repudiandae hic
        ab itaque?
      </p>

      <div className="row">
        <h4 className={"small bold primary-title"}>
          {t("Videos_Relacionados")}
        </h4>
        <div className={"primary-title-container"} style={divider}></div>
      </div>
      <div className={"grid medium-space"}>
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <RectVideoCard key={index} />
          ))}
      </div>

      <div className="large-space"></div>

      <div className={"grid small-space"}>
        {/* Coluna principal */}
        <div className={"s12 m8"}>
          <Image
            className="medium-width"
            src={"/Component_2.avif"}
            width={110}
            height={80}
            alt=""
          />
          <h6 className="small bold">Lorem ipsum dolor sit</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A nemo
            aliquam id quos, eveniet veritatis! <br /> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Aspernatur inventore quia
            repudiandae hic ab itaque?
          </p>
          <Image
            className="medium-width"
            src={"/Component_2.avif"}
            width={110}
            height={80}
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A nemo
            aliquam id quos, eveniet veritatis! <br /> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Aspernatur inventore quia
            repudiandae hic ab itaque?
          </p>
          <div className={"space"}></div>
          <div className={"grid center medium-space"}>
            <div></div>
            <MostRecomNewsContainer />
            <MostRecomNewsContainer />
            <MostRecomNewsContainer />
          </div>
        </div>
        {/* Coluna lateral */}
        <div className={"s12 m4"}>
          <Articles  />
          <MainAdsContainer />
          <Articles  />
          <Articles  />
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
    </>
  );
};

export default News;
