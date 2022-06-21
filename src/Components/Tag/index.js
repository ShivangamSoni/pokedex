import styles from "./styles.module.css";

// Colors Corresponding to Pokemon Type
const PRIMARY_TAG_COLORS = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  grass: "#78C850",
  electric: "#F8D030",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dark: "#705848",
  dragon: "#7038F8",
  steel: "#B8B8D0",
  fairy: "#F0B6BC",
};

// Random Colors to use for Abilities & Moves
const SECONDARY_TAG_COLORS = [
  "#8338ec",
  "#3a86ff",
  "#fb5607",
  "#023e8a",
  "#ff006e",
  "#ee6c4d",
  "#231942",
  "#5e548e",
  "#76c893",
  "#168aad",
];

const getColor = (key) => {
  let color = PRIMARY_TAG_COLORS[key];

  if (!color) {
    const idx = Math.floor(Math.random() * SECONDARY_TAG_COLORS.length);
    color = SECONDARY_TAG_COLORS[idx];
  }

  return color;
};

const Tag = ({ children }) => {
  return (
    <li className={styles.tag} style={{ backgroundColor: getColor(children) }}>
      {children}
    </li>
  );
};

export default Tag;
