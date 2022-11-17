import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import Borders from "../components/Details/Borders";
import Info from "../components/Details/Info";
import styles from "./Details.module.css";

const Details = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [fetchedData] = useOutletContext();
  const currentCountry = fetchedData.find(
    (country) => country.id === params.country
  );
  let borderList = [];
  if (currentCountry.borders) {
    borderList = fetchedData.filter((country) =>
      currentCountry.borders.includes(country.id)
    );
  }

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <main className={styles.Details}>
      <div className={styles.header}>
        <button onClick={handleClick}>Go back</button>
      </div>
      <section>
        <div>
          <img src={currentCountry.flag} alt="" />
        </div>
      </section>
      <section>
        <Info {...currentCountry} />
        <Borders borders={borderList} />
      </section>
    </main>
  );
};

export default Details;
