"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { MiniCardViews } from "../MiniCardViews/MiniCardViews";

export const ExtendedNews = () => {
  const t = useTranslations("Ver_Mais");

  return (
    <article className={"padding no-elevate background"}>
      <div className={"medium-divider"}></div>

      <Link href={"/categories"}>
        <article className="no-padding no-elevate">
          <div className="grid padding">
            <Image
              className="s12 m5 responsive"
              width={110}
              height={110}
              src="/Component_3.avif"
              alt={""}
            />
            <div className="s12 m7">
              <h5 className="small bold">What is Lorem Ipsum?</h5>
              <p className="medium-line">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Quae, esse.
                Doloribus, debitis dolore. Autem incidunt reiciendis nam rem
                tenetur aliquam laudantium nihil quisquam sapiente! Suscipit eos
                porro dolore natus, accusamus totam dolorum corporis odio sed?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                praesentium dolorem ullam amet tempore fugit aperiam possimus
                magnam vel laboriosam soluta placeat quaerat, asperiores, modi,
                consequatur sint culpa eius ab?
              </p>
              <MiniCardViews date={""} views={0} category={""} />
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
