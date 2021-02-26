const express = require("express");
const recipeService = require("./recipe.service");

module.exports = {
  getRecipes,
  createRecipe,
};

function getRecipes(req, res, next) {
  recipeService
    .getRecipes(req.body)
    .then((recipes) =>
      recipes
        ? res.json(recipes)
        : res.status(400).json({ message: "Recipe could not be found" })
    )
    .catch((err) => next(err));
}

function createRecipe(req, res, next) {
  recipeService
    .createRecipe(req.body)
    .then((recipes) =>
      recipes
        ? res.json(recipes)
        : res.status(400).json({ message: "Recipe could not be created" })
    )
    .catch((err) => next(err));
}
