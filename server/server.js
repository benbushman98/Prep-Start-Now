const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

// This is a public sample test API key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require("stripe")('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

//MIDDLEWARE FOR POST & PUT REQUESTS 
//because we are sending data & asking the server to accept or store 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//MIDDLEWARE FOR IMAGES FROM CLIENT FOLDER
app.use('/images', express.static(path.join(__dirname, '../client/images')));

//WHEN IN PRODUCTION, USE CLIENT BUILD FOLDER
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

//GET REQUEST FOR INDEX.HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


//APOLLO SERVER START FUNCTION
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`⚡️ Running on port ${PORT}! ⚡️`);
      console.log(`✨ GraphQL >>  http://localhost:${PORT}${server.graphqlPath} ✨`);
    })
  })
  };
  
  startApolloServer(typeDefs, resolvers);
