import Image from "next/image";
import { container, fontStyleTitle } from "./styles";

export const VertVideoCard = () => {
  return (
    <div className={"s12 m3"}>
      <article style={container} className="no-padding no-elevate">
        <Image
          style={container}
          className="responsive large"
          width={110}
          height={240}
          src="/Component_5.png"
          alt=""
        />
        <div className="absolute bottom left right padding bottom-shadow white-text">
          <div>
            <div className={"row center-align"}>
              <Image
                width={"110"}
                height={240}
                src={"/gridicons_play.svg"}
                alt={""}
              />
            </div>
            <div className={"row"}>
              <p style={fontStyleTitle} className="max">
                Lorem Ipsum é simplesmente um texto fictício da indústria de.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
