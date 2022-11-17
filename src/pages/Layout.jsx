import { useState } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";
import { getCountries } from "../api/api";

const Layout = () => {
  const [theme, setTheme] = useState(false);
  const fetchedData = useLoaderData();
  const navigate = useNavigate();

  const handleTheme = () => {
    setTheme((prev) => !prev);
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div id="app" data-theme={theme ? "dark" : ""} className={styles.header}>
      <header>
        <h1 onClick={handleClick}>Rest Countries</h1>
        <button onClick={handleTheme} className={styles.toggle}>
          {theme ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <Outlet context={[fetchedData]} />
      <footer>
        <p>
          Made by{" "}
          <a href="https://github.com/adinath-23" target="_blank">
            Adinath
          </a>
        </p>
      </footer>
    </div>
  );
};
export default Layout;

export const loader = () => {
  return getCountries();
};
