import { types } from "mobx-state-tree";
import { observable } from "mobx";

const PokemonAttribute = types.model("PokemonAttribute", {
  attribute: types.string,
  value: types.string,
});

const Pokemon = types.model("Pokemon", {
  name: types.string,
  types: types.array(types.string),
  base: types.array(PokemonAttribute),
});

const PokemonList = types
  .model("PokemonList", {
    pokemon: types.optional(types.array(Pokemon), []),
    filter: types.optional(types.string, ""),
    selectedPokemon: types.maybeNull(types.reference(Pokemon)),
  })
  .views((self) => ({
    get filteredPokemon() {
      const filterLC = self.filter.toLowerCase();
      return self.pokemon.filter(({ name }) =>
        name.toLowerCase().includes(filterLC)
      );
    },
  }))
  .actions((self) => ({
    addPokemon(pokemon) {
      self.pokemon.push(pokemon);
    },
    setFilter(filter) {
      self.filter = filter;
    },
    setSelectedPokemon(selected) {
      self.selectedPokemon = selected;
    },
  }));

const store = PokemonList.create({
  filter: "",
  pokemon: [],
  selectedPokemon: null,
});
console.log(store);

// fetch("/starting-react/pokemon.json")
//   .then((resp) => resp.json())
//   .then((pokemonList) => {
//     pokemonList.forEach((pokemon) => {
//       const base = [];
//       Object.entries(pokemon.base).forEach(([attribute, value]) => {
//         base.push(
//           PokemonAttribute.create({
//             attribute,
//             value,
//           })
//         );
//       });
//       store.addPokemon(
//         Pokemon.create({
//           name: pokemon.name.english,
//           types: pokemon.types,
//           base,
//         })
//       );
//     });
//   });

const storeInstance = observable.box(store);

export default storeInstance;
