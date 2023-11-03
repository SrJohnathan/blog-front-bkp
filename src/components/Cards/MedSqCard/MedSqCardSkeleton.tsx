export default function MedSqCardSkeleton() {
  return (
    <div className={"s6 m4"}>
      <article className="no-padding transparent no-elevate">
        <div style={{height: "212px"}} className="responsive shine medium"></div>

        <div className="padding">
          <div>
            <div style={{height:"12pt"}} className={"max shine"}></div>
            <div className={"small-space"}></div>
            <div style={{height:"24pt"}} className={"max shine"}></div>
            <div className={"small-space"}></div>
            <div style={{height:"12pt"}} className={"max shine"}></div>
          </div>
        </div>
      </article>
    </div>
  );
}
