import create from "zustand";

const useStore = create((set) => ({
  pokemon: [],
  filter: "",
  selectedPokemon: null,
  setPokemon: (pokemon) => set((state) => ({ ...state, pokemon })),
  setFilter: (filter) => set((state) => ({ ...state, filter })),
  setSelectedPokemon: (selectedPokemon) =>
    set((state) => ({ ...state, selectedPokemon })),
}));

fetch("/starting-react/pokemon.json")
  .then((resp) => resp.json())
  .then((pokemon) => useStore.setState((state) => ({ ...state, pokemon })));

export default useStore;
