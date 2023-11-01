import Image from "next/image";
import { MiniCardViews } from "../MiniCardViews/MiniCardViews";
import Link from "next/link";

export const VertRectTopCard = () => {
  return (
    <div className={"s12 m6"}>
      <article className="no-padding small-round">
        <Image
          className="responsive extra large-height"
          width={377}
          height={734}
          src="/Component_5.png"
          alt=""
        />
        <div className="absolute bottom left right padding bottom-shadow white-text">
          <Link href={"/news/:id"}>
            <div>
              <h5>What is Lorem Ipsum?</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </Link>
          <MiniCardViews   category={""} views={0} date={""}   />
        </div>
      </article>
    </div>
  );
};
