import { container, title } from "./styles";

export const VertVideoCard = () => {
  return (
    <div className={"s12 m3"}>
      <article style={container} className="no-padding no-elevate">
        <img
          style={container}
          className="responsive large"
          src="/Component_5.png"
        />
        <div className="absolute bottom left right padding bottom-shadow white-text">
          <div>
            <div className={"row center-align"}>
              <img width={"110"} src={"/gridicons_play.svg"} alt={""} />
            </div>
            <div className={"row"}>
              <p style={title} className="max">
                Lorem Ipsum é simplesmente um texto fictício da indústria de.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
