//MONGOOSE IMPORT
const mongoose = require('mongoose');
const { Schema } = mongoose;

//PURCHASE SCHEMA
const purchase = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Item'
    }
  ]
});

//PURCHASE MODEL
const Purchase = mongoose.model('Purchase', purchase);

module.exports = Purchase;
