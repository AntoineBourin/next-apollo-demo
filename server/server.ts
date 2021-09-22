import express from 'express';
import depthLimit from 'graphql-depth-limit';
import { ApolloServer } from 'apollo-server-express';
import http from 'http';
import typeDefs from './src/schemas/typeDefs';
import resolvers from './src/schemas/resolvers';
import { DocumentNode } from "graphql";

const startApolloServer = async (typedefs: Array<DocumentNode>, resolvers: any) => {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    validationRules: [depthLimit(7)]
  });

  await server.start();
  server.applyMiddleware({
    app,
    path: '/graphql'
  });

  const port = process.env.PORT || 4000
  await new Promise(resolve => httpServer.listen({ port }, () => { resolve(port) }));
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
};

startApolloServer(typeDefs, resolvers);
