// import cors from 'cors';
import express from 'express';
// import { ApolloServer, gql } from 'apollo-server-express';
// import { buildSchema } from 'graphql';

const app = express();
// app.use(cors);

const port = 5000;

app.get('/api', (req, res) => {
  res.send({ status: 'ok' });
});

app.listen({ port }, () => {
  console.log(`Graphql on http://localhost:${port}/graphql`);
  console.log(`Server on http://localhost:${port}/api`);
});
