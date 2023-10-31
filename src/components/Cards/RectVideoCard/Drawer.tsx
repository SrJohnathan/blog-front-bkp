import React, { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  open: boolean;
  close: () => void;
  style?: CSSProperties | undefined;
  className?: string | undefined;
}

const Drawer = (props: Props) => {
  return (
    <>
      <div
        onClick={props.close}
        className={"overlay " + (props.open ? " active" : "")}
      ></div>
      <dialog
        style={props.style}
        open={props.open}
        className={" dialog " + props.className}
      >
        <button
          onClick={props.close}
          className="circle right absolute transparent"
        >
          <i>close</i>
        </button>
        {props.children}
      </dialog>
    </>
  );
};

export default Drawer;
