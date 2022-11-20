import infinit from "./loader.svg";
import styles from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={styles.loader}>
      <img src={infinit} alt="" />
    </div>
  );
};

export default Loader;
