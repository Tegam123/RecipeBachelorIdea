const categoryService = require("./category.service");

module.exports = {
  getCategories,
  createCategory,
  getRecipes
};

function getCategories(req, res, next) {
  categoryService
    .getCategories(req.body)
    .then((categories) =>
      categories
        ? res.json(categories)
        : res.status(400).json({ message: "Categories could not be found" })
    )
    .catch((err) => next(err));
}

function createCategory(req, res, next) {
  categoryService
    .createCategory(req.body)
    .then((categories) =>
      categories
        ? res.json(categories)
        : res.status(400).json({ message: "Category could not be created" })
    )
    .catch((err) => next(err));
}

function getRecipes(req, res, next) {
  categoryService
    .getRecipes(req.params.category)
    .then((user) =>
      user
        ? res.json(user)
        : res.status(400).json({ message: "No foods with this category" })
    )
    .catch((err) => next(err));
}
