import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';
import Link from 'next/link';
import { WhyChooseUsCollection } from '@/data/collection';
import { previewAssetUrl } from '@/data/helper';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Image from 'next/image';

const WhyChooseUs: React.FC<{ data: WhyChooseUsCollection }> = ({ data }) => {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray('.fadeInUp').forEach((section: any, index) => {
        gsap.fromTo(
          section,
          { opacity: 0.4 },
          {
            opacity: 1,
            duration: 2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top center',
              end: 'bottom center',
              scrub: 1,
              onEnter: () => {
                setCurrentItem(index);
              },
              onLeaveBack: () => {
                setCurrentItem(index > 0 ? index - 1 : 0);
              },
            },
          }
        );
      });
    }
  }, []);

  const Main = () => {
    return (
      <div
        css={tw`bg-color_2 h-[60.1875rem] flex items-center w-full relative px-[8.4375rem] xl:(!h-full px-[1.875rem] py-[3.75rem]) md:!px-5`}
      >
        <div css={tw`absolute top-[-4.6875rem] left-0 lg:hidden`}>
          <Image
            src='/icon_1.png'
            alt='icon-1'
            width='0'
            height='0'
            sizes='100vw'
            css={tw`w-auto h-auto`}
          />
        </div>
        <div css={tw`absolute bottom-[-4.6875rem] right-0 lg:hidden`}>
          <Image
            src='/icon_2.png'
            alt='icon-2'
            width='0'
            height='0'
            sizes='100vw'
            css={tw`w-auto h-auto`}
          />
        </div>
        <div css={tw`flex items-center gap-[4.375rem] w-full`}>
          <div css={tw`w-[25rem] h-[43.75rem] xl:hidden`}>
            <Image
              src={previewAssetUrl(
                data?.causes[currentItem]?.image?.data?.attributes?.url
              )}
              alt={`banner-${currentItem}`}
              width='0'
              height='0'
              sizes='100vw'
              css={tw`w-full h-full object-cover rounded-[1.25rem] transition-all duration-500`}
            />
          </div>
          <div
            css={tw`flex flex-col gap-[3.75rem] w-[43.4375rem] m-auto lg:w-full md:gap-[1.5rem]`}
          >
            <div
              css={tw`flex items-center gap-[1.5625rem] md:(gap-[.75rem] items-start) `}
            >
              <Image
                src={previewAssetUrl(data?.icon?.data?.attributes?.url)}
                alt={data?.title}
                width='0'
                height='0'
                sizes='100vw'
                css={tw`md:(w-[2rem] h-[2rem]) h-[3.1875rem] w-[3.1875rem]`}
              />
              <h1
                css={tw`font-montserrat text-[3.125rem] font-[900] leading-[3rem] uppercase text-white md:(text-[1.875rem] !leading-[2rem])`}
              >
                {data?.title}
              </h1>
            </div>
            <div css={tw`flex flex-col`}>
              {data?.causes.map((item, index) => (
                <>
                  {index !== 0 && (
                    <div css={tw`border-b border-white border-dashed my-10`} />
                  )}
                  <div
                    css={[
                      tw`flex gap-[3.6875rem] lg:(flex-col gap-4) cursor-pointer transition-opacity duration-500 `,
                      currentItem === index ? tw`!opacity-100` : tw`opacity-40`,
                    ]}
                    className='fadeInUp'
                    onMouseEnter={() => {
                      setCurrentItem(index);
                    }}
                  >
                    <div css={tw`flex gap-5 lg:flex-col`}>
                      <div
                        css={tw`w-[3.125rem] h-[3.125rem] border border-white rounded-full flex items-center justify-center`}
                      >
                        <p
                          css={tw`text-color_5 text-[1.75rem] font-medium leading-7`}
                        >
                          {index + 1}
                        </p>
                      </div>
                      <div css={tw`w-[14.375rem] lg:!w-full`}>
                        <p
                          css={tw`text-color_5 text-[2rem] font-medium leading-8 md:(text-[1.5rem] leading-[1.75rem]) whitespace-pre-line  md:hidden`}
                        >
                          {item?.title}
                        </p>
                        <p
                          css={tw`text-color_5 text-[2rem] font-medium leading-8 md:(text-[1.5rem] leading-[1.75rem]) hidden md:block whitespace-pre-line`}
                        >
                          {item?.mobileTitle}
                        </p>
                      </div>
                    </div>

                    <div css={tw`flex flex-col gap-5`}>
                      <p
                        css={tw`text-white text-lg leading-[1.6875rem] md:text-[1.125rem]`}
                      >
                        {item?.description}
                      </p>
                      <Link href={item?.link || ''}>
                        <div css={tw`flex items-center gap-3`}>
                          <p
                            css={tw`text-color_6 text-[1.375rem] font-medium leading-2 underline cursor-pointer md:text-[1.125rem]`}
                          >
                            {item?.textLink}
                          </p>
                          <Image
                            src='/svg/arrow-up-yellow.svg'
                            alt='icon-arrow-up-yellow'
                            width='0'
                            height='0'
                            sizes='100vw'
                            css={tw`w-[1.125rem] h-[1.125rem]`}
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <Main />;
};

export default WhyChooseUs;
