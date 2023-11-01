import Image from "next/image";
import { MiniCardViews } from "../MiniCardViews/MiniCardViews";
import Link from "next/link";

export const TopMedRectCard = () => {
  return (
    <div className="padding">
      <article className="no-padding small-round">
        <Image
          className="responsive large"
          width={377}
          height={358}
          src="/Component_5.png"
          alt=""
        />
        <div className="absolute bottom left right padding bottom-shadow white-text">
          <Link href={"/news/:id"}>
            <div>
              <h5 className="bottom-padding">What is Lorem Ipsum?</h5>
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
