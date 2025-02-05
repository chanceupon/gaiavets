import { Button } from '@/storybook';
import React, { useRef, useState } from 'react';
import tw from 'twin.macro';
import { CarouselWrapper, StyledInput, SwiperContainer } from './styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { PAGE_ROUTES } from '@/utils/routes';
import { GuideCollection } from '@/data/collection';
import { createSlug, previewAssetUrl } from '@/data/helper';
import axios from 'axios';
import { GuideTypeName } from '@/data/constant';
import dayjs from 'dayjs';
import { GuideType } from '@/data/enum';
import _debounce from 'lodash/debounce';
import Image from 'next/image';

const Guides: React.FC<{ data: GuideCollection[] }> = ({ data }) => {
  const swiperRef = useRef<any>(null);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isShowSuccessSubscribe, setIsShowSuccessSubscribe] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleNext = () => {
    if (swiperRef.current && !isEnd) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && !isBeginning) {
      swiperRef.current.slidePrev();
    }
  };

  const onChangeKeyWord = _debounce((e) => {
    const emailValue = e.target.value.trim();
    setEmail(emailValue);

    if (emailValue === '') {
      setIsError(false);
    } else if (!emailRegex.test(emailValue)) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, 1000);

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_CMS_GRAPHQL}`,
        {
          query: `
            mutation {
              createSubscriber(data: { email: "${email}" }) {
                data {
                  attributes {
                    email
                    createdAt
                  }
                }
              }
            }
          `,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_CMS_TOKEN_WRITE}`,
          },
        }
      );

      if (response.status === 200) {
        setEmail('');
        setIsShowSuccessSubscribe(true);
      } else {
        console.log('Server error:', response);
      }
    } catch (err) {
      console.log('An error occurred:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      css={tw`h-[62.5rem] py-[7.5rem] px-[8.4375rem] lg:(px-[1.875rem] py-10) md:(h-full !px-5)`}
    >
      <div css={tw`flex items-center gap-[2.8125rem] md:gap-0`}>
        <h1
          css={tw`font-montserrat text-[3.125rem] font-[900] uppercase leading-[3rem] text-color_2 md:(text-3xl leading-8)`}
        >
          gaia guides
        </h1>
        <div css={tw`flex-1 flex items-center justify-between md:justify-end`}>
          <Link href={PAGE_ROUTES.GUIDES}>
            <Button
              css={tw`h-[3rem] !border-color_2 !bg-transparent md:hidden`}
            >
              <p css={tw`text-lg font-semibold leading-7 text-color_2`}>
                See All Guides
              </p>
            </Button>
          </Link>
          <Link href={PAGE_ROUTES.GUIDES}>
            <Button
              css={tw`h-[2rem] !border-color_2 !bg-transparent md:flex hidden`}
            >
              <p css={tw`text-lg font-semibold leading-7 text-color_2`}>
                See All
              </p>
            </Button>
          </Link>
          <div css={tw`flex items-center gap-2 md:hidden`}>
            <div
              onClick={handlePrev}
              className='group'
              css={
                isBeginning
                  ? tw`opacity-30 cursor-not-allowed`
                  : tw`cursor-pointer`
              }
            >
              <svg
                width='42'
                height='38'
                viewBox='0 0 42 38'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
                css={tw`fill-current text-[#D1CB53] group-hover:text-text_primary transition-colors duration-300 w-[2.625rem] h-[2.375rem]`}
              >
                <path d='M2.6644 14.9217C0.316673 16.7924 0.268567 20.9173 2.57174 22.8671C12.1852 31.0056 19.4371 35.4017 23.1697 37.414C25.2856 38.5547 27.6716 37.1756 28.2511 34.4576C28.626 32.6991 29.0584 30.3711 29.3995 27.6906L35.4286 28.7664C37.7358 29.1781 40.2285 27.7194 40.71 24.5858C40.9166 23.2415 41.0788 21.563 41.1023 19.5494C41.1257 17.5358 41.0028 15.8524 40.8276 14.5016C40.4193 11.3529 37.9617 9.80996 35.6457 10.143L29.5939 11.0132C29.3156 8.32214 28.9375 5.98035 28.6038 4.2098C28.088 1.47315 25.7351 0.0134207 23.5935 1.08159C19.8154 2.96608 12.4638 7.11367 2.6644 14.9217Z' />
              </svg>
            </div>
            <div
              onClick={handleNext}
              className='group'
              css={
                isEnd ? tw`opacity-30 cursor-not-allowed` : tw`cursor-pointer`
              }
            >
              <svg
                width='41'
                height='39'
                viewBox='0 0 41 39'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
                css={tw`fill-current text-[#D1CB53] group-hover:text-text_primary transition-colors duration-300 w-[2.625rem] h-[2.375rem]`}
              >
                <path d='M38.5626 15.2304C40.9104 17.1215 40.9585 21.2916 38.6553 23.2627C29.0418 31.4904 21.79 35.9346 18.0573 37.9689C15.9414 39.1221 13.5554 37.7279 12.976 34.9801C12.6011 33.2023 12.1687 30.8489 11.8276 28.139L5.79847 29.2267C3.49125 29.6429 0.998548 28.1682 0.517046 25.0003C0.310447 23.6413 0.148218 21.9444 0.124736 19.9088C0.101307 17.8731 0.224273 16.1713 0.399442 14.8057C0.807732 11.6226 3.26533 10.0627 5.58133 10.3994L11.6331 11.2791C11.9115 8.55862 12.2895 6.1912 12.6232 4.40127C13.1391 1.63467 15.4919 0.158968 17.6336 1.23883C21.4117 3.14394 28.7632 7.33693 38.5626 15.2304Z' />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div css={tw`pt-[3.125rem] md:pt-6`}>
        <CarouselWrapper css={tw`md:hidden`}>
          <SwiperContainer>
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              centeredSlides={false}
              onSwiper={(swiperInstance) => {
                swiperRef.current = swiperInstance;
                setIsBeginning(swiperInstance.isBeginning);
                setIsEnd(swiperInstance.isEnd);
              }}
              onSlideChange={(swiperInstance) => {
                setIsBeginning(swiperInstance.isBeginning);
                setIsEnd(swiperInstance.isEnd);
              }}
              breakpoints={{
                576: {
                  slidesPerView: 2,
                },
                1025: {
                  slidesPerView: 3,
                },
              }}
            >
              {data.map((item, index) => (
                <SwiperSlide key={`${index} - ${item?.id}`}>
                  <Link
                    href={`${PAGE_ROUTES.GUIDES}/${item?.attributes?.slug || createSlug(item?.attributes?.title)}`}
                  >
                    <div
                      css={tw`flex flex-col gap-5 flex-1  cursor-pointer `}
                      className='group'
                    >
                      <div css={tw`h-[17.25rem]`}>
                        <Image
                          src={previewAssetUrl(
                            item?.attributes?.image?.data?.attributes?.url
                          )}
                          alt={item?.attributes?.title}
                          width='0'
                          height='0'
                          sizes='100vw'
                          css={tw`h-full w-full object-cover rounded-2xl`}
                        />
                      </div>
                      <div css={tw`flex flex-col flex-1`}>
                        <div>
                          <p css={tw`text-color_10 text-sm leading-[1.125rem]`}>
                            {item?.attributes?.type && (
                              <span
                                css={[
                                  tw`font-bold`,
                                  item?.attributes?.type === GuideType.Article
                                    ? tw`text-color_10 !font-normal`
                                    : '',
                                ]}
                              >
                                {GuideTypeName[item?.attributes?.type]}{' '}
                                <span css={tw`text-color_10 !font-normal`}>
                                  -
                                </span>
                              </span>
                            )}{' '}
                            {item?.attributes?.readTime && (
                              <span css={tw`text-color_10 !font-normal`}>
                                {item?.attributes?.readTime}{' '}
                                <span css={tw`text-color_6`}>•</span>
                              </span>
                            )}{' '}
                            Updated {''}
                            {dayjs(item?.attributes?.date).format(
                              'MMM DD, YYYY'
                            )}
                          </p>
                        </div>
                        <div css={tw`border-b border-color_10 my-5`} />
                        <div css={tw`flex flex-col gap-5`}>
                          <h1
                            css={tw`text-color_2 text-3xl font-semibold [letter-spacing: -0.0563rem] line-clamp-2 !leading-[2.3125rem]  group-hover:(underline text-color_4 transition-colors duration-300) min-h-[4.5rem]`}
                          >
                            {item?.attributes?.title}
                          </h1>
                          <p
                            css={tw`text-color_12 text-lg leading-[1.6875rem] line-clamp-2 min-h-[3.375rem]`}
                          >
                            {item?.attributes?.shortDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperContainer>
        </CarouselWrapper>

        <div css={tw`flex-col gap-14 md:flex hidden`}>
          {data.slice(0, 3).map((item, index) => (
            <Link
              href={`${PAGE_ROUTES.GUIDES}/${item?.attributes?.slug || createSlug(item?.attributes?.title)}`}
              key={item?.id}
            >
              <div
                css={tw`flex flex-col gap-3 flex-1 h-[31.25rem] md:!h-full`}
                key={`${index} - mobile`}
                className='group'
              >
                <div css={tw`h-[17.25rem] md:h-[13.75rem]`}>
                  <Image
                    src={previewAssetUrl(
                      item?.attributes?.image?.data?.attributes?.url
                    )}
                    width='0'
                    height='0'
                    sizes='100vw'
                    alt={item?.attributes?.title}
                    css={tw`h-full w-full object-cover rounded-2xl`}
                  />
                </div>
                <div css={tw`flex flex-col flex-1`}>
                  <div>
                    <p css={tw`text-color_10 text-sm leading-[1.125rem]`}>
                      {item?.attributes?.type && (
                        <span
                          css={[
                            tw`font-bold`,
                            item?.attributes?.type === GuideType.Article
                              ? tw`text-color_10 !font-normal`
                              : '',
                          ]}
                        >
                          {GuideTypeName[item?.attributes?.type]}
                          <span css={tw`text-color_10 !font-normal`}> -</span>
                        </span>
                      )}{' '}
                      {item?.attributes?.readTime && (
                        <span css={tw`text-color_10 !font-normal`}>
                          {item?.attributes?.readTime}{' '}
                          <span css={tw`text-color_6`}>•</span>
                        </span>
                      )}{' '}
                      Updated {''}
                      {dayjs(item?.attributes?.date).format('MMM DD, YYYY')}
                    </p>
                  </div>
                  <div css={tw`border-b border-color_10 my-5 md:my-3`} />
                  <div css={tw`flex flex-col gap-5 md:gap-2`}>
                    <h1
                      css={tw`text-color_2 text-3xl font-semibold [letter-spacing: -0.0563rem]  md:(text-2xl !leading-[1.75rem]) group-hover:(underline text-color_4 transition-colors duration-300)`}
                    >
                      {item?.attributes?.title}
                    </h1>
                    <p
                      css={tw`text-color_12 text-lg leading-[1.6875rem] line-clamp-2`}
                    >
                      {item?.attributes?.shortDescription}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {!isShowSuccessSubscribe ? (
        <div css={tw`pt-24 flex gap-10 md:(flex-col pt-14 gap-3)`}>
          <h1
            css={tw`text-color_4 text-2xl font-semibold leading-7 [letter-spacing: -0.045rem] md:(text-xl leading-normal mt-0) mt-2.5`}
          >
            For more Tips, Guides <br /> & Recommendations
          </h1>
          <div css={tw`flex flex-col gap-2.5 flex-1`}>
            <div
              css={[
                tw`flex-1 py-3 pl-7 pr-2 border  rounded-full h-[4.625rem] flex items-center justify-center md:hidden`,
                email ? tw`border-2` : tw``,
                isError ? tw`border-[#E30400]` : tw`border-color_4`,
              ]}
            >
              <StyledInput
                variant='borderless'
                placeholder='Enter Your Email'
                onChange={onChangeKeyWord}
              />
              <Button
                type='primary'
                css={[
                  tw`h-[3.25rem] w-[12.5rem]`,
                  !isError ? tw`opacity-100` : tw`opacity-30`,
                ]}
                loading={isLoading}
                onClick={() => {
                  if (email && !isError) handleSubmit();
                }}
              >
                <p css={tw`text-lg font-semibold leading-7 text-color_5`}>
                  Subscribe
                </p>
              </Button>
            </div>
            {isError && (
              <p css={tw`text-lg text-[#E30400] pl-10 md:hidden`}>
                Invalid email address
              </p>
            )}
          </div>

          <div css={tw`flex-col gap-3 w-full md:flex hidden`}>
            <div
              css={[
                tw`border border-color_4 rounded-full py-3 px-7 h-[3rem] flex items-center justify-center`,
                email ? tw`border-2` : tw``,
                isError ? tw`border-[#E30400]` : tw`border-color_4`,
              ]}
            >
              <StyledInput
                variant='borderless'
                placeholder='Enter Your Email'
                css={tw`flex items-center justify-center`}
                style={{
                  textAlign: 'center',
                }}
                onChange={onChangeKeyWord}
              />
            </div>
            <Button
              type='primary'
              css={[
                tw`h-[3rem] w-full`,
                !isError ? tw`sm:opacity-100` : tw`sm:opacity-30`,
              ]}
              loading={isLoading}
              onClick={() => {
                if (email && !isError) handleSubmit();
              }}
            >
              <p css={tw`text-lg font-semibold leading-7 text-color_5`}>
                Subscribe
              </p>
            </Button>
            {isError && (
              <p css={tw`text-lg text-[#E30400] text-center`}>
                Invalid email address
              </p>
            )}
          </div>
        </div>
      ) : (
        <div
          css={tw`pt-24 flex flex-col justify-center items-center gap-2.5 md:(pt-14)`}
        >
          <Image
            src='/svg/check.svg'
            alt='icon-check'
            width='0'
            height='0'
            sizes='100vw'
            css={tw`w-[2.25rem] h-[2.25rem] md:(!w-[2rem] !h-[2rem])`}
          />
          <h1
            css={tw`text-[3.125rem] font-black leading-[3rem] font-montserrat text-color_4 uppercase md:(!text-[1.875rem] !leading-[1.875rem] text-center !font-semibold !font-lexendDeca [text-transform: none])`}
          >
            Thanks for joining us!
          </h1>
          <p
            css={tw`text-lg font-semibold leading-7 underline text-color_4 cursor-pointer`}
            onClick={() => setIsShowSuccessSubscribe(false)}
          >
            Subscribe Another Email
          </p>
        </div>
      )}
    </div>
  );
};

export default Guides;
