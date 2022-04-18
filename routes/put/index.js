const express = require("express");
const { getPokemonById } = require("../../middleware/helpers");

const router = express();

router.put("/edit-pokemon", (req, res) => {
  try {
    const { body } = req;
    const pokemonExists = getPokemonById(body.id);
    if (pokemonExists) {
      const newPokemonDetails = { ...pokemonExists, ...body };
      res.status(201).send({ data: newPokemonDetails });
    }
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

module.exports = router;
