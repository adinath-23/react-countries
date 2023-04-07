import { useRef } from "react";
import styles from "./Search.module.css";

const Search = ({ searchCountry }) => {
	const searchRef = useRef();
	const changeHandler = () => {
		searchCountry(searchRef.current.value);
	};
	return (
		<div
			className={styles.search}
			onClick={() => {
				searchRef.current.focus();
			}}
		>
			<label htmlFor="search" hidden>
				Search
			</label>
			<input
				type="text"
				id="search"
				onChange={changeHandler}
				ref={searchRef}
				placeholder="Search for a country..."
			/>
		</div>
	);
};

export default Search;
