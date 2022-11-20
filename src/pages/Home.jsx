import { Suspense, useEffect, useState } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";
import Countries from "../components/Home/Countires";
import Filter from "../components/Home/Filter";
import Search from "../components/Home/Search";
import styles from "./Home.module.css";

const Home = () => {
  const [region, setRegion] = useState("All");
  const [searchTerm, setSearchTerm] = useState(null);
  const data = useRouteLoaderData("root");

  const handleRegion = (region) => {
    setRegion(region);
  };

  const handleSearch = (searchString) => {
    setSearchTerm(searchString);
  };

  return (
    <main className={styles.home}>
      <div className={styles.homeHeader}>
        <Search searchCountry={handleSearch} />
        <Filter selectRegion={handleRegion} />
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={data.countries}>
          {(loadedData) => {
            return (
              <Countries
                countries={loadedData}
                region={region}
                searchTerm={searchTerm}
              />
            );
          }}
        </Await>
      </Suspense>
    </main>
  );
};

export default Home;
