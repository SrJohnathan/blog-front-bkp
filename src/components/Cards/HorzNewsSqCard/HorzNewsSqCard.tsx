import Image from "next/image";
import { MiniCardViews } from "../MiniCardViews/MiniCardViews";

export const HorzNewsSqCard = () => {
  return (
    <div>
      <div className="grid ">
        <div className="s12 m6">
          <Image
            className="responsive"
            width={201}
            height={191}
            src="/Component_3.avif"
            alt={""}
          />
        </div>
        <div className="s12 m6">
          <div>
            <p className={"primary-title"}>
              <strong>What is Lorem Ipsum?</strong>
            </p>
            <label className={"primary-description"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </label>
            <MiniCardViews />
          </div>
        </div>
      </div>

      <div className={"small-space"}></div>
      <div
        style={{ backgroundColor: "#ddd", height: "1px" }}
        className={"max"}
      ></div>
      <div className={"small-space"}></div>
    </div>
  );
};
