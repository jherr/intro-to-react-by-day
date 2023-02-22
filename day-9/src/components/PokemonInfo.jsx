import React from "react";

const PokemonInfo = ({selectedPokemon})=>{
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