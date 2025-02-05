import React from 'react';
import tw from 'twin.macro';
import { Icon, IconsWrapper } from './styled';
import { GaiaGuideCollection } from '@/data/collection';

const GaiaGuide: React.FC<{ data: GaiaGuideCollection }> = ({ data }) => {
  return (
    <div
      css={tw`h-[53rem] flex items-center justify-center relative flex-col gap-6 lg:gap-0 lg:h-[40.625rem] sm:!h-[31.25rem]`}
    >
      <IconsWrapper>
        <Icon
          src='/svg/icon_1.svg'
          alt='icon-1'
          top='10%'
          left='48%'
          css={tw`lg:(w-[3.125rem] h-[3.125rem]) sm:(!w-[2rem] !h-[2rem])`}
        />
        <Icon
          src='/svg/icon_2.svg'
          alt='icon-2'
          top='12%'
          left='65.5%'
          css={tw`lg:(w-[3.125rem] h-[3.125rem]) sm:(!w-[2rem] !h-[2rem] left-[70%]) `}
        />
        <Icon
          src='/svg/icon_3.svg'
          alt='icon-3'
          top='18%'
          left='79.8%'
          css={tw`lg:(w-[3.125rem] h-[3.125rem]) sm:(!w-[2rem] !h-[2rem] left-[85%] top-[25%])`}
        />
        <Icon
          src='/svg/icon_4.svg'
          alt='icon-4'
          top='42%'
          left='86%'
          css={tw`xxl:left-[89%]  lg:(w-[3.125rem] h-[3.125rem]) sm:(!w-[2rem] !h-[2rem] !left-[88%]) `}
        />
        <Icon
          src='/svg/icon_5.svg'
          alt='icon-5'
          top='63.5%'
          left='86.75%'
          css={tw`lg:(w-[3.125rem] h-[3.125rem]) sm:(!w-[2rem] !h-[2rem])`}
        />
        <Icon
          src='/svg/icon_6.svg'
          alt='icon-6'
          top='80%'
          left='79.5%'
          css={tw`lg:(w-[3.125rem] h-[3.125rem]) sm:(!w-[2rem] !h-[2rem])`}
        />
        <Icon
          src='/svg/icon_7.svg'
          alt='icon-7'
          top='82%'
          left='63.5%'
          css={tw`lg:(w-[3.125rem] h-[3.125rem]) sm:(!w-[2rem] !h-[2rem])`}
        />
        <Icon
          src='/svg/icon_8.svg'
          alt='icon-8'
          top='83.5%'
          left='48.5%'
          css={tw`lg:(w-[3.125rem] h-[3.125rem]) sm:(!w-[2rem] !h-[2rem])`}
        />
        <Icon
          src='/svg/icon_9.svg'
          alt='icon-9'
          top='80.5%'
          left='39.8%'
          css={tw`lg:(w-[3.125rem] h-[3.125rem]) sm:(!w-[2rem] !h-[2rem] left-[35%]) `}
        />
        <Icon
          src='/svg/icon_10.svg'
          alt='icon-10'
          top='83.5%'
          left='24%'
          css={tw`lg:(w-[3.125rem] h-[3.125rem]) sm:(!w-[2rem] !h-[2rem] left-[20%] top-[80%])`}
        />
        <Icon
          src='/svg/icon_11.svg'
          alt='icon-11'
          top='70%'
          left='12.5%'
          css={tw`lg:(w-[3.125rem] h-[3.125rem]) sm:(!w-[2rem] !h-[2rem] left-[5%] top-[64%])`}
        />
        <Icon
          src='/svg/icon_12.svg'
          alt='icon-12'
          top='42%'
          left='6%'
          css={tw`xxl:left-[3%] lg:(w-[3.125rem] h-[3.125rem]) sm:(!w-[2rem] !h-[2rem])`}
        />
        <Icon
          src='/svg/icon_13.svg'
          alt='icon-13'
          top='22.5%'
          left='12%'
          css={tw`lg:(w-[3.125rem] h-[3.125rem]) sm:(!w-[2rem] !h-[2rem] left-[6%] top-[25%]) `}
        />
        <Icon
          src='/svg/icon_14.svg'
          alt='icon-14'
          top='12%'
          left='19.5%'
          css={tw`lg:(w-[3.125rem] h-[3.125rem]) sm:(!w-[2rem] !h-[2rem] !left-[12%] )`}
        />
        <Icon
          src='/svg/icon_15.svg'
          alt='icon-15'
          top='9.5%'
          left='27.5%'
          css={tw`lg:(w-[3.125rem] h-[3.125rem]) sm:(!w-[2rem] !h-[2rem])`}
        />
      </IconsWrapper>

      <div>
        <h2
          css={tw`text-text_primary text-3xl font-semibold [letter-spacing: -0.0563rem] lg:(text-lg font-bold)`}
        >
          {data?.smallText}
        </h2>
      </div>
      <div
        css={tw`w-[61.25rem] xl:scale-[0.85] lg:(w-[80%]) md:!w-[90%] sm:!w-[100%] sm:!scale-[0.9]`}
      >
        <h1
          css={tw`text-color_4 font-montserrat whitespace-pre-line text-[4.375rem] font-[900] leading-[4.375rem] uppercase text-center lg:(text-[2.5rem] leading-10) sm:hidden`}
        >
          {data?.bigText}
        </h1>
        <h1
          css={tw`text-color_4 font-montserrat whitespace-pre-line text-[4.375rem] font-[900] leading-[4.375rem] uppercase text-center lg:(text-[2.5rem] leading-10) sm:block hidden`}
        >
          {data?.bigTextMobile}
        </h1>
      </div>
    </div>
  );
};

export default GaiaGuide;
