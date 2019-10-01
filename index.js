// import cors from 'cors';
import express from 'express';
// import { ApolloServer, gql } from 'apollo-server-express';
// import { buildSchema } from 'graphql';
import graphqlHTTP from 'express-graphql';
import models from '~/app/models';

import { GraphQLSchema } from 'graphql';

var options = {
  exclude: ['Users']
};

const { generateSchema } = require('sequelize-graphql-schema')(options);

// const { GraphQLSchema } = require('graphql');

const app = express();
// app.use(cors);

const port = 5000;

app.get('/api', (req, res) => {
  res.send({ status: 'ok' });
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: new GraphQLSchema(generateSchema(models)),
    graphiql: true
  })
);

app.listen({ port }, () => {
  console.log(`Graphql on http://localhost:${port}/graphql`);
  console.log(`Server on http://localhost:${port}/api`);
});
