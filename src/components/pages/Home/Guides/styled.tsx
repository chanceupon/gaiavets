import { Input } from 'antd';
import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledInput = styled(Input)`
  &.ant-input {
    ${tw`!text-color_2`}

    &::placeholder {
      color: #808080 !important;
      font-size: 1.125rem !important;
      line-height: 1.6875rem !important;
    }

    font-size: 1.125rem !important;
    line-height: 1.6875rem !important;
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SwiperContainer = styled.div`
  ${tw`w-full`}
`;
