import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Countries from "../components/Home/Countires";
import Filter from "../components/Home/Filter";
import Search from "../components/Home/Search";
import styles from "./Home.module.css";

const Home = () => {
  const [region, setRegion] = useState("All");
  const [searchTerm, setSearchTerm] = useState(null);
  const [fetchedData] = useOutletContext();
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
      <Countries
        countries={fetchedData}
        region={region}
        searchTerm={searchTerm}
      />
    </main>
  );
};

export default Home;
