import Image from "next/image";
import { MiniCardViews } from "../MiniCardViews/MiniCardViews";
import Link from "next/link";

export const HorzNewsSqCard = ({ article }) => {
  console.log(article);

  return (
    <>
      <Link href={"/categories"}>
        <article className="no-padding transparent no-elevate">
          <div className="grid no-space">
            <div className="s6">
              <Image
                className="responsive"
                width={110}
                height={110}
                src="/Component_3.avif"
                alt={""}
              />
            </div>
            <div className="padding s6">
              <h6 className="small bold">{article.titulo}</h6>
              <p className="tiny-line">{article.conteudo}</p>
              <MiniCardViews date={""} views={0} category={""} />
            </div>
          </div>
          <div className="medium-divider"></div>
        </article>
      </Link>

      <div className={"small-space"}></div>
    </>
  );
};
