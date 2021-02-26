const express = require('express');
const router = express.Router();
const recipeController = require('../recipes/recipe.controller');
const authorize = require("_helpers/authorize");
const Role = require("_helpers/role");

router.get("/getrecipes", recipeController.getRecipes); // public route
router.post("/createrecipe", authorize([Role.User, Role.Administrator, Role.Manager]), recipeController.createRecipe); // public route

module.exports = router; 