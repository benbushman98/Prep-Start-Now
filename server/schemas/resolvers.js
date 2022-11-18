const { AuthenticationError } = require('apollo-server-express');
const { Customer, Item, Category, Purchase } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    items: async (parent, { category, name }) => {
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
    item: async (parent, { _id }) => {
      return await Item.findById(_id).populate('category');
    },
    customer: async (parent, args, context) => {
      if (context.customer) {
        const customer = await Customer.findById(context.customer._id).populate({
          path: 'purchases.items',
          populate: 'category'
        });

        customer.purchases.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return customer;
      }

      throw new AuthenticationError('Please log-in to continue');
    },
    purchase: async (parent, { _id }, context) => {
      if (context.customer) {
        const customer = await Customer.findById(context.customer._id).populate({
          path: 'purchases.items',
          populate: 'category'
        });

        return customer.purchases.id(_id);
      }

      throw new AuthenticationError('Please log-in to continue');
    },
    // checkout: async (parent, args, context) => {
    //   const url = new URL(context.headers.referer).origin;
    //   const purchase = new Purchase({ items: args.items });
    //   const line_items = [];

    //   const { items } = await item.populate('items');

    //   for (let i = 0; i < items.length; i++) {
    //     const item = await stripe.items.create({
    //       name: items[i].name,
    //       description: items[i].description,
    //       images: [`${url}/images/${items[i].image}`]
    //     });

    //     const price = await stripe.prices.create({
    //       item: item.id,
    //       unit_amount: items[i].price * 100,
    //       currency: 'usd',
    //     });

    //     line_items.push({
    //       price: price.id,
    //       quantity: 1
    //     });
    //   }
    
    //   const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ['card'],
    //     line_items,
    //     mode: 'payment',
    //     success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    //     cancel_url: `${url}/`
    //   });

    //   return { session: session.id };
    // }
  },
  Mutation: {
    addCustomer: async (parent, args) => {
      const customer = await Customer.create(args);
      const token = signToken(customer);

      return { token, customer };
    },
    addPurchase: async (parent, { items }, context) => {
      console.log(context);
      if (context.customer) {
        const purchase = new Purchase({ items });

        await Customer.findByIdAndUpdate(context.customer._id, { $push: { purchases: purchase } });

        return purchase;
      }

      throw new AuthenticationError('Please log-in to continue');
    },
    updateCustomer: async (parent, args, context) => {
      if (context.customer) {
        return await Customer.findByIdAndUpdate(context.customer._id, args, { new: true });
      }

      throw new AuthenticationError('Please log-in to continue');
    },
    updateItem: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Item.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
    login: async (parent, { email, password }) => {
      const customer = await Customer.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Email not found');
      }

      const correctPassword = await customer.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError('Incorrect password');
      }

      const token = signToken(user);

      return { token, customer };
    }
  }
};

module.exports = resolvers;
