const express = require("express");
const { getAllPokemons, getPokemonById } = require("../../middleware/helpers");

const router = express();

// Add a new Pokemon to list of pokemons

router.post("/add-pokemon", (req, res) => {
  try {
    const pokemonList = getAllPokemons();
    const { body } = req;
    const isPokemonExists = getPokemonById(body.id);
    if (!isPokemonExists) {
      res.status(201).send({ data: [...pokemonList, body] });
    } else {
      res
        .status(401)
        .send({ message: `Pokemon with id = ${body.id} exists in the record` });
    }
  } catch (err) {
    res.status(401).send({ error: err });
  }
});

module.exports = router;
