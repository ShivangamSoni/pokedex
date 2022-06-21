import { useState } from "react";

import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

const SearchBar = () => {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchTerm = searchText
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .split(" ")
      .filter((s) => s)
      .join("-");
    navigate(`/${searchTerm}`);
    setSearchText("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formControl}>
        <input
          type="search"
          name="search"
          placeholder="Name or Pokédex Number"
          value={searchText}
          onChange={handleChange}
          required
        />
        <label>Name or Pokédex Number</label>
      </div>
    </form>
  );
};

export default SearchBar;
