import styles from "./styles.module.css";

import TagList from "../TagList";

const PokemonDetails = ({
  details: {
    height,
    weight,
    base_experience,
    abilities,
    types,
    moves,
    is_default,
  },
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.common}>
          <div className={styles.details}>
            <h3>Height</h3>
            <span>{height / 10} m</span>
          </div>

          <div className={styles.details}>
            <h3>Weight</h3>
            <span>{weight / 10} KG</span>
          </div>

          <div className={styles.details}>
            <h3>Base Experience</h3>
            <span>{base_experience}</span>
          </div>

          <div className={styles.details}>
            <h3>Default</h3>
            <span>{is_default ? "Yes" : "No"}</span>
          </div>
        </div>

        <div className={styles.details}>
          <h3>Type</h3>
          <TagList list={types.map(({ type: { name } }) => name)} />
        </div>

        <div className={styles.details}>
          <h3>Abilities</h3>
          <TagList list={abilities.map(({ ability: { name } }) => name)} />
        </div>
      </div>

      <div className={`${styles.details} ${styles.moves}`}>
        <h3>Moves</h3>
        <TagList list={moves.map(({ move: { name } }) => name)} />
      </div>
    </>
  );
};

export default PokemonDetails;
