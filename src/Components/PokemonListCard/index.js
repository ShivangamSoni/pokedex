import { Link } from "react-router-dom";

import styles from "./styles.module.css";

import TagList from "../TagList";

const PokemonListCard = ({ pokemon }) => {
  const {
    id,
    name,
    sprites: {
      other: {
        dream_world: { front_default },
      },
    },
    types,
  } = pokemon;

  return (
    <li className={styles.card}>
      <div className={styles.image}>
        <img src={front_default} alt={`${name}_front`} loading="lazy" />
      </div>

      <div className={styles.details}>
        <h3>{name}</h3>

        <TagList list={types.map(({ type: { name } }) => name)} />

        <Link to={`/${id}`}>See Details</Link>
      </div>
    </li>
  );
};

export default PokemonListCard;
