require('dotenv').config();
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_CMS_GRAPHQL,
  documents: ['src/graphql/**/*.graphql'],
  generates: {
    './src/generated/gql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        rawRequest: true,
      },
    },
  },
};
export default config;
