import { ForAllYourPetNeedsCollection } from '@/data/collection';
import { previewAssetUrl } from '@/data/helper';
import { Button } from '@/storybook';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import tw from 'twin.macro';

const ForAllYourPetNeeds: React.FC<{ data: ForAllYourPetNeedsCollection }> = ({
  data,
}) => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      css={tw`pr-[8.4375rem] py-[3.125rem] flex gap-[4.375rem] bg-white lg:(px-[1.875rem] py-10 flex-col gap-10) md:!px-5`}
    >
      <div css={tw`flex-1`}>
        <Image
          src={previewAssetUrl(data?.image.data?.attributes?.url)}
          alt={data?.title}
          width='0'
          height='0'
          sizes='100vw'
          css={tw`w-full object-cover rounded-r-2xl md:(!h-[14.375rem]) lg:rounded-2xl  h-[21.875rem] `}
        />
      </div>
      <div css={tw`flex flex-col justify-between flex-1 lg:gap-10`}>
        <div css={tw`w-[28.125rem] flex flex-col gap-8 xl:!w-full lg:gap-3`}>
          <h1
            css={tw`text-[3.125rem] leading-[3.75rem] [letter-spacing: -0.0938rem] text-text_primary md:(text-3xl leading-normal) sm:text-center`}
          >
            {data?.title.split(' ').slice(0, -3).join(' ')}
            <br css={tw`lg:hidden`} />{' '}
            <span css={tw`font-semibold`}>
              {data?.title.split(' ').slice(3).join(' ')}
            </span>
          </h1>
          <p css={tw`text-lg sm:text-center`}>{data?.description}</p>
        </div>
        <div
          css={tw`flex items-center justify-between md:(flex-col items-start gap-10)`}
        >
          <Link href={data?.buttonVisitOurShop?.link} css={tw`md:w-full`}>
            <Button
              css={tw`h-[3rem] !border-text_primary !bg-transparent md:w-full`}
            >
              <div css={tw`flex items-center gap-2`}>
                <p css={tw`text-lg font-semibold leading-7`}>
                  {data?.buttonVisitOurShop?.text}
                </p>
                <Image
                  src='/svg/cart.svg'
                  alt='icon-cart'
                  width='0'
                  height='0'
                  sizes='100vw'
                  css={tw`w-[1.5rem] h-[1.5rem]`}
                />
              </div>
            </Button>
          </Link>
          <div
            css={tw`flex items-center gap-1.5 cursor-pointer md:(w-full justify-center)`}
            onClick={backToTop}
          >
            <p
              css={tw`text-color_4 text-[1.375rem] font-medium leading-2 underline md:text-xl`}
            >
              Back to Top
            </p>
            <img
              src='/svg/arrow_up_red.svg'
              alt='icon-arrow-up-red'
              css={tw`w-[1.0625rem] h-[1.0625rem]`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForAllYourPetNeeds;
