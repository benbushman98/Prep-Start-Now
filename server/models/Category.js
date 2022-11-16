const mongoose = require('mongoose');

const { Schema } = mongoose;

const category = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Category = mongoose.model('Category', category);

module.exports = Category;
