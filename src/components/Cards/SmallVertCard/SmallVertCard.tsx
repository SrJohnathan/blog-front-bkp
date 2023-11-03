import Image from "next/image";
import Link from "next/link";
import { MiniCardViews } from "../MiniCardViews/MiniCardViews";

export const SmallVertCard = () => {
  return (
    <Link href={"/most-searched"} className={"s6 m3"}>
      <article className="no-padding transparent no-elevate">
        <Image
          className="responsive small "
          width={110}
          height={110}
          src="/Component_1.avif"
          alt={""}
        />
        <div className="small-space"></div>
        <div>
          <h6 className="small bold left-align">What is Lorem Ipsum?</h6>
          <p className="small-line left-align">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <MiniCardViews date={""} views={0} category={""} />

          <div className="medium-space"></div>
        </div>
      </article>
    </Link>
  );
};
