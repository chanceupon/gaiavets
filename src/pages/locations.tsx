import Page from '@/components/pages/Locations';
import { getSdk } from '@/generated/gql';
import { graphQLClient } from '@/libs/graphQLClient';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const Locations = ({ data }) => {
  const router = useRouter();
  const { slug } = router.query as any;

  const titleMap = {
    'vet-clinic-serangoon-road': 'Vet Hospital (Jalan Besar)',
    'vet-clinic-holland-road': 'Vet Clinic (Holland Rd)',
  };

  const metaTitle = titleMap[slug] || 'GAIA VETS';

  return (
    <>
      <NextSeo title={metaTitle} description={metaTitle} />
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <Page data={data} />;
    </>
  );
};

export const getServerSideProps = async () => {
  const sdk = getSdk(graphQLClient);
  const {
    data: { location },
  } = await sdk.getLocation();

  return {
    props: {
      data: location?.data?.attributes,
    },
  };
};

export default Locations;
