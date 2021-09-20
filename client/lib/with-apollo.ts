import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink
} from '@apollo/client';

let apolloClient;

const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  const link = createHttpLink({
    uri: `https://faker-graphql.now.sh/graphql`,
  });
  const cache = new InMemoryCache()
  return new ApolloClient({
    link,
    cache
  });
}

const getApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return _apolloClient;
}


export default getApolloClient;
