import moment from "moment";

export const MiniCardViews = ({
  views,
  category,
  date,
}: {
  date: string;
  views: number;
  category: string;
}) => {
  return (
    <nav className={"responsive space wrap"}>
      <small>{moment(date).format("DD.MM.yyyy")}</small>
      <small>
        <i className={"fill primary-icon"}>visibility</i>
        {" " + views}
      </small>
      <small>{category}</small>
    </nav>
  );
};
