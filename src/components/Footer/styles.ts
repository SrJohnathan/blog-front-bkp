import { CSSProperties } from "react";

export const boxRow: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

export const boxColunm: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export const boxColunmAlt: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
};

export const marginContainer: CSSProperties = {
  padding: "100px 100px  0  100px ",
  display: "flex",
  flexDirection: "row",
  alignItems: "end",
  justifyContent: "space-between",
  width: "100%",
};

export const marginContainerAlt: CSSProperties = {
  padding: "0 100px  100px  100px",
  display: "flex",
  flexDirection: "row",
  alignItems: "end",
  justifyContent: "space-between",
  width: "100%",
};
