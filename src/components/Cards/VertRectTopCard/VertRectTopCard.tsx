import Image from "next/image";
import { MiniCardViews } from "../MiniCardViews/MiniCardViews";

export const VertRectTopCard = () => {
  return (
    <>
      <div className={"s12 m6"}>
        <article style={{ height: "734px" }} className="no-padding no-round">
          <Image
            style={{ height: "734px" }}
            className="responsive large"
            width={377}
            height={734}
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
      </div>
    </>
  );
};
