import { useParams } from "react-router-dom";

const PokemonProfile = () => {
  const { pokemon } = useParams();

  return (
    <div>
      <h1>{pokemon}</h1>
    </div>
  );
};

export default PokemonProfile;
