import type { ButtonProps } from 'antd';
import { CSSProp } from 'styled-components';
import { StyledButton } from './styled';

type ButtonPropsType = ButtonProps & {
  css?: CSSProp;
};

const Button: React.FC<ButtonPropsType> = ({ css, ...props }) => {
  return <StyledButton {...props} css={css || {}} />;
};
export default Button;
