import Country from "./Country";
import styles from "./Countries.module.css";

const filterCountries = (region, countries) => {
  return countries.filter((country) => country.region === region);
};

const searchCountries = (searchTerm, countries) => {
  return countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

const Countries = ({ countries, region, searchTerm }) => {
  let sortedCountries = countries.sort((a, b) => {
    return a.name.common > b.name.common ? 1 : -1;
  });

  if (searchTerm) {
    sortedCountries = searchCountries(searchTerm, sortedCountries);
  }
  if (region !== "All") {
    sortedCountries = filterCountries(region, sortedCountries);
  }
  const countryList = sortedCountries.map((country) => (
    <Country
      key={country.id}
      id={country.id}
      image={country.img}
      name={country.name.common}
      flag={country.flag}
      population={country.population}
      region={country.region}
      capital={country.capital}
    />
  ));
  return <ul className={styles.countries}>{countryList}</ul>;
};

export default Countries;
