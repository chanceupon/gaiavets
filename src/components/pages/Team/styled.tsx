import styled from 'styled-components';
import tw from 'twin.macro';

export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;

  .swiper-slide {
    width: 22.5rem !important;

    @media (max-width: 768px) {
      width: 17.5rem !important;
    }
  }
`;

export const SwiperContainer = styled.div`
  ${tw`w-full`}
`;
