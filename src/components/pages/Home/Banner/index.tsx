import { Button } from '@/storybook';
import React from 'react';
import tw from 'twin.macro';
import Slides from './Slides';
import Link from 'next/link';
import { BannerCollection } from '@/data/collection';
import Image from 'next/image';

const Banner: React.FC<{
  data: BannerCollection;
}> = ({ data }) => {
  return (
    <div
      css={tw`flex items-center pb-16 lg:(flex-col-reverse gap-10 items-start) md:pb-10`}
    >
      <div css={tw`flex-1 pl-[8.4375rem] lg:px-[1.875rem] md:!px-5`}>
        <div css={tw`flex flex-col gap-8 md:gap-[1.75rem]`}>
          <div css={tw`w-[29.4375rem] lg:w-full`}>
            <h1
              css={tw`font-montserrat text-[5.625rem] font-[900] leading-[5.0625rem] uppercase text-color_2 md:(text-[3.125rem] leading-[2.8125rem])`}
            >
              {data?.mainText}
            </h1>
          </div>
          <div css={tw`w-[24.875rem] lg:w-full`}>
            <h1
              css={tw`text-xl leading-[1.875rem] text-color_2 md:(text-[1.125rem] leading-[1.6875rem])`}
            >
              {data?.subText}
            </h1>
          </div>
          <Link href='#location'>
            <Button
              type='primary'
              css={tw`h-[2.875rem] px-7 md:(w-full h-[3rem])`}
            >
              <div css={tw`flex items-center gap-2`}>
                <p
                  css={tw`text-[1.375rem] font-medium leading-2 text-white md:text-[1.125rem]`}
                >
                  Book Now
                </p>
                <Image
                  src='/svg/arrow-up.svg'
                  alt='icon-arrow-up'
                  width='0'
                  height='0'
                  sizes='100vw'
                  css={tw`w-[1.375rem] h-[1.375rem]`}
                />
              </div>
            </Button>
          </Link>
        </div>
      </div>
      <Slides data={data?.slides?.data} />
    </div>
  );
};

export default Banner;
