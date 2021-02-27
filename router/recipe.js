const express = require("express");
const router = express.Router();
const recipeController = require("../recipes/recipe.controller");
const authorize = require("_helpers/authorize");
const Role = require("_helpers/role");

/**
 * @swagger
 * tags:
 *   name: Recipes
 *   description: Managing the different recipes
 */

/**
 * @swagger
 * /recipes/getrecipes:
 *   get:
 *     summary: Retrieve the list of recipes
 *     tags: [Recipes]
 *     description: Retrieve a list of recipes.
 *     responses:
 *       200:
 *         description: A list of recipes.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: The recipes name.
 *                   example: Bread
 *                 ingredients:
 *                   type: array
 *                   description: The recipes ingredients.
 *                   example: ["Noodles", "Water", "Fingernails"]
 *                 description:
 *                   type: string
 *                   description: The recipes description.
 *                   example: Mix together and bake
 *                 category:
 *                   type: string
 *                   description: The recipes category.
 *                   example: Vegan
 */
router.get("/getrecipes", recipeController.getRecipes); // public route

////////VIRKER IKKE ENDNU//////////
////////VIRKER IKKE ENDNU//////////
////////VIRKER IKKE ENDNU//////////
////////VIRKER IKKE ENDNU//////////
/**
 * @swagger
 * /recipes/createrecipe:
 *   post:
 *     summary: Create a recipe.
 *     tags: [Recipes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 required: true
 *               ingrediens:
 *                 type: array
 *                 required: true
 *                 items:
 *                   type: string
 *               description:
 *                 type: string
 *                 required: true
 *               category:
 *                 type: string
 *                 required: true
 *     responses:
 *       200:
 *         description: Created recipe
 */
router.post(
  "/createrecipe",
  authorize([Role.User, Role.Administrator, Role.Manager]),
  recipeController.createRecipe
); // public route

module.exports = router;
