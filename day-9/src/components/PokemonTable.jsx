import React from "react";
import PokemonRow from "./PokemonRow";

const PokemonTable = ({pokemon,filter,selectedPokemonSet}) =>(
    <table width="100%">
        <tbody>
        {pokemon
                .filter(({ name: { english } }) =>
                  english
                    .toLocaleLowerCase()
                    .includes(filter.toLocaleLowerCase())
                )
                .slice(0, 20)
                .map((pokemon) => (
                  <PokemonRow
                    pokemon={pokemon}
                    onClick={(pokemon) => selectedPokemonSet(pokemon)}
                  />
                ))}
        </tbody>
    </table>
)

export default PokemonTable;