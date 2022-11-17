export const getCountries = async () => {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
            throw Response("Failed to fetch countries");
        }
        const responseData = await response.json();
        const filtered = responseData.map((country) => {
            return {
                id: country.cca3,
                name: country.name,
                region: country.region,
                flag: country.flags.svg,
                capital: country.capital,
                population: country.population.toLocaleString(),
                borders: country.borders,
                subregion: country.subregion,
                tld: country.tld,
                languages: country.languages,
                currencies: country.currencies
            };

        });
        return filtered;
    } catch (err) {
        console.log(err)
        return err
    }
};