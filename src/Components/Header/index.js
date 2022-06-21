import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        <h1>Pokédex</h1>
      </Link>

      <SearchBar />
    </header>
  );
};

export default Header;
