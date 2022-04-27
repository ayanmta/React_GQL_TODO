import React from 'react';
import ReactDOM from 'react-dom/client';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from '@apollo/react-hooks'

import Tablr from './Tablr';
import App from './App';

const client = new ApolloClient({
  uri:"https://tyoku.sse.codesandbox.io/graphql"
})
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
        <App/>
  </ApolloProvider>
);
