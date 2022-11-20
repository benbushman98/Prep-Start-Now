//MONGOOSE IMPORT
const mongoose = require('mongoose');
const { Schema } = mongoose;

//CATEGORY SCHEMA
const category = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

//CATEGORY MODEL
const Category = mongoose.model('Category', category);

module.exports = Category;
