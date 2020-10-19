import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

import PokemonType from "../src/pokemonType";

const PokemonRow = ({ pokemon, onClick }) => (
  <>
    <tr key={pokemon.id}>
      <td>
        <Link href={`/pokemon/${pokemon.id}`}>
          <a>{pokemon.name.english}</a>
        </Link>
      </td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onClick(pokemon)}
        >
          More Information
        </Button>
      </td>
    </tr>
  </>
);

PokemonRow.propTypes = {
  pokemon: PokemonType,
};

export default PokemonRow;
