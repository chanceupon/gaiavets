import React, { useCallback, useEffect, useState } from 'react';
import tw from 'twin.macro';
import { StyledInput } from './styled';
import { PAGE_ROUTES } from '@/utils/routes';
import Link from 'next/link';
import { fetchGuides } from '@/data/fetch';
import { createSlug, previewAssetUrl } from '@/data/helper';
import { GuideCollection } from '@/data/collection';
import axios from 'axios';
import _debounce from 'lodash/debounce';
import { Pagination, PaginationProps } from 'antd';
import { GuideType } from '@/data/enum';
import { GuideTypeName } from '@/data/constant';
import dayjs from 'dayjs';
import { useWindowWidth } from '@/utils/hook';

const Guides = () => {
  const widthScreen = useWindowWidth() as any;
  const [data, setData] = useState<{
    data: GuideCollection[];
    meta: {
      pagination: {
        total: number;
        page: number;
        pageSize: number;
        pageCount: number;
      };
    };
  }>();
  const [searchKey, setSearchKey] = useState('');
  const [query, setQuery] = useState<any>({
    page: 1,
  });

  const loadGuides = async () => {
    try {
      const guides = await fetchGuides({ ...query });
      setData(guides);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const searchBlog = async (searchKey) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN_URL}/api/guide/search?key=${searchKey}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_CMS_TOKEN_WRITE}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error searching blogs:', error);
      return [];
    }
  };

  const debouncedSearch = useCallback(
    _debounce(async (key) => {
      if (key.length > 1) {
        const results = await searchBlog(key);
        setData(results);
      }
    }, 1500),
    []
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchKey(value);

    if (!value) {
      loadGuides();
      debouncedSearch.cancel();
    } else if (value.length > 1) {
      debouncedSearch(value);
    }
  };

  const onChange = (pageCurrent) => {
    setQuery({
      ...query,
      page: pageCurrent || 1,
    });
  };

  const itemRender: PaginationProps['itemRender'] = (
    page,
    type,
    originalElement
  ) => {
    const isDisabled =
      (type === 'prev' && page === 0) ||
      (type === 'next' && page === data?.meta?.pagination?.pageCount);

    if (type === 'prev') {
      return (
        <div
          className='group'
          onClick={(e) => {
            e.preventDefault();
            if (!isDisabled) onChange(page);
          }}
        >
          <svg
            viewBox='0 0 42 38'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            css={tw`fill-current text-[#D1CB53] group-hover:text-text_primary transition-colors duration-300 w-[1.375rem] h-[1.375rem] `}
          >
            <path d='M2.6644 14.9217C0.316673 16.7924 0.268567 20.9173 2.57174 22.8671C12.1852 31.0056 19.4371 35.4017 23.1697 37.414C25.2856 38.5547 27.6716 37.1756 28.2511 34.4576C28.626 32.6991 29.0584 30.3711 29.3995 27.6906L35.4286 28.7664C37.7358 29.1781 40.2285 27.7194 40.71 24.5858C40.9166 23.2415 41.0788 21.563 41.1023 19.5494C41.1257 17.5358 41.0028 15.8524 40.8276 14.5016C40.4193 11.3529 37.9617 9.80996 35.6457 10.143L29.5939 11.0132C29.3156 8.32214 28.9375 5.98035 28.6038 4.2098C28.088 1.47315 25.7351 0.0134207 23.5935 1.08159C19.8154 2.96608 12.4638 7.11367 2.6644 14.9217Z' />
          </svg>
        </div>
      );
    }
    if (type === 'next') {
      return (
        <div
          className='group'
          onClick={(e) => {
            e.preventDefault();
            if (!isDisabled) onChange(page);
          }}
        >
          <svg
            width='41'
            height='39'
            viewBox='0 0 41 39'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            css={tw`fill-current text-[#D1CB53] group-hover:text-text_primary transition-colors duration-300 w-[1.375rem] h-[1.375rem] `}
          >
            <path d='M38.5626 15.2304C40.9104 17.1215 40.9585 21.2916 38.6553 23.2627C29.0418 31.4904 21.79 35.9346 18.0573 37.9689C15.9414 39.1221 13.5554 37.7279 12.976 34.9801C12.6011 33.2023 12.1687 30.8489 11.8276 28.139L5.79847 29.2267C3.49125 29.6429 0.998548 28.1682 0.517046 25.0003C0.310447 23.6413 0.148218 21.9444 0.124736 19.9088C0.101307 17.8731 0.224273 16.1713 0.399442 14.8057C0.807732 11.6226 3.26533 10.0627 5.58133 10.3994L11.6331 11.2791C11.9115 8.55862 12.2895 6.1912 12.6232 4.40127C13.1391 1.63467 15.4919 0.158968 17.6336 1.23883C21.4117 3.14394 28.7632 7.33693 38.5626 15.2304Z' />
          </svg>
        </div>
      );
    }
    return originalElement;
  };

  useEffect(() => {
    loadGuides();
  }, [query]);

  useEffect(() => {
    if (widthScreen <= 768) {
      setQuery({
        ...query,
        pageSize: 6,
      });
    } else {
      setQuery({
        ...query,
        pageSize: 9,
      });
    }
  }, [widthScreen]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 300);
  }, [query.page]);

  return (
    <div
      css={tw`px-[8.4375rem] pt-[2.3125rem] pb-[7.8125rem] lg:(px-[1.875rem] pt-[1.0625rem] pb-[7.5rem]) md:(!px-5 !pb-14)`}
    >
      <div css={tw`flex flex-col gap-[1.4375rem]`}>
        <h1
          css={tw`text-[5.625rem] font-montserrat font-[900] leading-[5.0625rem] uppercase text-color_2 md:(text-[3.125rem] leading-[2.8125rem] text-center)`}
        >
          gaia guides
        </h1>
        <p
          css={tw`text-xl text-color_2 leading-[1.875rem] md:(text-lg text-center leading-[1.6875rem])`}
        >
          Discover handy tips and easy guides for pet owners like you
        </p>
      </div>
      <div
        css={[
          tw`w-full h-[3.125rem] py-3 px-7 flex items-center border border-color_4 rounded-full mt-[2rem] gap-5 sm:(px-3.5)`,
          searchKey ? tw`border-2` : tw``,
        ]}
      >
        <div css={tw`flex-1`}>
          <StyledInput
            variant='borderless'
            placeholder={
              widthScreen > 425
                ? `Search key words like 'dog', 'vomiting', 'arthritis'`
                : `Search key words like 'dog', 'vomiting', ...`
            }
            value={searchKey}
            onChange={handleInputChange}
            css={`
              &:focus {
                caret-color: #dd5c35;
              }
            `}
            className='!bg-transparent'
          />
        </div>
        <div>
          <img
            src='/svg/search.svg'
            alt='icon-search'
            css={tw`w-[1.375rem] h-[1.375rem]`}
          />
        </div>
      </div>

      {data?.data.length === 0 && searchKey ? (
        <div css={tw`flex items-center justify-center pt-20`}>
          <h1 css={tw`text-color_2`}>
            There are no articles to display. Try another search term.
          </h1>
        </div>
      ) : (
        <div
          css={tw`pt-20 grid grid-cols-3 gap-x-[1.875rem] gap-y-[5rem] xl:grid-cols-2 md:(pt-10 !grid-cols-1 gap-y-14)`}
        >
          {data?.data?.map((item) => (
            <Link
              href={`${PAGE_ROUTES.GUIDES}/${item?.attributes?.slug || createSlug(item?.attributes?.title)}`}
              key={item?.id}
            >
              <div
                css={tw`flex flex-col gap-5 flex-1 cursor-pointer md:gap-2.5`}
                className='group'
              >
                <div css={tw`h-[17.25rem]`}>
                  <img
                    src={previewAssetUrl(
                      item?.attributes?.image?.data?.attributes?.url
                    )}
                    alt={item?.attributes?.title}
                    css={tw`h-full w-full object-cover rounded-2xl`}
                  />
                </div>
                <div css={tw`flex flex-col flex-1`}>
                  <div>
                    <p css={tw`text-color_10 text-sm leading-[1.125rem]`}>
                      {item?.attributes?.type && (
                        <span
                          css={[
                            tw`font-bold`,
                            item?.attributes?.type === GuideType.Article
                              ? tw`text-color_10 !font-normal`
                              : '',
                          ]}
                        >
                          {GuideTypeName[item?.attributes?.type]}{' '}
                          <span css={tw`text-color_10 !font-normal`}>-</span>
                        </span>
                      )}{' '}
                      {item?.attributes?.readTime && (
                        <span css={tw`text-color_10 !font-normal`}>
                          {item?.attributes?.readTime}{' '}
                          <span css={tw`text-color_6`}>•</span>
                        </span>
                      )}{' '}
                      Updated {''}
                      {dayjs(item?.attributes?.date).format('MMM DD, YYYY')}
                    </p>
                  </div>
                  <div css={tw`border-b border-color_10 my-5 md:my-2.5`} />
                  <div css={tw`flex flex-col gap-5 md:gap-2.5`}>
                    <h1
                      css={tw`text-color_2 text-3xl leading-[2.3125rem] font-semibold [letter-spacing: -0.0563rem] line-clamp-3  group-hover:(underline text-color_4 transition-colors duration-300) `}
                    >
                      {item?.attributes?.title}
                    </h1>
                    <p
                      css={tw`text-color_12 text-lg leading-[1.6875rem] line-clamp-3 `}
                    >
                      {item?.attributes?.shortDescription}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {Number(data?.meta?.pagination?.total) >
        Number(data?.meta?.pagination?.pageSize) && (
        <div css={tw`pt-16 md:pt-10`}>
          <Pagination
            pageSize={data?.meta?.pagination?.pageSize}
            total={data?.meta?.pagination?.total}
            current={data?.meta?.pagination?.page}
            onChange={onChange}
            itemRender={itemRender}
            showSizeChanger={false}
            align='center'
          />
        </div>
      )}
    </div>
  );
};

export default Guides;
