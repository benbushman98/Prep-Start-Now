//IMPORTS
const { AuthenticationError } = require('apollo-server-express');
const { Customer, Item, Category, Purchase } = require('../models');
const { signToken } = require('../utils/auth');

//SETTING UP RESOLVERS
const resolvers = {

  //QUERY SECTION
  Query: {

    //FIND A CATEGORY
    categories: async () => {
      return await Category.find();
    },
    //RETURNS ITEMS BELONGING TO A CATEGORY
    items: async (parent, { name, category }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Item.find(params).populate('category');
    },
    //FIND A SINGLE ITEM
    item: async (parent, { _id }) => {
      return await Item.findById(_id).populate('category');
    },
    //RETURNS THE CUSTOMER'S PURCHASED ITEMS
    customer: async (parent, args, context) => {
      if (context.customer) {
        const customer = await Customer.findById(context.customer._id).populate({
          path: 'purchases.items',
          populate: 'category'
        });
        
        //Sorting the purchases in descending order
        customer.purchases.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return customer;
      }
      
      //Auth error notification
      throw new AuthenticationError('Please log-in to continue');
    },
    //RETURNS A CUSTOMER'S INDIVIDUAL PURCHASE
    purchase: async (parent, { _id }, context) => {
      if (context.customer) {
        const customer = await Customer.findById(context.customer._id).populate({
          path: 'purchases.items',
          populate: 'category'
        });

        return customer.purchases.id(_id);
      }

      //Auth error notification
      throw new AuthenticationError('Please log-in to continue');
    },

  },

  //MUTATION SECTION
  Mutation: {

    //NEW CUSTOMER WITH TOKEN
    addCustomer: async (parent, args) => {
      const customer = await Customer.create(args);
      const token = signToken(customer);

      return { token, customer };
    },
    //NEW PURCHASE 
    addPurchase: async (parent, { items }, context) => {
      console.log(context);
      if (context.customer) {
        const purchase = new Purchase({ items });

        await Customer.findByIdAndUpdate(context.customer._id, { $push: { purchases: purchase } });

        return purchase;
      }

      //Auth error notification
      throw new AuthenticationError('Please log-in to continue');
    },
    //UPDATE CUSTOMER
    updateCustomer: async (parent, args, context) => {
      if (context.customer) {
        return await Customer.findByIdAndUpdate(context.customer._id, args, { new: true });
      }

      //Auth error notification
      throw new AuthenticationError('Please log-in to continue');
    },
    //UPDATE ITEM
    updateItem: async (parent, { _id, quantity }) => {
      //Decrements by taking the absolute value of the quantity & multiplying it by -1 to ensure it's a negative 
      const decrement = Math.abs(quantity) * -1;
      //Returns the individual item & updates it by incrementing the quantity field (which should be a negative)
      return await Item.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
    //LOGIN SECTION
    login: async (parent, { email, password }) => {
      //Finds the email of an individual customer
      const customer = await Customer.findOne({ email });

      //If no customer then auth error for no email found
      if (!customer) {
        throw new AuthenticationError('Email not found');
      }

      const correctPassword = await customer.isCorrectPassword(password);
      //If password is not correct then auth error for incorrect password
      if (!correctPassword) {
        throw new AuthenticationError('Incorrect password');
      }

      //Signed token for customer
      const token = signToken(customer);
      
      return { token, customer };
    }
  }
};

module.exports = resolvers;
