import express from 'express';
import path from 'path';
import { ApolloServer } from 'apollo-server-express';
import { loadFilesSync } from '@graphql-tools/load-files';
import { makeExecutableSchema } from '@graphql-tools/schema';

const typesArray = loadFilesSync(path.resolve(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(
  path.resolve(__dirname, '**/*.resolver.ts')
);

const PORT = process.env.PORT || 3000;

async function startApolloServer(): Promise<void> {
  const app = express();

  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  });

  const server = new ApolloServer({
    schema,
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`Running GraphQL server on port: ${PORT}`);
  });
}

startApolloServer();