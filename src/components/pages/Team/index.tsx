import { TeamCollection } from '@/data/collection';
import { Button } from '@/storybook';
import { PAGE_ROUTES } from '@/utils/routes';
import Link from 'next/link';
import React from 'react';
import tw from 'twin.macro';
import Slide from './Slide';

const Team: React.FC<{ data: TeamCollection }> = ({ data }) => {
  return (
    <div
      css={tw`flex flex-col  pt-[3.625rem] pb-[9.0625rem] md:(flex-col-reverse pt-[1rem] pb-[7.5rem] gap-10)`}
    >
      <Link
        href={`${PAGE_ROUTES.HOME}#location`}
        css={tw`md:(block px-5) hidden `}
      >
        <Button type='primary' css={tw`h-[2.875rem] px-7 md:w-full`}>
          <div css={tw`flex items-center gap-2`}>
            <p
              css={tw`text-[1.375rem] font-medium leading-2 text-color_5 md:text-lg`}
            >
              Book Now
            </p>
            <img
              src='/svg/arrow-up.svg'
              alt='icon-arrow-up'
              css={tw`md:(w-[1.125rem] h-[1.125rem]) w-[1.375rem] h-[1.375rem]`}
            />
          </div>
        </Button>
      </Link>
      <Slide data={data} />

      <div
        css={tw`w-[60.625rem] m-auto flex flex-col items-center justify-center gap-8 pt-12 lg:(w-full px-[1.875rem] gap-7) md:(!px-5 pt-5)`}
      >
        <h1
          css={tw`text-[5.625rem] font-montserrat font-[900] leading-[5.0625rem] uppercase text-center text-color_2 md:(text-[3.125rem] leading-[2.8125rem])`}
        >
          {data.attributes?.teamInfo?.title}
        </h1>
        <p
          css={tw`text-xl text-color_2 leading-[1.875rem] text-center md:(text-lg leading-[1.6875rem])`}
        >
          {data?.attributes?.teamInfo?.description}
        </p>
        <Link href={`${PAGE_ROUTES.HOME}#location`} css={tw`md:hidden`}>
          <Button type='primary' css={tw`h-[2.875rem] px-7 md:w-full`}>
            <div css={tw`flex items-center gap-2`}>
              <p
                css={tw`text-[1.375rem] font-medium leading-2 text-color_5 md:text-lg`}
              >
                Book Now
              </p>
              <img
                src='/svg/arrow-up.svg'
                alt='icon-arrow-up'
                css={tw`md:(w-[1.125rem] h-[1.125rem]) w-[1.375rem] h-[1.375rem]`}
              />
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Team;
