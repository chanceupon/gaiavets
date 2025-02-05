import styled from 'styled-components';
import tw from 'twin.macro';

export const ContentWrapper = styled.div`
  ${tw`text-color_2`}
  p, span,ol,
  ul,
  menu {
    ${tw`!text-color_2 leading-[1.6875rem] !text-lg !font-normal`}
  }

  p {
    /* margin-block-start: 1em !important; */
    margin-block-end: 1em !important;
    margin-inline-start: 0 !important;
    margin-inline-end: 0 !important;
  }

  ol,
  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 40px;
  }

  h1,
  h1 strong {
    ${tw`!text-color_2  !leading-[3rem] !text-[3.125rem] !font-black font-montserrat mb-4 mt-4`}
  }

  h2,
  h2 strong {
    ${tw`!text-color_2  !leading-[2.375rem] !text-[2rem] !font-[800] mb-4 mt-4`}
  }

  h3,
  h3 strong {
    ${tw`!text-color_2  !leading-7 !text-[1.5rem] !font-semibold mb-4 mt-4`}
  }

  h4,
  h3 strong {
    ${tw`!text-color_2  !leading-7 !text-[1.125rem] !font-semibold mb-4 mt-4`}
  }

  i {
    ${tw`text-color_10 text-xs leading-[1.125rem]`}
  }

  strong {
    ${tw`!text-color_2 !leading-7 !text-lg !font-bold`}
  }

  a span {
    ${tw`!text-text_primary underline leading-7 !font-bold !text-lg`}
  }

  li {
    margin-bottom: 0.75rem !important;
  }

  blockquote {
    ${tw`!px-3 my-2`}
    border-left: solid 5px #D1CB53;

    span,
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      ${tw`!text-color_4 !text-2xl`}
    }
  }
`;
