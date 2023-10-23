import Image from "next/image";
import { fontSizeSmall, container } from "./styles";

export const SmallVertCard = () => {
  return (
    <div className={"s12 m3"}>
      <article className="no-padding transparent no-elevate">
        <Image
          style={container}
          className="responsive small "
          width={248}
          height={238}
          src="/Component_5.png"
          alt={""}
        />
        <div className="padding">
          <div>
            <p className={"primary-title"}>
              <strong>What is Lorem Ipsum?</strong>
            </p>
            <label className="max primary-description ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </label>
            <nav>
              <label style={fontSizeSmall}>18.08.2023</label>
              <label style={fontSizeSmall}>
                <i className={"small fill primary-icon"}>visibility</i>105
              </label>
              <label style={fontSizeSmall}>Categoria</label>
            </nav>
          </div>
        </div>
      </article>
    </div>
  );
};
