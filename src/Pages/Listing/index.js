import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../../Redux/Listing.slice";

import { useNavigate } from "react-router-dom";

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

  useEffect(() => {
    dispatch(fetchPokemons("https://pokeapi.co/api/v2/pokemon/"));
  }, [dispatch]);

  if (error) {
    navigate("/404");
  }

  if (loading) {
    <p>Loading...</p>;
  }

  return (
    <div>
      <ol>
        {results &&
          results.map((pokemon) => (
            <PokemonListCard key={pokemon.id} pokemon={pokemon} />
          ))}
      </ol>

      <div>
        <button onClick={() => dispatch(fetchPokemons(next))}>Next</button>
        <button onClick={() => dispatch(fetchPokemons(previous))}>
          Previous
        </button>
      </div>
    </div>
  );
};

export default Listing;
