import Image from "next/image";
import Link from "next/link";
import { description, title } from "./styles";
import { MiniCardViews } from "../MiniCardViews/MiniCardViews";

export const MedSqCard = () => {
  return (
    <Link href={"/more-news"} className={"s12 m4"}>
      <article className="no-padding transparent no-elevate">
        <Image
          className="responsive small"
          width={324}
          height={212}
          src="/Component_5.png"
          alt=""
        />
        <div className="padding">
          <div>
            <p className={"primary-title"} style={title}>
              What is Lorem Ipsum?
            </p>
            <label style={description} className="max primary-title ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </label>
            <MiniCardViews />
          </div>
        </div>
      </article>
      <article className="transparent"></article>
    </Link>
  );
};
