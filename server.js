const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { sequelize } = require('./models/index');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);

  sequelize
    .authenticate()
    .then(() => {
      console.log('Database connected');
    })
    .catch(err => {
      console.log(err);
    })
  });