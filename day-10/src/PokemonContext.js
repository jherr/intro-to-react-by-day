import React from "react";

const PokemonContext = React.createContext({
  pokemon: [],
  filter: "",
  selectedPokemon: null,
  pokemonSet: () => {},
  filterSet: () => {},
  selectedPokemonSet: () => {},
});

export default PokemonContext;
