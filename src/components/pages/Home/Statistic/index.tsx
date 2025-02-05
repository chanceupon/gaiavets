import React, { useState } from 'react';
import tw from 'twin.macro';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { GaiaGuideCollection } from '@/data/collection';

const Statistic: React.FC<{ data: GaiaGuideCollection }> = ({ data }) => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [hasBeenViewed, setHasBeenViewed] = useState(false);

  if (inView && !hasBeenViewed) {
    setHasBeenViewed(true);
  } else if (!inView && hasBeenViewed) {
    setHasBeenViewed(false);
  }

  return (
    <div
      ref={ref}
      css={tw`h-[13.1875rem] flex items-center pt-7 px-[8.4375rem] lg:(px-[1.875rem] pb-5) md:(pt-10 flex-col h-full !px-5) `}
    >
      <div css={tw`flex-1 flex items-center justify-center `}>
        <div
          css={tw`flex flex-col items-center justify-center gap-[.8125rem] lg:gap-0`}
        >
          <h1
            css={tw`text-color_2 text-[6.25rem] leading-[7.5rem] uppercase !font-light lg:(text-[4.375rem] !leading-normal) `}
          >
            {inView && (
              <CountUp
                start={1}
                end={data?.achievements[0]?.number || 0}
                duration={3}
                className='text-color_2'
              />
            )}
          </h1>
          <p
            css={tw`text-color_2 text-3xl leading-9 text-center lg:(text-xl leading-[1.875rem]) whitespace-pre-line`}
          >
            {data?.achievements[0]?.text}
          </p>
        </div>
      </div>
      <div
        css={tw`border-r h-full border-text_primary border-dashed mx-10 md:(border-b w-full h-[.0625rem] mx-0 mt-10 mb-5)`}
      />
      <div css={tw`flex-1 flex items-center justify-center `}>
        <div
          css={tw`flex flex-col items-center justify-center gap-[.8125rem] lg:gap-0`}
        >
          <h1
            css={tw`text-color_2 text-[6.25rem] leading-[7.5rem] uppercase !font-light lg:(text-[4.375rem] !leading-normal) `}
          >
            {inView && (
              <CountUp
                start={1}
                end={data?.achievements[1]?.number || 0}
                duration={3}
                className='text-color_2'
              />
            )}
          </h1>
          <p
            css={tw`text-color_2 text-3xl  leading-9 text-center lg:(text-xl leading-[1.875rem]) whitespace-pre-line `}
          >
            {data?.achievements[1]?.text}
          </p>
        </div>
      </div>
      <div
        css={tw`border-r h-full border-text_primary border-dashed mx-10 md:(border-b w-full h-[.0625rem] mx-0 mt-10 mb-5)`}
      />
      <div css={tw`flex-1 flex items-center justify-center`}>
        <div
          css={tw`flex flex-col items-center justify-center gap-[.8125rem] lg:gap-0`}
        >
          <h1
            css={tw`text-color_2 text-[6.25rem] leading-[7.5rem] uppercase !font-light lg:(text-[4.375rem] !leading-normal)  `}
          >
            {inView && (
              <CountUp
                start={1}
                end={data?.achievements[2]?.number || 0}
                duration={3}
                className='text-color_2'
              />
            )}
          </h1>
          <p
            css={tw`text-color_2 text-3xl leading-9 text-center lg:(text-xl leading-[1.875rem]) whitespace-pre-line `}
          >
            {data?.achievements[2]?.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
