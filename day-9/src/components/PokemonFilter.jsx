import React, { useContext } from "react";
import styled from "@emotion/styled";
import PokemonContex from "../PokemonContex";
const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  font-size: large;
`;

const PokemonFilter = ()=>{
    const {filter, filterSet} = useContext(PokemonContex);
    return(<Input
        type="text"
        value={filter}
        onChange={(event)=>filterSet(event.target.value)}
    />);
}

export default PokemonFilter;