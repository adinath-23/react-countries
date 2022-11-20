import { useEffect, useState } from "react";
import ListWrapper from "./ListWrapper";

const Countries = ({ countries, region, searchTerm }) => {
  const [filteredCountries, setFiltered] = useState(
    countries.sort((a, b) => {
      return a.name.common > b.name.common ? 1 : -1;
    })
  );
  console.log(filteredCountries.length);
  useEffect(() => {
    if (searchTerm) {
      setFiltered(
        countries.filter((country) =>
          country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm]);
  useEffect(() => {
    if (region !== "All") {
      setFiltered(countries.filter((country) => country.region === region));
    }
  }, [region]);

  return (
    <>
      <ListWrapper filteredCountries={filteredCountries} />
    </>
  );
};

export default Countries;
