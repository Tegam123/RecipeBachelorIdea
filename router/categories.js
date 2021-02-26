const express = require("express");
const router = express.Router();
const categoryController = require('../categories/category.controller');
const authorize = require("_helpers/authorize");
const Role = require("_helpers/role");


/// ROUTES ///
router.get("/getcategories", categoryController.getCategories); // public route
router.post(
  "/createcategory",
  authorize([Role.Administrator, Role.Manager]),
  categoryController.createCategory
); // public route
router.get("/getrecipes/:category", categoryController.getRecipes);
module.exports = router;
