const express = require("express");
const router = express.Router();
const authorize = require("_helpers/authorize");
const recipeService = require("./recipe.service");
const Role = require("_helpers/role");

/// ROUTES ///
router.get("/getrecipes", getRecipes); // public route
router.post(
  "/createrecipe",
  authorize([Role.User, Role.Administrator, Role.Manager]),
  createRecipe
); // public route
module.exports = router;

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
