import { small } from "./styles";

export const MiniCardViews = () => {
  return (
    <nav>
      <label style={small}>18.08.2023</label>
      <label style={small}>
        <i className={"small fill primary-icon"}>visibility</i>105
      </label>
      <label style={small}>Categoria</label>
    </nav>
  );
};
