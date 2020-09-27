import React from "react";

const PokemonContext = React.createContext({
  state: {},
  dispatch: () => {},
});

export default PokemonContext;
