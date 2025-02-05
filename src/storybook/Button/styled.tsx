import Button from 'antd/lib/button';
import 'antd/lib/button/style';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

export const StyledButton = styled(Button)`
  ${tw`flex items-center justify-center px-5 py-2.5 rounded-full`}
  outline: none !important;

  ${({ type }) => {
    if (type === 'primary') {
      return css`
        ${tw`!border-none !bg-color_4 !shadow-none`}
      `;
    } else {
      return css`
        ${tw`!border !border-color_4`}
      `;
    }
  }}

  &.ant-btn:disabled {
    ${tw`bg-gray-200`}
  }
`;
