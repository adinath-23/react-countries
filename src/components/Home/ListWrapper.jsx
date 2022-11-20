import { useEffect, useState } from "react";
import Country from "./Country";
import styles from "./Countries.module.css";
import InfiniteScroll from "react-infinite-scroll-component";

const amount = 12;
const ListWrapper = ({ filteredCountries }) => {
  const [renderList, setRenderList] = useState(
    filteredCountries.slice(0, amount)
  );
  const [hasMore, setHasMore] = useState(filteredCountries.length <= amount);
  const fetchMore = () => {
    console.log("fetching");
    setHasMore(filteredCountries.length - renderList.length >= amount);
    setRenderList((pre) => filteredCountries.slice(0, pre.length + amount));
  };

  useEffect(() => {
    setHasMore(filteredCountries.length - renderList.length >= amount);
    setRenderList(filteredCountries.slice(0, amount));
  }, [filteredCountries]);
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
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      <ul className={styles.countries}>{countryList}</ul>
    </InfiniteScroll>
  );
};

export default ListWrapper;
