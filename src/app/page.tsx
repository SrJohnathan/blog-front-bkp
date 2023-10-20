import { Articles } from "@/components/Articles/Articles";
import MoreNews from "@/components/MoreNews/MoreNews";
import { TopAdsContainer } from "@/components/Ads/TopAdsContainer/TopAdsContainer";
import { MainAdsContainer } from "@/components/Ads/MainAdsContainer/MainAdsContainer";
import { PodCasts } from "@/components/Podcasts/Podcasts";
import { ReadAndRecomNewsContainer } from "@/components/ReadAndRecomNewsContainer/ReadAndRecomNewsContainer";

export default function Home() {
  return (
    <main className={"responsive"}>
      <TopAdsContainer></TopAdsContainer>
      <div className={"grid large-space"}>
        {/* Coluna principal */}
        <div className={"s12 m8"}>
          <MoreNews></MoreNews>
          <div className={"space"}></div>
          <ReadAndRecomNewsContainer></ReadAndRecomNewsContainer>
          <div className={"space"}></div>
          <MainAdsContainer></MainAdsContainer>
          <div className={"space"}></div>
          <PodCasts></PodCasts>
        </div>
        {/* Coluna lateral */}
        <div className={"s12 m4"}>
          <Articles title={"Oportunidades"}></Articles>
          <div className={"space"}></div>
          <MainAdsContainer></MainAdsContainer>
          <Articles title={"Top Estudantes"} />
          <div className={"space"}></div>
          <Articles title={"Eventos"} />
          <div className={"space"}></div>
        </div>
      </div>
    </main>
  );
}
