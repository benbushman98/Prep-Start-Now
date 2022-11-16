const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: '',
      description:
        '',
      image: '',
      category: ,
      price: ,
      quantity: 
    },
    {
      name: '',
      description:
        '',
      image: '',
      category: ,
      price: ,
      quantity: 
    },
    {
      name: '',
      category: ,
      description:
        '',
      image: '',
      price: ,
      quantity: 
    },
    {
      name: '',
      category: categories[1]._id,
      description:
        '',
      image: '',
      price: ,
      quantity: 
    },
    {
      name: '',
      category: categories[1]._id,
      description:
        '',
      image: '',
      price: ,
      quantity: 
    },
    {
      name: '',
      category: ,
      description:
        '',
      image: '',
      price: ,
      quantity: 
    },
    {
      name: '',
      category: ,
      description:
        '',
      image: '',
      price: ,
      quantity: 
    },
    {
      name: '',
      category: ,
      description:
        '',
      image: '',
      price: ,
      quantity: 
    },
    {
      name: '',
      category: ,
      description: '',
      image: '',
      price: ,
      quantity: 
    },
    {
      name: '',
      category: ,
      description:
        '',
      image: '',
      price: ,
      quantity: 
    },
    {
      name: '',
      category: ,
      description:
        '',
      image: '',
      price: ,
      quantity: 
    },
    {
      name: '',
      category: ,
      description:
        '',
      image: '',
      price: ,
      quantity: 
    }
  ]);

  console.log('');

  await User.deleteMany();

  await User.create({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    orders: [
      {
        products: []
      }
    ]
  });

  await User.create({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  console.log('All users info has been populated');

  process.exit();
});
