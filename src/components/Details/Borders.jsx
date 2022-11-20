import { Link } from "react-router-dom";
import styles from "./Borders.module.css";
const Borders = ({ borders }) => {
  const list = borders.map((country) => (
    <Link to={`/${country.id}`} key={country.id}>
      {country.name.common}
    </Link>
  ));
  let content = <p>No Borders</p>;

  if (borders.length !== 0) {
    content = <ul>{list}</ul>;
  }
  return (
    <div className={styles.borders}>
      <h2>Borders: </h2>
      {content}
    </div>
  );
};
export default Borders;
