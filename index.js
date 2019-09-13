import cors from "cors";
import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { buildSchema } from "graphql";

const app = express();
// app.use(cors);

// const books = [
//   {
//     title: "Harry Potter and the Chamber of Secrets",
//     author: "J.K. Rowling"
//   },
//   {
//     title: "Jurassic Park",
//     author: "Michael Crichton"
//   }
// ];

// const typeDefs = gql`
//   type Book {
//     title: String
//     author: Author
//   }

//   type Author {
//     books: [Book]
//   }

//   type Query {
//     author: Author
//   }
// `;

// const resolvers = {
//   Query: {
//     author(parent, args, context, info) {
//       return [books[0]];
//     }
//   },
//   Author: {
//     books(author) {
//       return [books[0]];
//     }
//   }
// };

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    getBooks: [Book]
    getAuthors: [Author]
  }
  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
    books: [Book]
  }
  type Mutation {
    addBook(title: String, author: String): Book
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!"
  },
  User: {
    users: () => ({ name: "TESTE", email: "email" })
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app, path: "/graphql" });

const port = 5000;

app.get("/api", (req, res) => {
  res.send({ status: "ok" });
});

app.listen({ port }, () => {
  console.log(`Apollo Server on http://localhost:${port}/graphql`);
});
