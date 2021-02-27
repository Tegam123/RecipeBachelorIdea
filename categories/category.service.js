const Category = require("../models/categorySchema");
const recipes = require("../models/recipeSchema");

module.exports = {
  getCategories,
  createCategory,
  getRecipes,
};

async function getCategories() {
  const categories = await Category.find({});
  return categories;
}

async function createCategory({ category }) {
  const categories = await Category.create({
    category: category,
  });
  return categories;
}

async function getRecipes(category) {
  var result = await recipes.find({ category: category });
  //findByIdAndUpdate(id,{"role": Role.Manager});
  return result;
}
