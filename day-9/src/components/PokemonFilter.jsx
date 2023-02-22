import React from "react";
import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  font-size: large;
`;

const PokemonFilter = ({filter, filterSet})=>{
    return(<Input
        type="text"
        value={filter}
        onChange={(event)=>filterSet(event.target.value)}
    />);
}

export default PokemonFilter;