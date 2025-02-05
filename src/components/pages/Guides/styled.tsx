import { Input } from 'antd';
import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledInput = styled(Input)`
  &.ant-input {
    ${tw`!text-color_2 sm:(pb-[0.3125rem] !px-0) `}

    &::placeholder {
      ${tw`!text-color_4`}
      font-size: 1.125rem !important;
      line-height: 1.6875rem !important;

      @media (max-width: 576px) {
        font-size: 0.875rem !important;
      }
    }

    font-size: 1.125rem !important;
    line-height: 1.6875rem !important;
  }
`;
