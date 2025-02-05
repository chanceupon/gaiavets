import Page from '@/components/pages/Home';
import { getSdk } from '@/generated/gql';
import { graphQLClient } from '@/libs/graphQLClient';
import React from 'react';
import { NextSeo } from 'next-seo';

const Home = ({ dataHome, dataGuides }) => {
  return (
    <>
      <NextSeo
        title={dataHome?.seo?.metaTitle}
        description={dataHome.seo?.metaDescription}
      />
      <Page dataHome={dataHome} dataGuides={dataGuides} />
    </>
  );
};

export const getServerSideProps = async () => {
  const sdk = getSdk(graphQLClient);
  const {
    data: { home },
  } = await sdk.getHome();

  const {
    data: { guides },
  } = await sdk.getGuides();

  return {
    props: {
      dataHome: home?.data?.attributes,
      dataGuides: guides?.data,
    },
  };
};

export default Home;
