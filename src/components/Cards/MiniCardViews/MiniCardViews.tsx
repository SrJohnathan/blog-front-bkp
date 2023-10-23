import { fontSizeSmall } from "./styles";

export const MiniCardViews = () => {
  return (
    <nav>
      <label style={fontSizeSmall}>18.08.2023</label>
      <label style={fontSizeSmall}>
        <i className={"small fill primary-icon"}>visibility</i>105
      </label>
      <label style={fontSizeSmall}>Categoria</label>
    </nav>
  );
};
