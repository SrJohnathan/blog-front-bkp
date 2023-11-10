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
import { StudentGuidePanel } from "@/components/StudentGuidePanel/StudentGuidePanel";
import { getSettings, LateralPost, MainPost } from "@/source/settings";

export default async function Home() {
  const postMain = await getSettings(MainPost);

  const lpost = await getSettings(LateralPost);

  return (
    <>
      <main className={"responsive"}>
        <TopAdsContainer />
        <div className={"grid"}>
          <VertRectTopCard id={postMain?.data.ids?.card1} />

          {/* *******DESKTOP***** */}
          <div className={"m l m6 l6"}>
            <TopMedRectCard id={postMain?.data.ids?.card2} />
            <div className="large-space"></div>
            <div className="small-space"></div>
            <TopMedRectCard id={postMain?.data.ids?.card3} />
          </div>

          {/* *******MOBILE******* */}
          <div className={"s s12"}>
            <TopMedRectCard id={postMain?.data.ids?.card2} />
            <div className="small-space"></div>
            <TopMedRectCard id={postMain?.data.ids?.card3} />
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
            {/* <MainAdsContainer /> */}
            <div className={"space"}></div>
            <PodCasts />
            <div className={"space"}></div>
            {/* <MainAdsContainer /> */}
            <div className={"space"}></div>
            <StudentGuidePanel />
          </div>

          {/* Coluna lateral */}
          <div className={"s12 m4"}>
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
      </main>
    </>
  );
}
