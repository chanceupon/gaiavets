import { useWindowWidth } from '@/utils/hook';
import { PAGE_ROUTES } from '@/utils/routes';
import Link from 'next/link';
import React from 'react';
import tw from 'twin.macro';

const data = [
  {
    icon: '/svg/about-icon_1.svg',
    title: 'Professional Service',
    des: 'Our practice is evidence-based and always puts our patients first. We only prescribe the medication and treatment your pet truly needs.',
    textButton: 'Explore Our Services',
    link: PAGE_ROUTES.SERVICES,
  },
  {
    icon: '/svg/about-icon_2.svg',
    title: 'Collaborative Care',
    des: `We understand that the best outcomes come from working closely with pet owners and creating a life-long supportive network for every pet's health.`,
    textButton: 'Find Us',
    link: `${PAGE_ROUTES.HOME}#location`,
  },
  {
    icon: '/svg/about-icon_3.svg',
    title: 'Meaningful Insights',
    des: 'We are dedicated to closing knowledge gaps about animals, both domesticated and wild, by creating easy-to-understand content to educate and raise awareness among pet owners. ',
    textButton: 'Learn More',
    link: PAGE_ROUTES.GUIDES,
  },
  {
    icon: '/svg/about-icon_4.svg',
    title: 'Caring Environment',
    des: `Veterinary work is heart work. We support our staff's mental well-being because it benefits them and your pets. Let's be kind to one another!`,
    textButton: 'Meet The Team',
    link: PAGE_ROUTES.TEAM,
  },
];

const About = () => {
  const widthScreen = useWindowWidth() as any;

  return (
    <div
      css={tw`px-[8.4375rem] pt-[2.875rem] pb-[7.5rem] lg:(px-[1.875rem] pt-[1.0625rem] pb-[7.5rem]) md:!px-5`}
    >
      <div css={tw` w-[70.9375rem] m-auto lg:w-full`}>
        <h1
          css={tw`font-montserrat text-[5.625rem] font-[900] leading-[5.0625rem] text-color_2 text-center uppercase md:(text-[3.125rem] leading-[2.8125rem])`}
        >
          {widthScreen > 576 ? (
            <>
              your family vet <br /> since 2019
            </>
          ) : (
            <>
              your <br /> family vet <br /> since 2019
            </>
          )}
        </h1>
      </div>
      <div css={tw`py-[3.75rem] flex items-center justify-center md:hidden`}>
        <img
          src='/svg/fish.svg'
          alt='icon-fish'
          css={tw`w-[3.1875rem] h-[2.625rem]`}
        />
      </div>
      <div css={tw`flex gap-[3.75rem] xl:flex-col md:(pt-10 gap-10)`}>
        <div css={tw`flex-1`}>
          <img
            src='/about/banner.png'
            alt='banner'
            css={tw`w-full h-[33rem] object-cover rounded-2xl md:(h-[21.25rem])`}
          />
        </div>
        <div css={tw`flex-1 flex flex-col gap-10 md:gap-3`}>
          <h3
            css={tw`text-3xl text-color_4 font-semibold leading-normal [letter-spacing: -0.0563rem] md:(text-2xl leading-normal)`}
          >
            About Us
          </h3>
          <div css={tw`flex flex-col  gap-7 flex-1 xxl:gap-5`}>
            <p
              css={tw`text-color_2 text-xl leading-[1.875rem] md:(text-lg leading-[1.6875rem])`}
            >
              At Gaia Vets, we appreciate the amazing bond between people and
              their pets. From curious critters to loyal companions, every pet
              deserves care that sees them as family.
            </p>
            <p
              css={tw`text-color_2 text-xl leading-[1.875rem] md:(text-lg leading-[1.6875rem])`}
            >
              Whether it's the gentle care of an exotic bird or the complex
              treatment of a senior dog, we're dedicated to transforming
              uncertainty into confidence and discomfort into thriving health.
            </p>
            <p
              css={tw`text-color_2 text-xl leading-[1.875rem] md:(text-lg leading-[1.6875rem])`}
            >
              We're here to listen, to educate, and to partner with you in every
              stage of your pet's life — so they can live their happiest,
              healthiest days by your side.
            </p>

            <p
              css={tw`text-color_2 text-xl leading-[1.875rem] md:(text-lg leading-[1.6875rem])`}
            >
              Because this is where all pets — big or small, familiar or exotic
              — find a home in healing.
            </p>
          </div>
        </div>
      </div>

      <div css={tw`pt-[3.75rem] md:pt-10`}>
        <div css={tw`flex flex-col gap-[2.5rem] md:(gap-3)`}>
          <h3
            css={tw`text-3xl font-semibold leading-normal [letter-spacing: -0.0563rem] text-center text-color_4 md:(text-left text-2xl leading-[1.5rem])`}
          >
            What Drives Gaia Vets?
          </h3>
          <div css={tw`w-[48.125rem] m-auto lg:w-full`}>
            <p
              css={tw`text-xl text-color_2 leading-[1.875rem] md:( text-lg leading-[1.6875rem])`}
            >
              We work hard to provide exceptional veterinary care through a
              patient-first approach, collaboration, and education. Our mission
              is to ensure the well-being of every animal while supporting both
              pet owners and our veterinary team.
            </p>
          </div>
        </div>
        <div
          css={tw`pt-[3.75rem] grid grid-cols-2 gap-20 w-[64.375rem] m-auto lg:w-full md:(pt-10 !grid-cols-1 !gap-[3.75rem])`}
        >
          {data.map((item, index) => (
            <div css={tw`flex flex-col gap-5 md:gap-3`} key={index}>
              <div css={tw`flex flex-col gap-2`}>
                <img
                  src={item?.icon}
                  css={tw`w-[4.375rem] h-[4rem]`}
                  alt={item?.title}
                />
                <h1
                  css={tw`text-3xl font-semibold leading-normal [letter-spacing: -0.0563rem] md:(text-2xl leading-6)`}
                >
                  {item?.title}
                </h1>
              </div>
              <p css={tw`text-color_12 text-lg leading-[1.6875rem]`}>
                {item?.des}
              </p>
              <Link href={item?.link}>
                <div css={tw`flex items-center gap-3 cursor-pointer`}>
                  <p
                    css={tw`text-color_4 text-[1.375rem] font-medium leading-2 underline`}
                  >
                    {item?.textButton}
                  </p>
                  <img
                    src='/svg/arrow-up_2.svg'
                    css={tw`w-[1.25rem] h-[1.375rem]`}
                    alt='icon-arrow-up-2'
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
