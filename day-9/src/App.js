import React from "react";
import styled from "@emotion/styled";
import { CssBaseline } from "@material-ui/core";
import PokemonType from "./pokemonType";
import "./App.css";
import PokemonFilter from "./components/PokemonFilter";
import PokemonInfo from "./components/PokemonInfo";
import PokemonTable from "./components/PokemonTable";
import PokemonContex from "./PokemonContex";

PokemonInfo.propTypes = PokemonType;

const Title = styled.h1`
  text-align: center;
`;
const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1em;
`;
const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 1rem;
`;


function App() {
  const [filter, filterSet] = React.useState("");
  const [pokemon, pokemonSet] = React.useState(null);
  const [selectedPokemon, selectedPokemonSet] = React.useState(null);

  React.useEffect(() => {
    fetch("/starting-react/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => pokemonSet(data));
  }, []);

  if (!pokemon) {
    return <div>Loading data</div>;
  }
// Contex Provider is going to provide the context to any Components that needs it 
// then set the value{{}} that we want to provide 
// you can have multiple context running at the same time
  return (
    <PokemonContex.Provider
      value={{
        filter,
        pokemon,
        filterSet,
        selectedPokemon,
        selectedPokemonSet
      }}
    >
      <PageContainer>
        <CssBaseline />
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter />
            <PokemonTable 
            />
          </div>
          <PokemonInfo  />
        </TwoColumnLayout>
      </PageContainer>
    </PokemonContex.Provider>

  );
}

export default App;