import { useState } from "react";
import styles from "./Filter.module.css";

const AltFilter = (props) => {
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [selectedRegion, setRegion] = useState("All");
  const [isDropdown, setIsDropdown] = useState(false);

  const handleButtonClick = () => {
    setIsDropdown((prevState) => !prevState);
  };

  const handleSelectionClick = (event) => {
    setRegion(event.target.id);
    props.selectRegion(event.target.id);
    setIsDropdown((prevState) => !prevState);
  };

  const options = regions.map((region) => (
    <li
      id={region}
      key={region}
      className={styles.options}
      onClick={handleSelectionClick}
    >
      {region}
    </li>
  ));

  const dropDownStyle = `${styles.dropdown} ${!isDropdown && styles.visible}`;
  return (
    <div className={styles.filter}>
      <button
        onClick={handleButtonClick}
        className={`${styles.filter} ${isDropdown ? styles.rotate : ""}`}
      >
        {selectedRegion === "All" ? "Filter by region" : selectedRegion}
      </button>
      <ul className={dropDownStyle}>{options}</ul>
    </div>
  );
};

export default AltFilter;
