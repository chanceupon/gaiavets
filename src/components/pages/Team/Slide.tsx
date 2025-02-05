import React, { useRef, useState } from 'react';
import tw from 'twin.macro';
import { CarouselWrapper, SwiperContainer } from './styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { previewAssetUrl } from '@/data/helper';
import { useWindowWidth } from '@/utils/hook';

const ItemMobile = ({ item }) => {
  const [showContent, setShowContent] = useState(false);

  const handleToggleContent = () => {
    setShowContent((prev) => !prev);
  };
  return (
    <div
      className='relative flex-shrink-0 cursor-pointer w-full'
      onClick={handleToggleContent}
    >
      <img
        src={previewAssetUrl(item?.image?.data?.attributes?.url)}
        alt={item?.name}
        css={tw`w-[22.5rem] h-[26.875rem] object-cover rounded-2xl md:(w-full h-[22.5rem])`}
      />

      <div
        className={`absolute inset-0 bg-black bg-opacity-70 text-white px-[1.875rem] rounded-2xl transition-opacity duration-500 ease-in-out flex flex-col justify-center items-center gap-2 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
        css={tw`md:(gap-1)`}
      >
        <h3
          css={tw`text-[1.75rem] font-medium text-color_5 text-center leading-[2.1875rem] md:(text-2xl !leading-7)`}
        >
          {item?.name}
        </h3>
        <div css={tw`flex flex-col w-full gap-4 md:(gap-2)`}>
          <p
            css={tw`text-sm text-color_5 font-light leading-normal text-center whitespace-pre-line`}
          >
            {item?.position}
          </p>
          <p
            css={tw`text-[1rem] leading-[1.3125rem] text-color_5 text-center md:text-sm whitespace-pre-line`}
          >
            {item?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Slide = ({ data }) => {
  const swiperRef = useRef<any>(null);
  const widthScreen = useWindowWidth() as any;

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div css={tw`flex-col flex sm:(flex-col-reverse)`}>
      <div>
        <CarouselWrapper>
          <SwiperContainer>
            <Swiper
              onSwiper={(swiperInstance) => {
                swiperRef.current = swiperInstance;
              }}
              slidesPerView='auto'
              spaceBetween={40}
              centeredSlides={true}
              loop
              speed={500}
              breakpoints={{
                768: {
                  spaceBetween: 20,
                },
                769: {
                  spaceBetween: 40,
                },
              }}
            >
              {data?.attributes?.teamInfo?.members?.map((item, index) => {
                return (
                  <SwiperSlide key={`${index} - ${item?.id}`}>
                    {widthScreen > 576 ? (
                      <div className='relative flex-shrink-0 cursor-pointer w-full'>
                        <img
                          src={previewAssetUrl(
                            item?.image?.data?.attributes?.url
                          )}
                          alt={`Avatar ${index}`}
                          css={tw`w-[22.5rem] h-[26.875rem] object-cover rounded-2xl md:(w-full h-[22.5rem])`}
                        />

                        <div
                          className='absolute inset-0 bg-black bg-opacity-70 text-white px-[1.875rem] rounded-2xl opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 flex flex-col justify-center items-center gap-2'
                          css={tw`md:(gap-1)`}
                        >
                          <h3
                            css={tw`text-[1.75rem] font-medium text-color_5 text-center leading-[2.1875rem] md:(text-2xl !leading-7)`}
                          >
                            {item?.name}
                          </h3>
                          <div css={tw`flex flex-col w-full gap-4 md:(gap-2)`}>
                            <p
                              css={tw`text-sm text-color_5 font-light leading-normal text-center whitespace-pre-line`}
                            >
                              {item?.position}
                            </p>
                            <p
                              css={tw`text-[1rem] leading-[1.3125rem] text-color_5 text-center md:text-sm whitespace-pre-line`}
                            >
                              {item?.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <ItemMobile item={item} />
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </SwiperContainer>
        </CarouselWrapper>
      </div>
      <div
        css={tw`flex items-center gap-2 justify-center px-[1.875rem] pt-12 md:(!px-5 pt-10) sm:(!pt-0 !pb-10 justify-end) `}
      >
        <div onClick={handlePrev} className='group' css={tw`cursor-pointer`}>
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
        <div onClick={handleNext} className='group' css={tw`cursor-pointer`}>
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
  );
};

export default Slide;
