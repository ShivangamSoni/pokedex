import { Link } from "react-router-dom";
import Tag from "../Tag";

import styles from "./styles.module.css";

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

        <ul className={styles.tags}>
          {types.map(({ type: { name } }, idx) => (
            <Tag key={idx}>{name}</Tag>
          ))}
        </ul>

        <Link to={`/${id}`}>See Details</Link>
      </div>
    </li>
  );
};

export default PokemonListCard;
