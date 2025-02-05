import Page from '@/components/pages/Team';
import { getSdk } from '@/generated/gql';
import { graphQLClient } from '@/libs/graphQLClient';
import React from 'react';

const Home = ({ data }) => {
  return <Page data={data} />;
};

export const getServerSideProps = async () => {
  const sdk = getSdk(graphQLClient);
  const {
    data: { team },
  } = await sdk.getTeam();

  return {
    props: {
      data: team?.data,
    },
  };
};

export default Home;
