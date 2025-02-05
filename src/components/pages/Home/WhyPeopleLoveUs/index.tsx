import { WhyPeopleLoveUsCollection } from '@/data/collection';
import { previewAssetUrl } from '@/data/helper';
import { Col, Row } from 'antd';
import React from 'react';
import tw from 'twin.macro';
import Image from 'next/image';

const WhyPeopleLoveUs: React.FC<{ data: WhyPeopleLoveUsCollection }> = ({
  data,
}) => {
  const createArray = (num) => Array.from({ length: num }, (_, i) => i + 1);

  return (
    <div
      css={tw`bg-color_2 flex flex-col py-24 px-[12.8125rem] xl:px-[8.4375rem] lg:(px-[1.875rem] !py-10) md:!px-5`}
    >
      <h1
        css={tw`font-montserrat text-[3.125rem] font-[900] uppercase leading-[3rem] text-white w-full text-center md:(text-3xl !leading-[1.875rem] text-left) xs:w-[230px]`}
      >
        {data?.title}
        <span css={tw`ml-2`}>
          <Image
            src={previewAssetUrl(data?.icon?.data?.attributes?.url)}
            alt={data?.title}
            width='0'
            height='0'
            sizes='100vw'
            priority
            css={tw`inline-block mt-[-0.625rem] w-[2.5rem] h-[2.5rem] md:(w-[1.5625rem] h-[1.5625rem] mt-[-0.3125rem])`}
          />
        </span>
      </h1>
      <Row css={tw`pt-12 md:pt-6`} gutter={[24, 24]}>
        <Col xs={24} xl={16}>
          <Row gutter={[24, 24]}>
            <Col md={24} lg={12}>
              <div
                css={tw` w-full h-[23.125rem] lg:h-[20rem] bg-color_5 rounded-[1.25rem] px-8 pt-9  relative overflow-hidden `}
                className='group hover:bg-color_9 transition-all duration-1000'
              >
                <div css={tw`flex flex-col gap-5`}>
                  <p css={tw`text-color_12 text-lg leading-7 md:leading-6`}>
                    {data?.reviewCards[0]?.description}
                  </p>
                  <div css={tw`flex items-center gap-2`}>
                    {createArray(data?.reviewCards[0]?.star).map((item) => (
                      <svg
                        key={`${item} - location_1`}
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-6 h-6 group-hover:text-color_4 transition-colors duration-500'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M9.81852 1.34039C10.7513 -0.446797 13.2487 -0.446799 14.1815 1.34039L16.7369 6.23625L21.9892 7.26398C23.9361 7.64495 24.6378 10.0522 23.3391 11.4875L19.644 15.5712L20.3355 21.1395C20.576 23.076 18.6284 24.6528 16.8035 23.7477L12 21.3652L7.1965 23.7477C5.37168 24.6528 3.42401 23.076 3.6645 21.1395L4.356 15.5712L0.660928 11.4875C-0.637803 10.0522 0.0638782 7.64495 2.01083 7.26398L7.26313 6.23625L9.81852 1.34039Z'
                        />
                      </svg>
                    ))}
                  </div>
                </div>
                <div
                  css={tw`absolute -bottom-[4.6875rem] left-1/2 transform -translate-x-1/2  lg:(!transform-none left-[unset] right-[10px]) xxs:(!-bottom-[70px])`}
                >
                  <Image
                    src={previewAssetUrl(
                      data?.reviewCards[0]?.image?.data?.attributes?.url
                    )}
                    alt='dog'
                    width='0'
                    height='0'
                    sizes='100vw'
                    css={tw`object-cover w-[10.9375rem] md:w-[11.125rem]`}
                  />
                </div>
              </div>
            </Col>
            <Col md={24} lg={12}>
              <div
                css={tw`w-full h-[23.125rem] lg:h-[20rem] bg-color_5 rounded-[1.25rem] px-8 pt-9 relative overflow-hidden`}
                className='group hover:bg-color_9 transition-all duration-1000'
              >
                <div css={tw`flex flex-col gap-5`}>
                  <p css={tw`text-color_12 text-lg leading-7 md:leading-6`}>
                    {data?.reviewCards[1]?.description}
                  </p>
                  <div css={tw`flex items-center gap-2`}>
                    {createArray(data?.reviewCards[1]?.star).map((item) => (
                      <svg
                        key={`${item} - location_2`}
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-6 h-6 group-hover:text-color_4 transition-colors duration-500'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M9.81852 1.34039C10.7513 -0.446797 13.2487 -0.446799 14.1815 1.34039L16.7369 6.23625L21.9892 7.26398C23.9361 7.64495 24.6378 10.0522 23.3391 11.4875L19.644 15.5712L20.3355 21.1395C20.576 23.076 18.6284 24.6528 16.8035 23.7477L12 21.3652L7.1965 23.7477C5.37168 24.6528 3.42401 23.076 3.6645 21.1395L4.356 15.5712L0.660928 11.4875C-0.637803 10.0522 0.0638782 7.64495 2.01083 7.26398L7.26313 6.23625L9.81852 1.34039Z'
                        />
                      </svg>
                    ))}
                  </div>
                </div>
                <div
                  css={tw`absolute right-[-11.5625rem] bottom-[-16.25rem] mxl:bottom-[-18.25rem] lg:!bottom-[-250px] md:!bottom-[-13.75rem] xxs:(right-[-8.75rem] !bottom-[-12.5rem]) `}
                >
                  <Image
                    src={previewAssetUrl(
                      data?.reviewCards[1]?.image?.data?.attributes?.url
                    )}
                    alt='goldie'
                    width='0'
                    height='0'
                    sizes='100vw'
                    css={tw` object-cover w-[28.6875rem]  md:w-[25.375rem] scale-[0.8]`}
                  />
                </div>
              </div>
            </Col>
            <Col span={24}>
              <div
                css={tw`w-full h-[23.125rem] lg:h-[20rem] bg-color_5 rounded-[1.25rem] px-8 pt-9 relative overflow-hidden`}
                className='group hover:bg-color_9 transition-all duration-1000'
              >
                <div
                  css={tw`md:!w-full xxl:w-[18.75rem] w-[21.875rem] flex flex-col gap-5`}
                >
                  <p css={tw`text-color_12 text-lg leading-7 md:leading-6`}>
                    {data?.reviewCards[2]?.description}
                  </p>
                  <div css={tw`flex items-center gap-2`}>
                    {createArray(data?.reviewCards[2]?.star).map((item) => (
                      <svg
                        key={`${item} - location_3`}
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-6 h-6 group-hover:text-color_4 transition-colors duration-500'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M9.81852 1.34039C10.7513 -0.446797 13.2487 -0.446799 14.1815 1.34039L16.7369 6.23625L21.9892 7.26398C23.9361 7.64495 24.6378 10.0522 23.3391 11.4875L19.644 15.5712L20.3355 21.1395C20.576 23.076 18.6284 24.6528 16.8035 23.7477L12 21.3652L7.1965 23.7477C5.37168 24.6528 3.42401 23.076 3.6645 21.1395L4.356 15.5712L0.660928 11.4875C-0.637803 10.0522 0.0638782 7.64495 2.01083 7.26398L7.26313 6.23625L9.81852 1.34039Z'
                        />
                      </svg>
                    ))}
                  </div>
                </div>
                <div
                  css={tw`absolute right-0 top-[-10px]  mxl:top-[70px] lg:(top-[-10px]) md:(!top-[165px])  xxs:(!top-[135px])`}
                >
                  <Image
                    src={previewAssetUrl(
                      data?.reviewCards[2]?.image?.data?.attributes?.url
                    )}
                    alt='cats'
                    width='0'
                    height='0'
                    sizes='100vw'
                    css={tw`object-cover h-[34.875rem] mxl:h-[27rem] lg:h-[32.875rem]  md:(!h-[14.875rem]) w-full`}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={24} xl={8} css={tw`lg:hidden`}>
          <div
            css={tw`w-full h-full xl:!h-[40.625rem]  bg-color_5 rounded-[1.25rem] px-8 pt-9 relative overflow-hidden`}
            className='group hover:bg-color_9 transition-all duration-1000'
          >
            <div css={tw`flex flex-col gap-5`}>
              <p css={tw`text-color_12 text-lg leading-7`}>
                {data?.reviewCards[3]?.description}
              </p>
              <div css={tw`flex items-center gap-2`}>
                {createArray(data?.reviewCards[3]?.star).map((item) => (
                  <svg
                    key={`${item} - location_4`}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-6 h-6 group-hover:text-color_4 transition-colors duration-500'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M9.81852 1.34039C10.7513 -0.446797 13.2487 -0.446799 14.1815 1.34039L16.7369 6.23625L21.9892 7.26398C23.9361 7.64495 24.6378 10.0522 23.3391 11.4875L19.644 15.5712L20.3355 21.1395C20.576 23.076 18.6284 24.6528 16.8035 23.7477L12 21.3652L7.1965 23.7477C5.37168 24.6528 3.42401 23.076 3.6645 21.1395L4.356 15.5712L0.660928 11.4875C-0.637803 10.0522 0.0638782 7.64495 2.01083 7.26398L7.26313 6.23625L9.81852 1.34039Z'
                    />
                  </svg>
                ))}
              </div>
            </div>
            <div
              css={tw`absolute left-1/2 top-[41%] mxl:top-[55%] xl:!top-[41%]   transform -translate-x-1/2`}
            >
              <Image
                src={previewAssetUrl(
                  data?.reviewCards[3]?.image?.data?.attributes?.url
                )}
                alt='bird'
                width='0'
                height='0'
                sizes='100vw'
                css={tw`object-cover max-w-none w-auto h-[23.75rem] mxl:h-[20rem] xl:!h-[23.75rem]`}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WhyPeopleLoveUs;
