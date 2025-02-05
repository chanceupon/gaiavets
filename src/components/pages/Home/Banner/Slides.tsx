import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { previewAssetUrl } from '@/data/helper';
import Image from 'next/image';

const Slides: React.FC<{
  data: {
    id: string;
    attributes: {
      url: string;
    };
  }[];
}> = ({ data }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 5000);
  }, []);

  return (
    <div
      css={tw`w-[55%] h-[48.75rem] lg:(w-full h-[31.25rem]) md:!h-[21.25rem]`}
    >
      {!isShow ? (
        <div css={tw`w-full h-full`}>
          <Image
            src={previewAssetUrl(data[0]?.attributes?.url)}
            alt={`image-0`}
            css={tw`w-full h-full object-cover`}
            width={1920}
            height={1080}
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
      ) : (
        <Swiper
          css={tw`w-full !h-full`}
          slidesPerView={1}
          loop
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
        >
          {data?.map((item, index) => (
            <SwiperSlide>
              <div css={tw`w-full h-full`}>
                <Image
                  src={previewAssetUrl(item?.attributes?.url)}
                  alt={`image-${index + 1}`}
                  key={`${index + 1} `}
                  width='0'
                  height='0'
                  sizes='100vw'
                  css={tw`w-full h-full object-cover`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Slides;
