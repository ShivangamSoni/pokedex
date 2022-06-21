import { useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../../Redux/Listing.slice";

import { useNavigate } from "react-router-dom";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styles from "./styles.module.css";

import PokemonListCard from "../../Components/PokemonListCard";

const Listing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    loading,
    error,
    list: { previous, next, results },
  } = useSelector((state) => {
    return state.listing;
  });

  const listRef = useRef(null);

  const changePage = (pageLink) => dispatch(fetchPokemons(pageLink));

  const nextPage = (e) => {
    if (e.target.disabled) {
      return;
    }
    changePage(next);
  };

  const prevPage = (e) => {
    if (e.target.disabled) {
      return;
    }
    changePage(previous);
  };

  useEffect(() => {
    dispatch(fetchPokemons("https://pokeapi.co/api/v2/pokemon/"));
  }, [dispatch]);

  useEffect(() => {
    listRef.current.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [results]);

  if (error) {
    navigate("/404");
    return null;
  }

  return (
    <div className={styles.container}>
      <ol className={styles.list} ref={listRef}>
        {loading ? (
          <>
            {[...Array(10).keys()].map((i) => (
              <Skeleton key={i} height="100%" />
            ))}
          </>
        ) : (
          results &&
          results.map((pokemon) => (
            <PokemonListCard key={pokemon.id} pokemon={pokemon} />
          ))
        )}
      </ol>

      <div className={styles.pagination}>
        <button className={styles.btn} onClick={prevPage} disabled={!previous}>
          Previous
        </button>

        <button className={styles.btn} onClick={nextPage} disabled={!next}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Listing;
