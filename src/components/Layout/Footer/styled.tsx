import styled from 'styled-components';
import tw from 'twin.macro';

export const WrapperIcon = styled.a`
  ${tw`cursor-pointer`}
  .svg-icon {
    transition: fill 0.3s;
  }

  .svg-icon:hover {
    fill: #ff6243;
  }
`;
