"use client";

import {useLocale, useTranslations} from "next-intl";
import { divider } from "@/styles/styles";
import { RectVideoCard } from "@/components/Cards/RectVideoCard/RectVideoCard";
import { MostViewedNewsCard } from "@/components/Cards/MostViewedNewsCard/MostViewedNewsCard";
import { ExtendedNews } from "@/components/Cards/ExtendedNews/ExtendedNews";
import {useEffect, useState} from "react";
import {Category} from "@/dtos/Category";
import {getCategory, getCategoryNameUrl} from "@/source/category";
import {Ex} from "@/extension/ex";
import {GetNews} from "@/dtos/News";

const CategoryPage = ({ params }: { params: { name_url: string } }) => {

  const [news, setNews] = useState<GetNews[]>([]);
  const [newsRead, setNewsRead] = useState<GetNews[]>([]);

  const [category, setCategory] = useState<Category | null>();
  const locale = useLocale();

  const t = useTranslations("FullNews");
  const shouldRenderMostViewedNewsCard = params.name_url !== "all";


  const [limit,setLimit] = useState(9)
  const [init,setInit] = useState(0)


  useEffect(() => {
    const fetchData = async () => {

      try {
        if(params.name_url !== "all" ){
          const  new_category = await getCategoryNameUrl(params.name_url,locale)



          setCategory( new_category );

          if(new_category) {
            const response = await Ex.apiClient().get(
                `/api/${locale}/post/list/${init}/${limit}/desc/${new_category.id}`
            );




            setNews(response.data);
            setNewsRead(   ( await Ex.apiClient().get(`/api/${locale}/post/views/6/${  shouldRenderMostViewedNewsCard ?  new_category.id  : "all" }`)).data )

          }
        }else {
          const response = await Ex.apiClient().get(
              `/api/${locale}/post/list/${init}/${limit}/desc/all`
          );
          setNews(response.data);
          setNewsRead(   ( await Ex.apiClient().get(`/api/${locale}/post/views/6/all`)).data )

        }







      } catch (error) {
        console.error("Falha ao buscar notícias", error);
      }
    };

    fetchData().then();
  }, [locale,init,limit]);


  const setNext = () => {
    setLimit(prevState =>  prevState + 10)
    setInit(prevState =>   prevState + 10)


  }

  const setPrev = () => {

    if(init >= 10 ){
      setLimit(prevState =>  prevState - 10)
      setInit(prevState =>   prevState - 10)

    } else {

    }


  }

  return (
    <div className="grid responsive s m l">
      <div className="s1 m1"></div>
      <div className="s10 m10">
        <div className={"grid"}>
          <div className={"s12 m12"}>
            <div className="large-space"></div>
            <div className="row">
              <h4 className={"small bold primary-title"}>{  category ?    category?.name  : "Mais Notícias" }</h4>
              <div className={"primary-title-container"} style={divider}></div>
            </div>
          </div>
          <div className={"s12 m12 no-elevate transparent large-padding"}>

            {news.length > 0  &&  news.map((value, index) =>
                <ExtendedNews  value={value} key={index} />
            )}
          </div>
        </div>

        <button onClick={setPrev}>Prev</button> <button onClick={setNext}>next</button>

        <div className="large-space"></div>

        <div className="row">
          <h4 className={"small bold primary-title"}>
            {t("Videos_Relacionados")}
          </h4>
          <div className={"primary-title-container"} style={divider}></div>
        </div>
        {shouldRenderMostViewedNewsCard && (
        <div className={"grid medium-space"}>
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <RectVideoCard key={index} />
            ))}
        </div>
        )}
        <div className="large-space"></div>


        {newsRead.length > 0 && (
          <>
            <div className="row">
              <h4 className={"small bold primary-title"}>{t("Mais_Vistas")}</h4>
              <div className={"primary-title-container"} style={divider}></div>
            </div>
            <div className="space"></div>
            <div className={"grid center medium-space"}>

              { newsRead.map((value, index) =>
                  <MostViewedNewsCard value={value} key={index} />
              )}



            </div>
          </>
        ) }
        <div className="large-space"></div>
      </div>

      <div></div>
    </div>
  );
};

export default CategoryPage;
