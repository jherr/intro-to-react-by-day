import React from "react";
import styled from "@emotion/styled";

import useStore from "../store";

const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  font-size: large;
`;

const PokemonFilter = () => {
  const filter = useStore((state) => state.filter);
  const setFilter = useStore((state) => state.setFilter);

  return (
    <Input
      type="text"
      value={filter}
      onChange={(evt) => setFilter(evt.target.value)}
    />
  );
};

export default PokemonFilter;
