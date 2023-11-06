"use client";

import {useEffect, useState} from "react";
import {useLocale, useTranslations} from "next-intl";
import { Collapse } from "./Collapse";
import Link from "next/link";
import {Category} from "@/dtos/Category";
import {Ex} from "@/extension/ex";
import {getCategoryAll} from "@/source/category";

export const NavLinkDesktop = () => {

  const [categorys,setC] = useState<Category[]>()

  const  locale = useLocale()

  useEffect(() => {
    getCategoryAll(locale).then(value =>   {
      if(value){
        setC(value)
      }
    })
  }, [setC]);



  const t = useTranslations("NavLinkDesktopFooter");
  const [isOpen, setIsOpen] = useState(false);



  const categories = {
    STW: [
       "noticias" ,
      "servicos" ,
      "eventos" ,
     "trabalheconosco" ,
    ],
    ESTRANGEIRO: [
      { label: "Destinos", route: "destinations" },
      { label: "Universidades_PT", route: "pt-universities" },
      { label: "Academicos", route: "academics" },
      { label: "Cursos", route: "courses" },
      { label: "Estude", route: "study" },
      { label: "Bolsas", route: "becas" },
      { label: "Trabalhe", route: "work" },
    ],
    PROJETOS: [
      { label: "Programa_de_Integracao", route: "integration-program" },
      { label: "Universidades_pelo_Mundo", route: "world-universities" },
      { label: "Podcasts", route: "podcasts" },
      { label: "Top_Students", route: "top-students" },
    ],
    TOPICOS: [
      { label: "Oportunidades", route: "oportunities" },
      { label: "Tempo", route: "weather" },
      { label: "Mais_Noticias", route: "more-news" },
      { label: "Ciencia_e_Inovacao", route: "innovation" },
    ],
  };




  return (
    <div
      className="max"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Submenu */}
      <div>
        <div className={"grid left-align"}>


          {["STW"].map((value1, index) =>

              <div key={index}  className={"m3 no-padding"}>
                <h6 className="small bold">{value1}</h6>
                <Collapse isOpen={isOpen}>
                  {filter(categorys,categories.STW)?.map((value, index) =>  {
                    return (
                        <>
                          <Link
                              key={index}
                              href={`/category/${value.name_url}`}
                          >
                            <h6 className="small small-line">{value.name}</h6>
                          </Link>
                          <br/>
                        </>
                    )
                  })}
                  <div className="space"></div>
                </Collapse>
              </div>


          )}





         {/* {Object.entries(categories).map(([key, links]) => (
            <div key={key} className={"m3 no-padding"}>
              <h6 className="small bold">{t(key)}</h6>
              <Collapse isOpen={isOpen}>
                {links.map((link, index) => (
                  <>
                    <Link
                      key={`${key}-${index}`}
                      href={`/${key.toLowerCase()}/${link.route}`}
                    >
                      <h6 className="small small-line">{t(link.label)}</h6>
                    </Link>
                    <br />
                  </>
                ))}
                <div className="space"></div>
              </Collapse>
            </div>
          ))}*/}
        </div>
      </div>
    </div>
  );
};



function filter(ar : Category[]| null | undefined,fi:string[]) {





  if(ar){
     const new_ar =  ar.filter((value, index) =>  {

       if(fi.includes(value.name_url)){
         return true
       }else {
         return  false
       }


     }  )


    return new_ar
  }else {
    return  null
  }



}