"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { MiniCardViews } from "../MiniCardViews/MiniCardViews";
import {FallbackImage} from "@/components/Cards/MedSqCard/FallbackImage";
import {GetNews} from "@/dtos/News";

export const ExtendedNews = ({ value }: { value: GetNews }) => {
  const t = useTranslations("Ver_Mais");

  return (
    <article className={"padding no-elevate background"}>
      <div className={"medium-divider"}></div>

      <Link href={`/news/${value.id}`}>
        <article className="no-padding no-elevate">
          <div className="grid padding">
            <FallbackImage
              className="s12 m5 responsive"
              width={110}
              height={110}
              src={"/api/files/"+value.img}
              alt={""}
            />
            <div className="s12 m7">
              <h5 className="small bold">{value.titulo}</h5>
              <p className="medium-line">
                  {value.description}
              </p>
                <MiniCardViews
                    views={value.total_views || 0}
                    category={value.name_category || ""}
                    date={value.data_criacao}
                />
            </div>
          </div>
        </article>
      </Link>

      <div className={"small-space"}></div>

      <Link href={"/articles"} className={"primary-title margin"}>
        {t("Ver_Mais")} <i>expand_more</i>
      </Link>
      <div className="medium-divider"></div>
    </article>
  );
};
