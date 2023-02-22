import React, { useContext } from "react";
import PokemonRow from "./PokemonRow";
import PokemonContex from "../PokemonContex";

const PokemonTable = () =>{
    const {filter, pokemon, selectedPokemonSet} = useContext(PokemonContex);
    return (
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
    );
}
    


export default PokemonTable;