const express = require("express");
const { getPokemonById, getAllPokemons } = require("../../middleware/helpers");

const router = express();

router.delete("/delete-pokemon/:id", (req, res) => {
  try {
    const { id } = req.params;
    const pokemonToBeDeleted = getPokemonById(id);
    if (pokemonToBeDeleted) {
      const pokemonList = getAllPokemons().filter(
        (pokemon) => pokemon.id !== pokemonToBeDeleted.id
      );
      res.status(200).send({ data: pokemonToBeDeleted });
    }
  } catch (err) {
    res.status(401).send({ error: err });
  }
});

module.exports = router;
