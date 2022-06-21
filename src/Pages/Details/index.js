import { useParams } from "react-router-dom";
import PokemonDetails from "../../Components/PokemonDetails";

const Details = () => {
  const { id } = useParams();

  return (
    <div>
      Pokemon: {id}
      <PokemonDetails />
    </div>
  );
};

export default Details;
