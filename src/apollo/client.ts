// src/apollo/client.ts
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://clickcoinbe.onrender.com/graphql",//'http://localhost:2999/graphql',  // Define the GraphQL server URL in .env
  cache: new InMemoryCache(),
});

export default client;
