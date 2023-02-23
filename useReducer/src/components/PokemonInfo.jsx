import React, { useContext } from "react";
import PokemonContex from "../PokemonContex";

const PokemonInfo = ()=>{
    const {state:{selectedPokemon}} = useContext(PokemonContex);
   return selectedPokemon ? (
   <div>
        <h2>{selectedPokemon.name.english}</h2>
        <table>
            <tbody>
            {
                Object.keys(selectedPokemon.base).map((key)=>(
                    <tr key={key}>
                        <td>{key}</td>
                        <td></td>
                    </tr>
                ))
            }
            </tbody>
        </table>
   </div>
   ):null;
};

export default PokemonInfo;