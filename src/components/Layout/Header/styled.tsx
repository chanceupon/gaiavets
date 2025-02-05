import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledDrawer = styled.div`
  .ant-drawer-content {
    ${tw`bg-primary`}
  }
  .ant-drawer-content-wrapper {
    @media (max-width: 576px) {
      width: 100% !important;
      max-width: 100% !important;
    }
  }

  .ant-drawer-header {
    display: none !important;
  }
`;

export const WrapperDropDown = styled.div`
  .ant-dropdown {
    min-width: 9.25rem !important;
    left: 360px !important;

    @media (min-width: 2000px) {
      left: 405px !important;
    }

    .ant-dropdown-menu {
      ${tw`bg-primary`}
      padding: 0;
      border-radius: 0.375rem;
      border: none;
    }
    .ant-dropdown-menu-item {
      ${tw`rounded-md p-0`}
      box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.30);

      .styled-item {
        &:hover {
          ${tw`bg-color_2`}

          .text {
            ${tw`!text-white`}
          }
        }

        &:last-child {
          border-bottom: none !important;
        }
      }
      &:hover {
        background-color: transparent !important;
      }
    }
  }
`;
