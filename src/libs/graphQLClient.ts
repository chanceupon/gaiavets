import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.NEXT_PUBLIC_CMS_GRAPHQL as string;

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    'Cache-Control': 'no-cache', // Prevents caching
    Pragma: 'no-cache', // HTTP 1.0 backward compatibility
    authorization: `Bearer ${process.env.NEXT_PUBLIC_CMS_TOKEN}`,
  },
});
