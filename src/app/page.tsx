import { Articles } from "@/components/Articles/Articles";
import MoreNews from "@/components/MoreNews/MoreNews";
import { TopAdsContainer } from "@/components/TopAdsContainer/TopAdsContainer";

export default function Home() {
  return (
    <main className={"responsive"}>
      <TopAdsContainer></TopAdsContainer>
      <div className={"grid large-space"}>
        <div className={"s12 m8"}>
          <MoreNews></MoreNews>
        </div>
        <div className={"s12 m4"}>
          <Articles title={"Oportunidades"}></Articles>
          <div className={"space"}></div>
          <Articles title={"Top Estudantes"} />
          <div className={"space"}></div>
          <Articles title={"Eventos"} />
          <div className={"space"}></div>
        </div>
      </div>
    </main>
  );
}
