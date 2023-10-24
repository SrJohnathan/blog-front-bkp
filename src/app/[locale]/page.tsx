"use client";

import { Articles } from "@/components/Articles/Articles";
import MoreNews from "@/components/MoreNews/MoreNews";
import { TopAdsContainer } from "@/components/Ads/TopAdsContainer/TopAdsContainer";
import { MainAdsContainer } from "@/components/Ads/MainAdsContainer/MainAdsContainer";
import { PodCasts } from "@/components/Podcasts/Podcasts";
import { ReadAndRecomNewsContainer } from "@/components/ReadAndRecomNewsContainer/ReadAndRecomNewsContainer";
import { Suspense } from "react";
import MoreNewsSkeleton from "@/components/MoreNews/MoreNewsSkeleton";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className={"responsive"}>
      <TopAdsContainer />
      <div className={"grid large-space"}>
        {/* Coluna principal */}
        <div className={"s12 m8"}>
          <Suspense fallback={<MoreNewsSkeleton />}>
            <MoreNews />
          </Suspense>
          <div className={"space"}></div>
          <ReadAndRecomNewsContainer />
          <div className={"space"}></div>
          <MainAdsContainer />
          <div className={"space"}></div>
          <PodCasts />
        </div>
        {/* Coluna lateral */}
        <div className={"s12 m4"}>
          <Articles title={t("Oportunidades")} />
          <div className={"space"}></div>
          <MainAdsContainer />
          <Articles title={t("Top Estudantes")} />
          <div className={"space"}></div>
          <Articles title={t("Eventos")} />
          <div className={"space"}></div>
        </div>
      </div>
    </main>
  );
}
