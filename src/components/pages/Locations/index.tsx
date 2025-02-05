import { Button } from '@/storybook';
import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';
import FAQ from './FAQ';
import { useRouter } from 'next/router';
import LocationTips1 from './LocationTips1';
import LocationTips2 from './LocationTips2';
import Link from 'next/link';
import { formatPhoneNumber } from '@/data/helper';

const Locations = ({ data }) => {
  const router = useRouter();
  const [isOpenTip1, setIsOpenTip1] = useState(false);
  const [isOpenTip2, setIsOpenTip2] = useState(false);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id) => {
    setTimeout(() => {
      if (id === '1') {
        window.scrollTo({
          top: 0,
          behavior: 'auto',
        });
      } else {
        const element = document.getElementById(id);
        if (element) {
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY - 20;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth',
          });
        }
      }
    }, 10);
  };

  const handleLocationTip1 = () => {
    setIsOpenTip1(true);
    scrollToSection(4);
  };

  const handleLocationTip2 = () => {
    setIsOpenTip2(true);
    scrollToSection(5);
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);

        scrollToSection(id);
      }
    };

    if (router.asPath.includes('#')) {
      handleHashChange();
    }

    router.events.on('hashChangeComplete', handleHashChange);

    return () => {
      router.events.off('hashChangeComplete', handleHashChange);
    };
  }, [router]);

  return (
    <div
      css={tw`px-[8.4375rem] py-20 lg:(px-[1.875rem] pt-[1.5rem] pb-[3.75rem]) md:!px-5`}
    >
      <div id='1'>
        <div css={tw`flex flex-col lg:(flex-col-reverse gap-10)`}>
          <div css={tw`flex justify-between gap-[2.0625rem] lg:(flex-col)`}>
            <div css={tw`w-[45.625rem] lg:w-full`}>
              <h1
                css={tw`font-montserrat text-[5.625rem] font-[900] leading-[5.0625rem] uppercase text-color_2 md:(text-[3.125rem] leading-[2.8125rem])`}
              >
                Gaia Vets Jalan Besar
              </h1>
            </div>
            <div css={tw`w-[25.3125rem] flex flex-col justify-end lg:w-full`}>
              <p
                css={tw`text-xl text-color_2 leading-[1.875rem] md:(text-lg leading-[1.6875rem])`}
              >
                Our veterinary centre in central Singapore is easy to spot,
                right at the start of the road on 415 Jalan Besar. Get{' '}
                <span
                  css={tw`text-xl text-color_2 font-bold underline cursor-pointer md:(text-lg leading-[1.6875rem])`}
                  onClick={handleLocationTip1}
                >
                  location tips
                </span>{' '}
                below.
              </p>
            </div>
          </div>
          <div css={tw`pt-[2.25rem] lg:pt-0`}>
            <div
              css={tw`w-full h-[41.125rem] relative lg:h-[28.125rem] md:!h-[18.75rem]`}
            >
              <img
                src='/location/jinBesar-banner.png'
                alt='Gaia Vets Jalan Besar'
                css={tw`w-full h-full object-cover`}
              />
            </div>
          </div>
        </div>
        <div
          css={tw`pt-[3.75rem] flex justify-between gap-[2.0625rem] h-full lg:(flex-col justify-start) md:(pt-7 gap-7)`}
        >
          <div
            css={tw`w-[29.375rem] h-[20rem] flex flex-col justify-between lg:w-full md:(h-full gap-7)`}
          >
            <div css={tw`flex flex-col gap-3 w-full`}>
              <h2
                css={tw`text-color_2 text-3xl font-semibold leading-normal [letter-spacing: -0.0563rem] md:text-[1.75rem]`}
              >
                Gaia Vets @ Jalan Besar
              </h2>
              <div css={tw`flex flex-col gap-2.5`}>
                <p
                  css={tw`text-color_11 text-xl font-semibold leading-7 [letter-spacing: -0.0375rem] md:(text-lg leading-6)`}
                >
                  415 Jalan Besar, S(209016)
                </p>
                <div css={tw`flex flex-col`}>
                  <p
                    css={tw`text-color_11 text-xl font-semibold [letter-spacing: -0.0375rem] md:(text-lg leading-6)`}
                  >
                    Mon - Fri:{' '}
                    <span css={tw`!font-normal text-color_11`}>
                      {' '}
                      10am - 10pm
                    </span>
                  </p>
                  <p
                    css={tw`text-color_11 text-xl font-semibold [letter-spacing: -0.0375rem] md:(text-lg leading-6)`}
                  >
                    Sat - Sun:
                    <span css={tw`!font-normal text-color_11`}> 9am - 9pm</span>
                  </p>
                  <span
                    css={tw`text-xl text-color_11 [letter-spacing: -0.0375rem] md:(text-lg leading-6)`}
                  >
                    (Closed on public holidays)
                  </span>
                </div>
                <p
                  css={tw`text-color_11 text-xl [letter-spacing: -0.0375rem] md:(text-lg leading-6)`}
                >
                  Hospital visiting hours by appointment only
                </p>
              </div>
            </div>
            <div css={tw`flex items-center gap-5`}>
              <Link href={formatPhoneNumber('6950 4533')} css={tw`md:!w-1/2`}>
                <Button type='primary' css={tw`h-[3rem] md:w-full`}>
                  <div css={tw`flex items-center gap-2`}>
                    <p css={tw`text-lg font-semibold leading-7 text-color_5`}>
                      Call Now
                    </p>
                    <img
                      src='/svg/phone_white.svg'
                      alt='icon-phone-white'
                      css={tw`w-[1.375rem] h-[1.375rem]`}
                    />
                  </div>
                </Button>
              </Link>
              <Link
                href='https://wa.me/6569504533'
                target='_blank'
                rel='noopener noreferrer'
                css={tw`md:!w-1/2`}
              >
                <Button
                  type='primary'
                  css={tw`h-[3rem] !bg-text_primary md:w-full`}
                >
                  <div css={tw`flex items-center gap-2`}>
                    <p css={tw`text-lg font-semibold leading-7 text-color_5`}>
                      Whatsapp
                    </p>
                    <img
                      src='/svg/phone_3.svg'
                      alt='icon-phone-3'
                      css={tw`w-[1.6875rem] h-[1.75rem]`}
                    />
                  </div>
                </Button>
              </Link>
            </div>
          </div>

          <div
            className='mapouter table'
            css={tw`w-[56.25rem] h-[20rem] xxl:w-[41.6875rem] lg:!w-full`}
          >
            <div className='gmap_canvas relative overflow-hidden bg-white h-full w-full'>
              <iframe
                src={data?.locations[0]?.mapIframe}
                className='relative z-10 h-full w-full'
              />
            </div>
          </div>
        </div>
        <div id='4'>
          <LocationTips1 isOpenTip1={isOpenTip1} />
        </div>
      </div>

      <div
        css={tw`border-b border-b-color_4 mb-20 mt-[3.25rem] md:(mb-10 mt-2) `}
      />

      <div id='2'>
        <div css={tw`flex flex-col lg:(flex-col-reverse gap-10)`}>
          <div css={tw`flex justify-between gap-[2.0625rem] lg:(flex-col)`}>
            <div css={tw`w-[45.625rem] lg:w-full`}>
              <h1
                css={tw`font-montserrat text-[5.625rem] font-[900] leading-[5.0625rem] uppercase text-color_2 md:(text-[3.125rem] leading-[2.8125rem])`}
              >
                Gaia Vets Parksuites
              </h1>
            </div>
            <div css={tw`w-[29.375rem] flex flex-col justify-end lg:w-full`}>
              <p
                css={tw`text-xl text-color_2 leading-[1.875rem] md:(text-lg leading-[1.6875rem])`}
              >
                Our clinic on Singapore's west side offers a serene, park-like
                setting where your pet can feel at ease. Get{' '}
                <span
                  css={tw`text-xl text-color_2 font-bold underline cursor-pointer md:(text-lg leading-[1.6875rem])`}
                  onClick={handleLocationTip2}
                >
                  location tips
                </span>{' '}
                below.
              </p>
            </div>
          </div>
          <div css={tw`pt-[2.25rem] lg:pt-0`}>
            <div
              css={tw`w-full h-[41.125rem] relative lg:h-[28.125rem] md:!h-[18.75rem]`}
            >
              <img
                src='/location/parksuites-banner.png'
                alt='Gaia Vets Parksuites'
                css={tw`w-full h-full object-cover`}
              />
            </div>
          </div>
        </div>

        <div
          css={tw`pt-[3.75rem] flex justify-between gap-[2.0625rem] h-full lg:(flex-col justify-start) md:(pt-7 gap-7)`}
        >
          <div
            css={tw`w-[29.375rem] h-[20rem] flex flex-col justify-between lg:w-full md:(h-full gap-7)`}
          >
            <div css={tw`flex flex-col gap-3 w-full `}>
              <h2
                css={tw`text-color_2 text-3xl font-semibold leading-normal [letter-spacing: -0.0563rem] md:text-[1.75rem]`}
              >
                Gaia Vets @ Parksuites
              </h2>
              <div css={tw`flex flex-col gap-2.5`}>
                <p
                  css={tw`text-color_11 text-xl font-semibold leading-7 [letter-spacing: -0.0375rem] md:(text-lg leading-6)`}
                >
                  24 Holland Grove Rd, #01-12/13 S(278803)
                </p>
                <div css={tw`flex flex-col`}>
                  <p
                    css={tw`text-color_11 text-xl font-semibold [letter-spacing: -0.0375rem] md:(text-lg leading-6)`}
                  >
                    Mon - Fri:{' '}
                    <span css={tw`!font-normal text-color_11`}>
                      {' '}
                      10am - 10pm
                    </span>
                  </p>
                  <p
                    css={tw`text-color_11 text-xl font-semibold [letter-spacing: -0.0375rem] md:(text-lg leading-6)`}
                  >
                    Sat - Sun:
                    <span css={tw`!font-normal text-color_11`}> 9am - 5pm</span>
                  </p>
                  <span
                    css={tw`text-xl text-color_11 [letter-spacing: -0.0375rem] md:(text-lg leading-6)`}
                  >
                    (Closed on public holidays)
                  </span>
                </div>
              </div>
            </div>
            <div css={tw`flex items-center gap-5`}>
              <Link href={formatPhoneNumber('6727 7511')} css={tw`md:!w-1/2`}>
                <Button type='primary' css={tw`h-[3rem] md:w-full`}>
                  <div css={tw`flex items-center gap-2`}>
                    <p css={tw`text-lg font-semibold leading-7 text-color_5`}>
                      Call Now
                    </p>
                    <img
                      src='/svg/phone_white.svg'
                      alt='icon-phone-white'
                      css={tw`w-[1.375rem] h-[1.375rem]`}
                    />
                  </div>
                </Button>
              </Link>
              <Link
                href='https://wa.me/6569504533'
                target='_blank'
                rel='noopener noreferrer'
                css={tw`md:!w-1/2`}
              >
                <Button
                  type='primary'
                  css={tw`h-[3rem] !bg-text_primary md:w-full`}
                >
                  <div css={tw`flex items-center gap-2`}>
                    <p css={tw`text-lg font-semibold leading-7 text-color_5`}>
                      Whatsapp
                    </p>
                    <img
                      src='/svg/phone_3.svg'
                      alt='icon-phone-3'
                      css={tw`w-[1.6875rem] h-[1.75rem]`}
                    />
                  </div>
                </Button>
              </Link>
            </div>
          </div>

          <div
            className='mapouter table'
            css={tw`w-[56.25rem] h-[20rem] xxl:w-[41.6875rem] lg:!w-full`}
          >
            <div className='gmap_canvas relative overflow-hidden bg-white h-full w-full'>
              <iframe
                src={data?.locations[1]?.mapIframe}
                className='relative z-10 h-full w-full'
              />
            </div>
          </div>
        </div>
        <div id='5'>
          <LocationTips2 isOpenTip2={isOpenTip2} />
        </div>
      </div>

      <div id='3'>
        <FAQ />
      </div>

      <div
        css={tw`flex items-center justify-end gap-1.5 cursor-pointer pt-[7.1875rem] pb-5 md:(justify-center pt-14 pb-0)`}
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
          css={tw`md:w-[1.0625rem] h-[1.0625rem]`}
        />
      </div>
    </div>
  );
};

export default Locations;
