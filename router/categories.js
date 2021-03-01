const express = require("express");
const router = express.Router();
const categoryController = require("../categories/category.controller");
const authorize = require("_helpers/authorize");
const Role = require("_helpers/role");

/// ROUTES ///
/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Managing the different categories
 */

/**
 * @swagger
 * /categories/getcategories:
 *   get:
 *     summary: Retrieve the list of categories
 *     tags: [Categories]
 *     description: Retrieve a list of categories.
 *     responses:
 *       200:
 *         description: A list of categories.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 category:
 *                   type: string
 *                   description: The categories name.
 *                   example: Vegan
 */
router.get("/getcategories", categoryController.getCategories); // public route

/**
 * @swagger
 * /categories/createcategory:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a category.
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category:
 *                 type: string
 *                 description: The categories name.
 *     responses:
 *       200:
 *         description: Created category
 */
router.post(
  "/createcategory",
  authorize([Role.Administrator, Role.Manager]),
  categoryController.createCategory
); // public route

/**
 * @swagger
 * /categories/getrecipes/{category}:
 *   get:
 *     summary: Retrieve the list of recipes in specific category
 *     tags: [Categories]
 *     description: Retrieve the list of recipes in specific category.
 *     parameters:
 *       - in: path
 *         name: category
 *         schema:
 *           type: string
 *         requried: true
 *         description: The category
 *     responses:
 *       200:
 *         description: Retrieve the list of recipes in specific category.
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
router.get("/getrecipes/:category", categoryController.getRecipes);
module.exports = router;
