import React from 'react';
import tw from 'twin.macro';
import Link from 'next/link';
import { PAGE_ROUTES } from '@/utils/routes';
import { createSlug } from '@/data/helper';

const MoreGuide: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div
      css={[
        tw`flex flex-col gap-5 pt-[7.5rem] w-[47.875rem] m-auto xl:w-full md:(pt-10)`,
      ]}
    >
      <p
        css={tw`text-color_4 font-montserrat  text-[2rem] leading-[2.375rem] uppercase font-black md:text-[1.875rem]`}
      >
        RELATED ARTICLES
      </p>

      <div css={tw`flex flex-col gap-2`}>
        {data?.data.map((item) => (
          <Link
            href={`${PAGE_ROUTES.GUIDES}/${item?.attributes?.slug || createSlug(item?.attributes?.title)}`}
          >
            <div css={tw`flex-1 flex gap-1.5`}>
              <span css={tw`text-color_6`}>•</span>
              <p
                css={tw`text-color_2 text-lg leading-[1.6875rem] line-clamp-2 cursor-pointer transition-all duration-200 underline font-medium`}
                className=' hover:text-color_4 '
              >
                {item?.attributes?.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoreGuide;
