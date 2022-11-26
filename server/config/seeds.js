//IMPORTS
const db = require('./connection');
const { Customer, Item, Category } = require('../models');

//CATEGORIES
db.once('open', async () => {
  await Category.deleteMany();

  //Category Names
  const categories = await Category.insertMany([
    { name: 'Featured Brands' },
    { name: 'Electronics' },
    { name: 'Clothing, Shoes, & Accessories' },
    { name: 'Emergency Prep' },
    { name: 'Food Storage/72-hour Kits' },
    { name: 'Household Essentials' },
    { name: 'Auto Industrial' },
    { name: 'Promotions' },
    { name: 'Health & Safety' },
  ]);

  console.log('🌱 Categories');

  //ITEMS
  await Item.deleteMany();

  //Item seed data
  const items = await Item.insertMany([
    {
      name: 'Walkie-talkie',
      description:
        '20 mile indoor and outdoor range',
      image: 'radio.jpeg',
      category: categories[1]._id,
      price: 29.99,
      quantity: 10
    },
    {
      name: 'Hiking Boots',
      description:
        'Comfortable, durable boots that are perfect for rough terrain',
      image: 'boots.jpeg',
      category: categories[2]._id,
      price: 99.99,
      quantity: 20
    },
    {
      name: 'First Aid Kit',
      description:
        'All-in-one kit that holds supplies for injuries',
      image: 'firstaid.jpeg',
      category: categories[8]._id,
      price: 34.99,
      quantity: 30
    },
    {
      name: 'Freeze Dried Meals',
      description:
        'Breakfast, lunch, and dinner freeze dried meal packets',
      image: 'food.avif',
      category: categories[4]._id,
      price: 149.99,
      quantity: 50 
    },
    {
      name: 'Toilet Paper',
      description:
        '20 pack of biodegradable toilet paper',
      image: 'toiletpaper.webp',
      category: categories[5]._id,
      price: 19.99,
      quantity: 20
    },
    {
      name: 'Portable Car Jump Starter',
      description:
        'Portable battery device that will jump start a vehicle',
      image: 'carjump.jpg',
      category: categories[6]._id,
      price: 79.99,
      quantity: 15
    },
    {
      name: 'Water Pack',
      description:
        'Fast and easy hands-free hydration for every outdoor excursion',
      image: 'waterpack.webp',
      category: categories[3]._id,
      price: 9.99,
      quantity: 25
    },
    {
      name: 'Tent',
      description:
        'Lightweight backpacking tent',
      image: 'tent.webp',
      category: categories[7]._id,
      price: 149.99,
      quantity: 10
    },
    {
      name: 'Mammoth Sleeping Bag',
      description:
        'The Canvas Mammoth Double Sleeping Bag is the perfect two-person sleep system when you’re looking to enjoy the outdoors together',
      image: 'sleepingbag.webp',
      category: categories[0]._id,
      price: 168.99,
      quantity: 20
    },
  ]);

  console.log('🌱 Items');

  //CUSTOMERS
  await Customer.deleteMany();
  
  //Customer seed data
  await Customer.create({
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@email.com',
    password: 'password123',
    orders: [
      {
        items: [items[0]._id]
      }
    ]
  });

  await Customer.create({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@email.com',
    password: 'test123'
  });

  console.log('🌱 Customers');

  process.exit();
});
