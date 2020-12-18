const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    username: String!,
    email: String!
  }
  type Query {
    getUsers: [User]!
  }
`;