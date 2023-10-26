import { ReactNode } from "react";

interface Props {
  h?: string;
  w?: string;
  children: ReactNode;
  isPadding: boolean;
}

export const AbsoluteLayout = (props: Props) => {
  return (
    <div style={{ position: "relative", height: props.h || "300px" }}>
      <div
        className={props.isPadding ? "padding" : ""}
        style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
      >
        {props.children}
      </div>
    </div>
  );
};
