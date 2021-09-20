import { ApolloProvider } from "@apollo/client";
import getApolloClient from "../lib/with-apollo";

function App ({ Component, pageProps }) {
  const client = getApolloClient();
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;