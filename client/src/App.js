import * as React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import PageChangeHandler from './PageChangeHandler';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
            <PageChangeHandler />
    </ApolloProvider>
  )
}

export default App;

