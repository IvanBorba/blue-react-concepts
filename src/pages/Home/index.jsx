import { useEffect, useState } from "react";
import Card from "../../components/Card";
import axios from "axios";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  // REQUISIÇÃO COM FETCH E ASYNC AWAIT
  // ----------------------------------
  // const fetchPokemons = async () => {
  //   const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  //   const pokemonsList = await response.json();
  //   setPokemons(pokemonsList.results);
  // };

  // REQUISIÇÃO COM FETCH E .THEN()
  // ----------------------------------
  // const fetchPokemons = () => {
  //   fetch("https://pokeapi.co/api/v2/pokemon/")
  //     .then((res) => res.json())
  //     .then((res) => setPokemons(res.results));
  // };

  // REQUISIÇÃO COM AXIOS E ASYNC AWAIT
  // ----------------------------------
  // const fetchPokemons = async () => {
  //   const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
  //   setPokemons(response.data.results);
  // };

  // REQUISIÇÃO COM AXIOS E .THEN()
  // ----------------------------------
  const fetchPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => setPokemons(res.data.results));
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {pokemons.map((element, index) => (
        <Card pokemon={element} key={index} />
      ))}
    </div>
  );
};

export default Home;
