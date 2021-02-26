const express = require("express");
const recipeService = require("./recipe.service");
<<<<<<< HEAD

module.exports = {
  getRecipes,
  createRecipe,
};

=======
const Role = require("_helpers/role");

/// ROUTES ///
router.get("/getrecipes", getRecipes); // public route
router.post(
  "/createrecipe",
  authorize([Role.User, Role.Administrator, Role.Manager]),
  createRecipe
); // public route
module.exports = router;

>>>>>>> 93a1167b4886f22862cc7703e3fe0ef21e31c0e4
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
