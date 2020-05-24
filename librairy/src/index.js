import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
// import ApolloClient from 'apollo-boost'

import {ApolloProvider} from 'react-apollo'
import {BrowserRouter as Router} from 'react-router-dom'

// const client=new ApolloClient({
//   uri:'http://localhost:4000/graphql'
// })






import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri:'http://localhost:4000/graphql',
      credentials: 'same-origin'
    })
  ]),
  cache: new InMemoryCache()
});








ReactDOM.render(
  
 <Router>
    <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
 </Router>
    ,
  document.getElementById('root')
);

