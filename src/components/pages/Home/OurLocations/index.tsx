import { OurLocationsCollection } from '@/data/collection';
import { formatPhoneNumber } from '@/data/helper';
import { Button } from '@/storybook';
import { PAGE_ROUTES } from '@/utils/routes';
import Link from 'next/link';
import React from 'react';
import tw from 'twin.macro';

const OurLocations: React.FC<{ data: OurLocationsCollection }> = ({ data }) => {
  return (
    <div
      id='location'
      css={tw`px-[8.4375rem] py-[5.4375rem] lg:(px-[1.875rem] py-10) md:!px-5`}
    >
      <h1
        css={tw`font-montserrat text-[3.125rem] font-[900] uppercase leading-[3rem] text-color_2 md:(text-3xl leading-normal)`}
      >
        {data?.title}
      </h1>
      <div
        css={tw`w-full h-full flex items-center gap-3 pt-11 lg:(flex-col items-start gap-[3.75rem] pt-7)`}
      >
        {data?.data.map((item, index) => (
          <div css={tw`flex-1 flex flex-col justify-between w-full h-[20rem]`}>
            <div css={tw`flex flex-col gap-3`}>
              <h2
                css={tw`text-3xl font-semibold [letter-spacing: -0.0563rem] text-color_11 md:(text-2xl leading-normal)`}
              >
                {item?.name}
              </h2>
              <div css={tw`flex flex-col gap-2.5`}>
                <p
                  css={tw`text-color_11 text-xl font-semibold [letter-spacing: -0.0375rem] md:text-lg whitespace-pre-line`}
                >
                  {item?.address}
                </p>
                <div css={tw`flex flex-col`}>
                  <p
                    css={tw`text-color_11 text-xl font-semibold [letter-spacing: -0.0375rem] md:text-lg`}
                  >
                    {item?.normalDay}:{' '}
                    <span css={tw`!font-normal text-color_11`}>
                      {item?.normalDayHour}
                    </span>
                  </p>
                  <p
                    css={tw`text-color_11 text-xl font-semibold [letter-spacing: -0.0375rem] md:text-lg`}
                  >
                    {item?.weekend}:
                    <span css={tw`!font-normal text-color_11`}>
                      {' '}
                      {item?.weekendHour}
                    </span>
                  </p>
                  {item?.note && (
                    <span
                      css={tw`text-xl text-color_11 [letter-spacing: -0.0375rem] md:text-lg`}
                    >
                      {item?.note}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div
              css={tw`flex items-center gap-5 lg:(mt-8) md:(flex-col items-start gap-4)`}
            >
              <a href={formatPhoneNumber(item?.phone)} css={tw`md:w-full`}>
                <Button type='primary' css={tw`h-[3rem] md:w-full`}>
                  <div css={tw`flex items-center gap-2`}>
                    <p css={tw`text-lg leading-7 text-color_5`}>
                      {item?.phoneText}
                    </p>
                    <img
                      src='/svg/phone_2.svg'
                      alt='icon-phone-2'
                      css={tw`w-[1.375rem] h-[1.375rem]`}
                    />
                  </div>
                </Button>
              </a>
              <Link
                href={`${PAGE_ROUTES.LOCATIONS}/#${index + 1}`}
                css={tw`md:w-full`}
              >
                <Button
                  css={tw`h-[3rem] !border-color_2 !bg-transparent md:w-full`}
                >
                  <p css={tw`text-lg font-semibold leading-7 text-color_2`}>
                    Learn More
                  </p>
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurLocations;
