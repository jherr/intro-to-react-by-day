import { makeAutoObservable } from "mobx";

class Store {
  pokemon = require("../src/pokemon.json");
  filter = "";
  selectedPokemon = null;

  constructor() {
    makeAutoObservable(this);
  }

  setFilter(filter) {
    this.filter = filter;
  }
  setSelectedPokemon(selectedPokemon) {
    this.selectedPokemon = selectedPokemon;
  }
}

const store = new Store();

export default store;
