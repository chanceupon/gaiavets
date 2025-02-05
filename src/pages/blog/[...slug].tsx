import Page from '@/components/pages/Guides/Detail';
import { previewAssetUrl } from '@/data/helper';
import { getSdk } from '@/generated/gql';
import { graphQLClient } from '@/libs/graphQLClient';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';

const Detail = ({ guide }) => {
  return (
    <>
      <NextSeo
        title={guide?.seo?.metaTitle || guide.title}
        description={guide?.seo?.metaDescription}
      />
      <Head>
        <meta
          property='og:image'
          content={previewAssetUrl(guide?.image?.data?.attributes?.url)}
        />
        <meta property='og:type' content='Article' />
      </Head>
      <Page data={guide} />
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const sdk = getSdk(graphQLClient);
  const { slug } = params;

  const {
    data: { guides },
  } = await sdk.getDetailGuide({
    slug: slug[0],
  });

  if (!guides) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      guide: guides?.data[0]?.attributes,
    },
  };
};

export default Detail;
