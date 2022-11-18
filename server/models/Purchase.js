const mongoose = require('mongoose');

const { Schema } = mongoose;

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

const Purchase = mongoose.model('Purchase', purchase);

module.exports = Purchase;
