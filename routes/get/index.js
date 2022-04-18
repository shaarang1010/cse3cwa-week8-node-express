const express = require("express");
const {
  getAllPokemonTypes,
  getPokemonById,
  getPokemonByNameInEnglish,
  getAllPokemons,
  getPokemonsByType,
} = require("../../middleware/helpers");

const router = express();

// Get all pokemon
router.get("/", (req, res) => {
  try {
    const data = getAllPokemons();
    res.status(200).send({ data: data });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// get pokemon by id
router.get("/pokemon/:id", (req, res) => {
  const { id } = req.params;
  try {
    const pokemon = getPokemonById(id);
    res.status(200).send({ data: pokemon });
  } catch (err) {
    res.status(400).send({ err: err });
  }
});

// get pokemon by type
router.get("/pokemon-type/:type", (req, res) => {
  const { type } = req.params;
  try {
    const pokemon = getPokemonsByType(type);
    res.status(200).send({ data: pokemon });
  } catch (err) {
    res.status(400).send({ err: err });
  }
});

module.exports = router;
