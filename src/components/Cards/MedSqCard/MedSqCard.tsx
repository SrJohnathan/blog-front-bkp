import Image from "next/image";
import Link from "next/link";
import { MiniCardViews } from "../MiniCardViews/MiniCardViews";

export const MedSqCard = () => {
  return (
    <Link href={"/more-news"} className={"s6 m4"}>
      <article className="no-padding transparent no-elevate">
        <Image
          className="responsive medium"
          width={"200"}
          height={"200"}
          src="/Component_2.avif"
          alt=""
        />
        <div className="padding">
          <h6>
            <strong>What is Lorem Ipsum?</strong>
          </h6>
          <p className="small-line">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <MiniCardViews />
        </div>
      </article>
    </Link>
  );
};
