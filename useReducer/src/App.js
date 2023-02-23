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

const pokemonReducer = (state,action)=>{
  switch(action.type){
    case 'SET_FILTER':
      return {
        ...state, 
        filter: action.payload,
      }
    case 'SET_POKEMON':
      return {
        ...state, 
        pokemon: action.payload,
    }
    case 'SET_SELECTED_POKEMON':
      return {
        ...state, 
        selectedPokemon: action.payload,
    }
    default:
      throw new Error("No action");
  }
};

function App() {
  const [state,dispatch] = React.useReducer(pokemonReducer,{
    pokemon:[],
     filter:"",
     selectedPokemon:null,
  });

  React.useEffect(() => {
    fetch("/starting-react/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => dispatch({
        type:'SET_POKEMON',
        payload: data,
      }));
  }, []);

  if (!state.pokemon) {
    return <div>Loading data</div>;
  }
// Contex Provider is going to provide the context to any Components that needs it 
// then set the value{{}} that we want to provide 
// you can have multiple context running at the same time
  return (
    <PokemonContex.Provider
      value={{
        state,
        dispatch,
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