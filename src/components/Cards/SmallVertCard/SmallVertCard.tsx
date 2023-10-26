import Image from "next/image";
import Link from "next/link";
import { MiniCardViews } from "../MiniCardViews/MiniCardViews";

export const SmallVertCard = () => {
  return (
    <Link href={"/most-searched"} className={"s12 m3"}>
      <article className="no-padding transparent no-elevate">
        <Image
          className="responsive small "
          width={110}
          height={110}
          src="/Component_1.avif"
          alt={""}
        />
        <div className="padding">
          <h6 className="small bold">What is Lorem Ipsum?</h6>
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
