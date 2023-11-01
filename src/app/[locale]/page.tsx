"use client";

import { TopAdsContainer } from "@/components/Ads/TopAdsContainer/TopAdsContainer";
import { VertRectTopCard } from "@/components/Cards/VertRectTopCard/VertRectTopCard";
import { TopMedRectCard } from "@/components/Cards/TopMedRectCard/TopMedRectCard";
import MoreNews from "@/components/MoreNews/MoreNews";
import MoreNewsSkeleton from "@/components/MoreNews/MoreNewsSkeleton";
import { MostSearchedNewsContainer } from "@/components/MostSearchedNewsContainer/MostSearchedNewsContainer";
import { MainAdsContainer } from "@/components/Ads/MainAdsContainer/MainAdsContainer";
import { PodCasts } from "@/components/Podcasts/Podcasts";
import { Articles } from "@/components/Articles/Articles";
import { Suspense } from "react";
import { useTranslations } from "next-intl";
import { StudentGuidePanel } from "@/components/StudentGuidePanel/StudentGuidePanel";
import { GetNews } from "@/dtos/News";

// Notícia 1
export const news1: GetNews = {
  id: 1,
  titulo: "Cientistas",
  img: "",
  language: "Pt",
  categoria_id: 1,
  tipo: "Texto",
  conteudo: `
    Cientistas em todo o mundo estão celebrando.
  `,
  name_category: "Ciência",
};

export default function Home() {
  const t = useTranslations("Home");

  // const dataFromAPI = [];

  return (
    <>
      <main className={"responsive"}>
        <TopAdsContainer />
        <div className={"grid"}>
          <VertRectTopCard />
          <div className={"s12 m6"}>
            <TopMedRectCard />
            <TopMedRectCard />
          </div>
        </div>
        <div className="space"></div>

        <div className={"grid small-space"}>
          {/* Coluna principal */}
          <div className={"s12 m8"}>
            <Suspense fallback={<MoreNewsSkeleton />}>
              <MoreNews />
            </Suspense>
            <div className={"space"}></div>
            <MostSearchedNewsContainer />
            <div className={"space"}></div>
            <MainAdsContainer />
            <div className={"space"}></div>
            <PodCasts />
            <div className={"space"}></div>
            <MainAdsContainer />
            <div className={"space"}></div>
            <StudentGuidePanel />
          </div>
          {/* Coluna lateral */}
          <div className={"s12 m4"}>
            <Articles data={news1} />
            <MainAdsContainer />
            <Articles data={news1} />
            <Articles data={news1} />
            <MainAdsContainer />
            {/* {dataFromAPI.map((item, index) => {
              if (item.type === "category") {
                return <Articles key={index} data={item} />;
              }
              if (item.type === "ads") {
                return <MainAdsContainer key={index} data={item} />;
              }
            })} */}
          </div>
        </div>
      </main>
    </>
  );
}
