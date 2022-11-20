import { Suspense } from "react";

import {
  Await,
  useNavigate,
  useRouteLoaderData,
  useParams,
} from "react-router-dom";

import Borders from "../components/Details/Borders";
import Info from "../components/Details/Info";
import styles from "./Details.module.css";

const Details = () => {
  const navigate = useNavigate();
  const params = useParams();
  const data = useRouteLoaderData("root");
  let borderList = [];

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <main className={styles.Details}>
      <div className={styles.header}>
        <button onClick={handleClick}>Go back</button>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={data.countries}>
          {(fetchedData) => {
            const currentCountry = fetchedData.find(
              (country) => country.id === params.country
            );
            if (currentCountry.borders) {
              borderList = fetchedData.filter((country) =>
                currentCountry.borders.includes(country.id)
              );
            }
            return (
              <>
                <section>
                  <div>
                    <img src={currentCountry.flag} alt="" />
                  </div>
                </section>
                <section>
                  <Info {...currentCountry} />
                  <Borders borders={borderList} />
                </section>
              </>
            );
          }}
        </Await>
      </Suspense>
    </main>
  );
};

export default Details;
