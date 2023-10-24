import Image from "next/image";
import { MiniCardViews } from "../MiniCardViews/MiniCardViews";

export const TopMedRectCard = () => {
  return (
    <>
      <article style={{ height: "358px" }} className="no-padding no-round ">
        <Image
          style={{ height: "358px" }}
          className="responsive small"
          width={879}
          height={358}
          src="/Component_5.png"
          alt=""
        />
        <div className="absolute bottom left right padding bottom-shadow white-text">
          <nav>
            <div>
              <h5>What is Lorem Ipsum?</h5>
              <label className="max">
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </span>
              </label>
              <MiniCardViews />
            </div>
          </nav>
        </div>
      </article>
    </>
  );
};
