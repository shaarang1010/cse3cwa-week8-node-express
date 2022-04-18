const pokemonList = require("../../assets/pokedex.json");

const pokemonTypes = require("../../assets/types.json");

const getPokemonById = (id) => {
  return pokemonList.filter((pokemon) => pokemon.id === Number(id))[0];
};

const getPokemonByNameInEnglish = (name) => {
  return pokemonList.filter((pokemon) => pokemon.name.english === name)[0];
};

const getPokemonsByType = (type) => {
  return pokemonList.filter((pokemon) => pokemon.type.includes(type));
};

const getAllPokemons = () => {
  return pokemonList;
};

const getAllPokemonTypes = () => {
  return pokemonTypes;
};

module.exports = {
  getAllPokemonTypes,
  getAllPokemons,
  getPokemonById,
  getPokemonByNameInEnglish,
  getPokemonsByType,
};
