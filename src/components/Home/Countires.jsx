import { useEffect, useState } from "react";
import ListWrapper from "./ListWrapper";

const Countries = ({ countries, region, searchTerm }) => {
  const sortedCountries = countries.sort((a, b) => {
    return a.name.common > b.name.common ? 1 : -1;
  });
  const [filteredCountries, setFiltered] = useState(sortedCountries);

  useEffect(() => {
    if (region !== "All") {
      setFiltered(
        sortedCountries.filter((country) => country.region === region)
      );
    } else {
      setFiltered(sortedCountries);
    }
    if (searchTerm) {
      setFiltered((pre) =>
        pre.filter((country) =>
          country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, region]);

  return (
    <>
      <ListWrapper filteredCountries={filteredCountries} />
    </>
  );
};

export default Countries;
