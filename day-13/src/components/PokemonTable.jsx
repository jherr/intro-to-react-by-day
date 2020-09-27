import React from "react";

import PokemonRow from "./PokemonRow";
import useStore from "../store";

function PokemonTable() {
  const filter = useStore((state) => state.filter);
  const pokemon = useStore((state) => state.pokemon);
  const setSelectedPokemon = useStore((state) => state.setSelectedPokemon);

  return (
    <table width="100%">
      <tbody>
        {pokemon
          .filter(({ name: { english } }) =>
            english.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
          )
          .slice(0, 20)
          .map((pokemon) => (
            <PokemonRow
              pokemon={pokemon}
              onClick={(pokemon) => setSelectedPokemon(pokemon)}
            />
          ))}
      </tbody>
    </table>
  );
}

export default PokemonTable;
