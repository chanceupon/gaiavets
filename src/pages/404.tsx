import Head from 'next/head';
import tw from 'twin.macro';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - This page could not be found</title>
      </Head>
      <div css={tw`h-screen flex items-center justify-center flex-col`}>
        <div css={tw`h-[3rem] flex items-center`}>
          <h1
            css={tw`text-[1.5rem] pr-[1.4375rem] font-medium mr-[1.25rem] text-text_primary border-r border-[rgba(0,0,0,.3)] inline-block `}
          >
            404
          </h1>
          <h1>This page could not be found</h1>
        </div>
      </div>
    </>
  );
};

export default Custom404;
