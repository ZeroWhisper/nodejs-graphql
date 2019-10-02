import express from 'express';
// import cors from 'cors';
import graphqlHTTP from 'express-graphql';
import models from '~/app/models';
import { GraphQLSchema } from 'graphql';

var options = {
  exclude: ['Users']
};

// models['user'].graphql = {
//   attributes: {
//     exclude: ['description'],
//     include: { modelPortfolioId: 'int', obj: 'myObj' }
//   }
// };

// Font: https://www.npmjs.com/package/sequelize-graphql-schema
const { generateSchema } = require('sequelize-graphql-schema')(options);

const port = 5000;
const app = express();
// app.use(cors);

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
