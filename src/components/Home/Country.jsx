import styles from "./Country.module.css";
import { Link } from "react-router-dom";

const Country = (props) => {
  return (
    <li>
      <Link to={`/${props.id}`} className={styles.link}>
        <div className={styles.country}>
          <div className={styles.imageWrapper}>
            <img src={props.flag} alt={`flag of ${props.name}`} />
          </div>
          <div className={styles.detail}>
            <h2>{props.name}</h2>
            <div>
              <h3>Population:</h3>
              <p>{props.population}</p>
            </div>
            <div>
              <h3>Region:</h3>
              <p>{props.region}</p>
            </div>
            <div>
              <h3>Capital:</h3>
              <p>{props.capital}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Country;
