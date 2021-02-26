const Categories = require("categories/categories");
const Category = require("../models/categorySchema");

module.exports = {
  getCategories,
  createCategory,
};

async function getCategories() {
  const categories = await Category.find({});
  return categories;
}

async function createCategory({ name }) {
  const category = await Category.create({
    name: name,
  });
  return category;
}
