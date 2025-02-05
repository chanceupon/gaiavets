import { ReactNode } from 'react';
import { CSSProp } from 'styled-components';
import { TextSize } from './Types';
import { StyledText } from './styled';

export type TextProps = {
  [key: string]: any;
  isDisplay?: boolean;
  css?: CSSProp;
  children?: ReactNode;
  type: TextSize;
};

const Text: React.FC<TextProps> = ({
  isDisplay = false,
  css,
  children,
  type,
  ...props
}) => {
  return (
    <StyledText isDisplay={isDisplay} type={type} css={css || {}} {...props}>
      {children}
    </StyledText>
  );
};
export default Text;
