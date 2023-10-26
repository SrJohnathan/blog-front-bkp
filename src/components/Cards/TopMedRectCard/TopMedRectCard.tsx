import Image from "next/image";
import { MiniCardViews } from "../MiniCardViews/MiniCardViews";
import Link from "next/link";

export const TopMedRectCard = () => {
  return (
    <>
      {/* <Link href={"/"}> */}
      <article className="no-padding small-round">
        <Image
          // style={{ height: "358px" }}
          className="responsive large"
          width={377}
          height={358}
          src="/Component_5.png"
          alt=""
        />
        <div className="absolute bottom left right padding bottom-shadow white-text">
          <h5 className="bottom-padding">What is Lorem Ipsum?</h5>

          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </span>

          <MiniCardViews />
        </div>
      </article>
      {/* </Link> */}
    </>
  );
};
