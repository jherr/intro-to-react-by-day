import React from "react";
import styled from "@emotion/styled";
import { CssBaseline } from "@material-ui/core";
import { configureStore } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";

import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";

import "./App.css";

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

const stateReducer = (
  state = { pokemon: [], filter: "", selectedPokemon: null },
  { type, payload }
) => {
  switch (type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: payload,
      };
    case "SET_POKEMON":
      return {
        ...state,
        pokemon: payload,
      };
    case "SET_SELECTED_POKEMON":
      return {
        ...state,
        selectedPokemon: payload,
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: stateReducer,
});

function App() {
  const pokemon = useSelector((state ) => state.pokemon);
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetch("/starting-react/pokemon.json")
      .then((resp) => resp.json())
      .then((payload) =>
        dispatch({
          type: "SET_POKEMON",
          payload,
        })
      );
  }, [dispatch]);

  if (!pokemon) {
    return <div>Loading data</div>;
  }

  return (
    <PageContainer>
      <CssBaseline />
      <Title>Pokemon Search</Title>
      <TwoColumnLayout>
        <div>
          <PokemonFilter />
          <PokemonTable />
        </div>
        <PokemonInfo />
      </TwoColumnLayout>
    </PageContainer>
  );
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
