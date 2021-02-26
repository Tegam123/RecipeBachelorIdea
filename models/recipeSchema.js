const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, index: true },
  ingrediens: {type: [String], required: true,},
  description: { type: String, required: true },
  category: { type: String},
});

module.exports = mongoose.model("Recipe", RecipeSchema);


