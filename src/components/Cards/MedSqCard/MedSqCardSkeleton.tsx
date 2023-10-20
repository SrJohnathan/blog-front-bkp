import { container } from "./styles";

export default function MedSqCardSkeleton() {
  return (
    <div className={"s12 m4"}>
      <article className="no-padding transparent no-elevate">
        <div style={container} className="responsive shine small"></div>

        <div className="padding">
          <div>
            <div style={{ height: "12pt" }} className={"max shine"}></div>
            <div className={"small-space"}></div>
            <div style={{ height: "24pt" }} className={"max shine"}></div>
            <div className={"small-space"}></div>
            <div style={{ height: "12pt" }} className={"max shine"}></div>
          </div>
        </div>
      </article>
    </div>
  );
}
