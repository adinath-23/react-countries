import styles from "./Info.module.css";

const Info = (props) => {
  console.log(props);
  const languages = Object.values(props.languages);
  const nativeNames = Object.values(props.name.nativeName).map(
    (lang) => lang.common
  );
  const currencies = Object.values(props.currencies).map((curr) => curr.name);

  return (
    <div className={styles.info}>
      <h2>{props.name.common}</h2>
      <div>
        <h3>Native Names:</h3>
        <p>{nativeNames.join(", ")}</p>
      </div>
      <div>
        <h3>Population:</h3>
        <p>{props.population}</p>
      </div>
      <div>
        <h3>Region:</h3>
        <p>{props.region}</p>
      </div>
      <div>
        <h3>Sub Region:</h3>
        <p>{props.subregion}</p>
      </div>
      <div>
        <h3>Capital:</h3>
        <p>{props.capital}</p>
      </div>
      <div>
        <h3>Top Level Domain:</h3>
        <p>{props.tld ? props.tld.join(", ") : "None"}</p>
      </div>
      <div>
        <h3>Currencies:</h3>
        <p>{props.currencies && currencies.join(", ")}</p>
      </div>
      <div>
        <h3>Languages:</h3>
        <p>{languages.join(", ")}</p>
      </div>
    </div>
  );
};

export default Info;
