import styles from "./Info.module.css";

const Info = (props) => {
  console.log(props);
  const languages = props.languages?Object.values(props.languages):['None'];
  const nativeNames = props.nativeName?Object.values(props.name.nativeName).map(
    (lang) => lang.common
  ):['None'];
  const currencies = props.currencies?Object.values(props.currencies).map((curr) => curr.name):['None'];

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
        <p>{props.region || 'None'}</p>
      </div>
      <div>
        <h3>Sub Region:</h3>
        <p>{props.subregion || "None"}</p>
      </div>
      <div>
        <h3>Capital:</h3>
        <p>{props.capital?props.capital:'None'}</p>
      </div>
      <div>
        <h3>Top Level Domain:</h3>
        <p>{props.tld ? props.tld.join(", ") : "None"}</p>
      </div>
      <div>
        <h3>Currencies:</h3>
        <p>{currencies.join(", ")}</p>
      </div>
      <div>
        <h3>Languages:</h3>
        <p>{languages.join(", ")}</p>
      </div>
    </div>
  );
};

export default Info;
