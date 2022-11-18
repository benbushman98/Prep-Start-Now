const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Item {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Purchase {
    _id: ID
    purchaseDate: String
    items: [Item]
  }

  type Customer {
    _id: ID
    firstName: String
    lastName: String
    email: String
    purchases: [Purchase]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    customer: Customer
  }

  type Query {
    categories: [Category]
    items(category: ID, name: String): [Item]
    item(_id: ID!): Item
    customer: Customer
    purchase(_id: ID!): Purchase
    checkout(items: [ID]!): Checkout
  }

  type Mutation {
    addCustomer(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addPurchase(items: [ID]!): Purchase
    updateCustomer(firstName: String, lastName: String, email: String, password: String): Customer
    updateItem(_id: ID!, quantity: Int!): Item
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
