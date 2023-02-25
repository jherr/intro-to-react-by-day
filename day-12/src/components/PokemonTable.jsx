import React from "react";
import { useSelector, useDispatch } from "react-redux";

import PokemonRow from "./PokemonRow";

function PokemonTable() {
  const { filter, pokemon } = useSelector(({ filter, pokemon }) => ({
    filter,
    pokemon,
  }));
  const dispatch = useDispatch();

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
              onClick={(pokemon) =>
                dispatch({
                  type: "SET_SELECTED_POKEMON",
                  payload: pokemon,
                })
              }
            />
          ))}
      </tbody>
    </table>
  );
}

export default PokemonTable;