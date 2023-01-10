import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { config } from '../config';


export const createAppSyncClient = () => {
    const client = new ApolloClient({
      cache: new InMemoryCache(),
    });
    return client;
  };
