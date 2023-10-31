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

export default function Home() {
  const t = useTranslations("Home");

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
            <Articles title={t("Oportunidades")} />
            <div className={"space"}></div>
            <MainAdsContainer />
            <div className={"space"}></div>
            <Articles title={t("Top_Estudantes")} />
            <div className={"space"}></div>
            <Articles title={t("Eventos")} />
            <div className={"space"}></div>
            <MainAdsContainer />
            <div className={"space"}></div>
          </div>
        </div>
      </main>
    </>
  );
}
