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
      name: 'Mammoth Sleeping Bag',
      description:
        'The Canvas Mammoth Double Sleeping Bag is the perfect two-person sleep system when you are looking to enjoy the outdoors together',
      image: 'sleepingbag.webp',
      category: categories[0]._id,
      price: 168.99,
      quantity: 20
    },
    {
      name: 'Camping Cot',
      description:
        'This camping cot is easy to set up as well as comfortable to make your sleeping experience as good as possible',
      image: 'campingcot.webp',
      category: categories[0]._id,
      price: 189.99,
      quantity: 20
    },
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
      name: 'Rechargeable Flashlight',
      description:
        'A flashlight you can recharge in the sun',
      image: 'flashlight.png',
      category: categories[1]._id,
      price: 45.99,
      quantity: 20
    },
    {
      name: 'Petzl headlight',
      description:
        'A reliable headlight you can use in any activity',
      image: 'headlight.png',
      category: categories[1]._id,
      price: 69.95,
      quantity: 40
    },
    {
      name: 'Portable Battery Pack',
      description:
        'A battery that can charge your phone or your laptop',
      image: 'portablecharger.png',
      category: categories[1]._id,
      price: 19.99,
      quantity: 20
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
      name: 'Winter Coat',
      description:
        'A coat that keeps you nice and warm throughout the winter',
      image: 'heatedcoat.png',
      category: categories[2]._id,
      price: 119.95,
      quantity: 20
    },
    {
      name: 'Beanie',
      description:
        'High quality winter hat',
      image: 'beanie.png',
      category: categories[2]._id,
      price: 11.99,
      quantity: 20
    },
    {
      name: 'Winter Gloves',
      description:
        'Thermal Winter Gloves for Men, Women',
      image: 'wintergloves.png',
      category: categories[2]._id,
      price: 25.99,
      quantity: 28
    },
    {
      name: 'Rain Pancho',
      description:
        'A hybrid waterproof pancho that can also be used and an emergency blanket',
      image: 'rainpancho.png',
      category: categories[2]._id,
      price: 18.95,
      quantity: 40
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
      name: 'Lighter',
      description:
        'Rechargeable plasma lighter',
      image: 'lighter.png',
      category: categories[3]._id,
      price: 14.99,
      quantity: 28
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
      name: '72 Hour Kit',
      description:
        'A two person 72 hour kit with all the supplies and nutrients needed for survival',
      image: '72hourkit.png',
      category: categories[4]._id,
      price: 149.99,
      quantity: 50 
    },
    {
      name: 'Batteries',
      description:
        'Double and triple A battery pack for emergencies',
      image: 'batteries.png',
      category: categories[1]._id,
      price: 33.98,
      quantity: 48 
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
      name: 'Luggable Loo',
      description:
        'A portable toilet for many outdoor activities and disaster emergencies',
      image: 'portabletoilet.webp',
      category: categories[5]._id,
      price: 55.00,
      quantity: 35
    },
    {
      name: 'Gas Generator',
      description:
        'A gas powered generator that has 14 hours of runtime',
      image: 'generator.png',
      category: categories[5]._id,
      price: 339.97,
      quantity: 30
    },
    {
      name: 'Solar Generator',
      description:
        'A solar powered generator that can recharge in the sun',
      image: 'solargenerator.png',
      category: categories[5]._id,
      price: 3599.00,
      quantity: 20
    },
    {
      name: 'Home Generator',
      description:
        'An in home generator you can charge with solar that can power big appliances ',
      image: 'inhomegenerator.png',
      category: categories[5]._id,
      price: 2349.00,
      quantity: 25
    },
    {
      name: 'Duct Tape',
      description:
        'Waterproof adhesive tape for any type of repair',
      image: 'ducttape.png',
      category: categories[5]._id,
      price: 9.96,
      quantity: 30
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
      name: 'Tent',
      description:
        'Lightweight backpacking tent',
      image: 'tent.webp',
      category: categories[7]._id,
      price: 149.99,
      quantity: 10
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
      name: 'Water Filter',
      description:
        'Portable water filter for emergencies',
      image: 'waterfilter.png',
      category: categories[8]._id,
      price: 49.99,
      quantity: 30
    },
    {
      name: 'Multivitamin',
      description:
        'A multivitamin to take for immune system support',
      image: 'multivitamin.png',
      category: categories[8]._id,
      price: 29.95,
      quantity: 30
    },
    {
      name: 'Emergency Whistle',
      description:
        'A loud whistle that can be heard up to a mile away',
      image: 'whistle.png',
      category: categories[8]._id,
      price: 9.99,
      quantity: 25
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
