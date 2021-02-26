const Recipe = require("../models/recipeSchema");

module.exports = {
  getRecipes,
  createRecipe,
};

async function getRecipes() {
  const recipes = await Recipe.find({});
  return recipes;
}

async function createRecipe({ name, ingrediens, description, category }) {
  const recipe = await Recipe.create({
    name: name,
    ingrediens: ingrediens,
    description: description,
    category: category,
  });
  return recipe;
}
