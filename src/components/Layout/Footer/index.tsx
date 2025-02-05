import { fetchFooter } from '@/data/fetch';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';
import Image from 'next/image';

const Footer = () => {
  const [footer, setFooter] = useState<any>();
  const fetchDataFooter = async () => {
    try {
      const data = await fetchFooter();
      setFooter(data?.data?.attributes);
    } catch (error) {
      console.error('Error fetching:', error);
    }
  };

  useEffect(() => {
    fetchDataFooter();
  }, []);

  return (
    <div
      className='footer'
      css={tw`flex flex-col gap-10 px-[8.4375rem] pt-24 pb-20 bg-color_2 lg:(px-[1.875rem] py-[3.75rem]) md:!px-5`}
    >
      <h1
        css={tw`text-color_5 text-3xl font-semibold [letter-spacing: -0.0563rem] leading-normal`}
      >
        {footer?.data?.quick_links?.name}
      </h1>
      <div css={tw`flex items-center gap-24 lg:(flex-col items-start gap-0)`}>
        <div css={tw`flex flex-col gap-5 lg:(pb-0 gap-3)`}>
          <ul>
            {footer?.data?.quick_links?.data.map((item) => (
              <Link href={item?.link}>
                <li>
                  <p
                    css={tw`text-color_5 text-xl leading-[2.75rem] underline cursor-pointer`}
                  >
                    {item?.name}
                  </p>
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div css={tw`flex flex-col gap-5 lg:(gap-3 mt-0)`}>
          <div css={tw`flex-1`}>
            <ul>
              {footer?.data?.contact_us?.data?.map((item) => (
                <Link href={item?.link} target={item?.isBlank ? '_blank' : ''}>
                  <li>
                    <p
                      css={tw`text-color_5 text-xl leading-[2.75rem] underline cursor-pointer`}
                    >
                      {item?.name}
                    </p>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        css={tw`flex items-center gap-5 pb-20 mt-[-0.625rem] md:(mt-[-1.25rem] pb-10)`}
      >
        <div
          css={tw`cursor-pointer`}
          onClick={() => window.open(footer?.data?.social?.facebook, '_blank')}
        >
          <Image
            src='/fb.png'
            alt='icon-fb'
            width='0'
            height='0'
            sizes='100vw'
            css={tw`w-[2.75rem] h-[2.75rem]`}
          />
        </div>
        <div
          css={tw`cursor-pointer`}
          onClick={() => window.open(footer?.data?.social?.instagram, '_blank')}
        >
          <Image
            src='/inta.png'
            alt='icon-instagram'
            width='0'
            height='0'
            sizes='100vw'
            css={tw`w-[2.75rem] h-[2.75rem]`}
          />
        </div>
      </div>

      <div css={tw`flex flex-col gap-5`}>
        <div css={tw`flex flex-col`}>
          <h1
            css={tw`font-montserrat text-color_6 text-[4.375rem] font-black leading-[4.375rem] uppercase md:(text-[2.25rem] leading-[2.25rem])`}
          >
            gaia vets
          </h1>
          <h1
            css={tw`font-montserrat text-color_8 text-[4.375rem] font-black leading-[4.375rem] uppercase md:(text-[2.25rem] leading-[2.25rem])`}
          >
            for every pet
          </h1>
        </div>
        <div css={tw`flex flex-col md:gap-2`}>
          <div css={tw`flex items-center`}>
            <Link href={`${footer?.data?.policy[0]?.link}`}>
              <p
                css={tw`text-color_5 text-sm leading-[2.75rem] underline cursor-pointer whitespace-nowrap md:leading-[18px]`}
              >
                {footer?.data?.policy[0]?.name}
              </p>
            </Link>
            <div
              css={tw`w-[.0625rem] h-[1.875rem] bg-color_5 mx-5 rotate-180 `}
            />
            <Link href={`${footer?.data?.policy[1]?.link}`}>
              <p
                css={tw`text-color_5 text-sm leading-[2.75rem] underline cursor-pointer whitespace-nowrap md:leading-[18px] `}
              >
                {footer?.data?.policy[1]?.name}
              </p>
            </Link>
            <div
              css={tw`w-[.0625rem] h-[1.875rem] bg-color_5 mx-5 rotate-180 md:hidden`}
            />
            <p
              css={tw`text-color_5 text-sm leading-normal whitespace-nowrap block md:hidden`}
            >
              {footer?.data?.policy[2]?.name}
            </p>
          </div>
          <p
            css={tw`text-color_5 text-sm leading-normal whitespace-nowrap md:block hidden`}
          >
            {footer?.data?.policy[2]?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
