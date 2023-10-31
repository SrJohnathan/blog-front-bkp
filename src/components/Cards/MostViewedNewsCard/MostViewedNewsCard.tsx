import Image from "next/image";
import Link from "next/link";
import { MiniCardViews } from "../MiniCardViews/MiniCardViews";

export const MostViewedNewsCard = () => {
  return (
    <div className="s6 m2 responsive">
      <Link href={"/most-viewed"}>
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
            <MiniCardViews date={""} views={0} category={""} />
          </div>
        </article>
      </Link>
    </div>
  );
};
