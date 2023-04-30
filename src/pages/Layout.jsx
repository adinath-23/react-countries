import { useState, useEffect } from "react";
import { defer, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";
import { getCountries } from "../api/api";
import { App as CapApp } from "@capacitor/app";

const Layout = () => {
	const [theme, setTheme] = useState(
		JSON.parse(localStorage.getItem("isDarkTheme")) || false
	);
	const fetchedData = useLoaderData();
	const navigate = useNavigate();

	const handleTheme = () => {
		setTheme((prev) => {
			localStorage.setItem("isDarkTheme", !prev);
			return !prev;
		});
	};

	const handleClick = () => {
		navigate("/");
	};

	useEffect(() => {
		CapApp.addListener("appUrlOpen", (event) => {
			const slug = event.url.split(".app").pop();
			if (slug) {
				navigate(slug);
			}
		});
	}, []);

	return (
		<div data-theme={theme ? "dark" : ""} className={styles.layout}>
			<header>
				<h1 onClick={handleClick}>Where in the world?</h1>
				<button onClick={handleTheme} className={styles.toggle}>
					{theme ? "Light Mode" : "Dark Mode"}
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
	return defer({ countries: getCountries() });
};
