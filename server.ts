import express from 'express';
import path from 'path';
import { graphqlHTTP } from 'express-graphql';
import { loadFilesSync } from '@graphql-tools/load-files';
import { makeExecutableSchema } from '@graphql-tools/schema';

const typesArray = loadFilesSync(path.resolve(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.resolve(__dirname, '**/*.resolver.ts'));

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray
});

const PORT = process.env.PORT || 3000;

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Running GraphQL server on port: ${PORT}`);
});
