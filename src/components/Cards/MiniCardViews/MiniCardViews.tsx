import { fontSizeSmall } from "./styles";

export const MiniCardViews = () => {
  return (
    <nav style={fontSizeSmall}>
      <label>18.08.2023</label>
      <label>
        <i className={"small fill primary-icon"}>visibility</i>105
      </label>
      <label>Categoria</label>
    </nav>
  );
};
