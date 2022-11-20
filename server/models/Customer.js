//IMPORTS
const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Purchase = require('./Purchase');

//CUSTOMER SCHEMA FOR LOGIN/SIGNUP
const customer = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  purchases: [Purchase.schema]
});

//SALT PASSWORD
customer.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

//CHECK FOR CORRECT PASSWORD MATCH
customer.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

//CUSTOMER MODEL
const Customer = mongoose.model('Customer', customer);

module.exports = Customer;
