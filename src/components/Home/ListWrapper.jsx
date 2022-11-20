import { useEffect, useState } from "react";
import Country from "./Country";
import styles from "./Countries.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../utils/Loader";

const amount = 12;
const ListWrapper = ({ filteredCountries }) => {
  const [renderList, setRenderList] = useState(
    filteredCountries.slice(0, amount)
  );

  const fetchMore = () => {
    setRenderList((pre) => filteredCountries.slice(0, pre.length + amount));
  };

  useEffect(() => {
    setRenderList(filteredCountries.slice(0, amount));
  }, [filteredCountries]);

  if (filteredCountries.length === 0) {
    return <p>No results found</p>;
  }
  const countryList = renderList.map((country) => (
    <Country
      key={country.id}
      id={country.id}
      name={country.name.common}
      flag={country.flag}
      population={country.population}
      region={country.region}
      capital={country.capital}
    />
  ));
  return (
    <InfiniteScroll
      dataLength={countryList.length}
      next={fetchMore}
      hasMore={countryList.length !== filteredCountries.length}
      loader={<Loader />}
    >
      <ul className={styles.countries}>{countryList}</ul>
    </InfiniteScroll>
  );
};

export default ListWrapper;
