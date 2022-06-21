import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "../../Redux/Active.slice";

import { useParams, useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

import PokemonDetails from "../../Components/PokemonDetails";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { loading, error, details } = useSelector((state) => state.active);
  console.log(details);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemon(id));
  }, [dispatch, id]);

  if (error) {
    navigate("/404");
  }

  if (loading) {
    <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      {details && (
        <>
          <div className={styles.title}>
            <h2>
              {details.name.replace("-", " ")}
              &nbsp;
              <span title={`Pokédex Index ${details.id}`}>#{details.id}</span>
            </h2>
          </div>

          <div className={styles.content}>
            <div className={styles.image}>
              <img
                src={details.sprites.other.dream_world.front_default}
                alt={details.name}
              />
            </div>

            <PokemonDetails details={details} />
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
