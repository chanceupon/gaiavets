import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ShowSuccessMessage } from '@/components/Message';
import { GuideDetailCollection } from '@/data/collection';
import { previewAssetUrl } from '@/data/helper';
import { ContentWrapper } from './styled';
import { useRouter } from 'next/router';
import MoreGuide from './MoreGuide';
import { useWindowWidth } from '@/utils/hook';
import { GuideType } from '@/data/enum';
import { GuideTypeName } from '@/data/constant';
import dayjs from 'dayjs';
import { Tooltip } from 'antd';

const Detail: React.FC<{ data: GuideDetailCollection }> = ({ data }) => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const widthScreen = useWindowWidth() as any;

  const onShareWhatsapp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
      `${data.title} ${process.env.NEXT_PUBLIC_DOMAIN_URL}${router.asPath}`
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('.footer');
      if (!footer) {
        return;
      }

      const footerTop = footer.getBoundingClientRect().top;

      const viewportHeight = window.innerHeight;
      const midViewport =
        widthScreen >= 2400 ? viewportHeight : viewportHeight / 2;

      if (window.scrollY > 1020 && footerTop > midViewport) {
        if (!isVisible) {
          setIsVisible(true);
        }
      } else {
        if (footerTop <= midViewport || window.scrollY <= 1020) {
          if (isVisible) {
            setIsVisible(false);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <div
      css={tw`px-[8.4375rem] pt-[2.875rem] pb-[7.5rem] lg:(px-[1.875rem] pt-[1rem]) md:(!px-5 pb-14)`}
    >
      <div css={tw`w-[54.375rem] lg:w-full`}>
        <h1
          css={tw`text-color_2 font-montserrat text-[3.125rem] font-[900] uppercase leading-[3rem] md:(text-[1.75rem] leading-8)`}
        >
          {data?.title}
        </h1>
      </div>
      <div css={tw`flex flex-col py-8 md:(pt-3 pb-5)`}>
        <p css={tw`text-color_10 text-lg leading-[1.6875rem]`}>
          {data?.type && (
            <span
              css={[
                tw`font-bold text-lg`,
                data?.type === GuideType.Article
                  ? tw`text-color_10 !font-normal`
                  : '',
              ]}
            >
              {GuideTypeName[data?.type]}{' '}
              <span css={tw`text-color_10 !font-normal`}>-</span>
            </span>
          )}{' '}
          {data?.readTime && (
            <span css={tw`text-color_10 !font-normal text-lg`}>
              {data?.readTime} <span css={tw`text-color_6`}>•</span>
            </span>
          )}{' '}
          Updated {''}
          {dayjs(data?.date).format('MMM DD, YYYY')}
        </p>
        <p css={tw`text-color_10 text-lg leading-[1.6875rem] md:text-[1rem]`}>
          {data?.subTitle}
        </p>
      </div>
      <div>
        <img
          src={previewAssetUrl(data?.image?.data?.attributes?.url)}
          css={tw`w-full h-[33.75rem] object-cover rounded-2xl md:(h-[17.25rem])`}
        />
      </div>
      <div
        css={tw`flex relative overflow-visible mt-[3.75rem] xl:(flex-col gap-5 mt-[30px]) md:mt-5`}
      >
        <div css={tw`items-center gap-5 hidden xl:flex`}>
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_DOMAIN_URL}${router.asPath}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Tooltip placement='bottom' title='Share on Facebook'>
              <div css={tw`cursor-pointer`}>
                <img
                  src='/svg/fb.svg'
                  alt='icon-fb'
                  css={tw`w-[2.75rem] h-[2.75rem]`}
                />
              </div>
            </Tooltip>
          </Link>

          <Tooltip placement='bottom' title='Share on Whatsapp'>
            <div css={tw`cursor-pointer`} onClick={onShareWhatsapp}>
              <img
                src='/svg/whatsapp.svg'
                alt='icon-whatsapp'
                css={tw`w-[2.75rem] h-[2.75rem]`}
              />
            </div>
          </Tooltip>

          <CopyToClipboard
            text={`${process.env.NEXT_PUBLIC_DOMAIN_URL}${router.asPath}`}
            onCopy={() => ShowSuccessMessage('copy')}
          >
            <Tooltip placement='bottom' title='Copy Link'>
              <div css={tw`cursor-pointer`}>
                <img
                  src='/svg/link.svg'
                  alt='icon-link'
                  css={tw`w-[2.75rem] h-[2.75rem]`}
                />
              </div>
            </Tooltip>
          </CopyToClipboard>
        </div>
        <div css={tw`xl:hidden`}>
          {!isVisible && (
            <div
              css={tw`flex flex-col items-center absolute left-[6.25rem] 3xl:(left-[3.125rem]) xxl:!left-[1.25rem]`}
            >
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_DOMAIN_URL}${router.asPath}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Tooltip placement='right' title='Share on Facebook'>
                  <div css={tw`cursor-pointer mb-5`}>
                    <img
                      src='/svg/fb.svg'
                      alt='icon-fb'
                      css={tw`w-[2.75rem] h-[2.75rem]`}
                    />
                  </div>
                </Tooltip>
              </Link>

              <Tooltip placement='right' title='Share on Whatsapp'>
                <div css={tw`cursor-pointer mb-5`} onClick={onShareWhatsapp}>
                  <img
                    src='/svg/whatsapp.svg'
                    alt='icon-whatsapp'
                    css={tw`w-[2.75rem] h-[2.75rem]`}
                  />
                </div>
              </Tooltip>

              <CopyToClipboard
                text={`${process.env.NEXT_PUBLIC_DOMAIN_URL}${router.asPath}`}
                onCopy={() => ShowSuccessMessage('copy')}
              >
                <Tooltip placement='right' title='Copy Link'>
                  <div css={tw`cursor-pointer`}>
                    <img
                      src='/svg/link.svg'
                      alt='icon-link'
                      css={tw`w-[2.75rem] h-[2.75rem]`}
                    />
                  </div>
                </Tooltip>
              </CopyToClipboard>
            </div>
          )}

          <div
            css={tw`flex flex-col items-center gap-5 pl-16 lg:(flex-row pl-0) top-[2.5rem] left-[10.625rem] 3xl:(!left-[7.5rem]) 4xl:!top-[600px]`}
            style={{
              position: 'fixed',
              zIndex: 1000,
              display: isVisible ? 'block' : 'none',
            }}
          >
            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_DOMAIN_URL}${router.asPath}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Tooltip placement='right' title='Share on Facebook'>
                <div css={tw`cursor-pointer mb-5`}>
                  <img
                    src='/svg/fb.svg'
                    alt='icon-fb'
                    css={tw`w-[2.75rem] h-[2.75rem]`}
                  />
                </div>
              </Tooltip>
            </Link>
            <Link
              href='https://www.instagram.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Tooltip placement='right' title='Share on Instagram'>
                <div css={tw`cursor-pointer mb-5`}>
                  <img
                    src='/svg/insta.svg'
                    alt='icon-instagram'
                    css={tw`w-[2.75rem] h-[2.75rem]`}
                  />
                </div>
              </Tooltip>
            </Link>

            <CopyToClipboard
              text={`${process.env.NEXT_PUBLIC_DOMAIN_URL}${router.asPath}`}
              onCopy={() => ShowSuccessMessage('copy')}
            >
              <Tooltip placement='right' title='Copy Link'>
                <div css={tw`cursor-pointer`}>
                  <img
                    src='/svg/link.svg'
                    alt='icon-link'
                    css={tw`w-[2.75rem] h-[2.75rem]`}
                  />
                </div>
              </Tooltip>
            </CopyToClipboard>
          </div>
        </div>

        <div css={tw`flex-1`}>
          <div css={tw`w-[47.875rem] m-auto flex flex-col gap-5 xl:(w-full)`}>
            <ContentWrapper className='ck-content'>
              <div dangerouslySetInnerHTML={{ __html: data?.content }} />
            </ContentWrapper>
          </div>
        </div>
      </div>

      {Number(data?.moreGuides?.data.length) > 0 && (
        <MoreGuide data={data?.moreGuides || []} />
      )}
    </div>
  );
};

export default Detail;
