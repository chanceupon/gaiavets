import { Button } from '@/storybook';
import { PAGE_ROUTES } from '@/utils/routes';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import tw from 'twin.macro';
import { StyledDrawer, WrapperDropDown } from './styled';
import { Drawer, Dropdown } from 'antd';
import Link from 'next/link';
import { fetchContact } from '@/data/fetch';
import { formatPhoneNumber } from '@/data/helper';
import Image from 'next/image';

const menus = [
  {
    key: PAGE_ROUTES.SERVICES,
    groups: [PAGE_ROUTES.SERVICES],
    title: 'Services',
  },
  {
    key: PAGE_ROUTES.TEAM,
    groups: [PAGE_ROUTES.TEAM],
    title: 'Team',
  },
  {
    key: PAGE_ROUTES.GUIDES,
    groups: [PAGE_ROUTES.GUIDES, `${PAGE_ROUTES.GUIDES}/[...slug]`],
    title: 'Guides',
  },
  {
    key: PAGE_ROUTES.ABOUT,
    groups: [PAGE_ROUTES.ABOUT],
    title: 'About',
  },
];

const menusMobile = [
  {
    key: PAGE_ROUTES.LOCATIONS,
    groups: [PAGE_ROUTES.LOCATIONS],
    title: 'Locations',
  },
  {
    key: PAGE_ROUTES.SERVICES,
    groups: [PAGE_ROUTES.SERVICES],
    title: 'Services',
  },
  {
    key: PAGE_ROUTES.TEAM,
    groups: [PAGE_ROUTES.TEAM],
    title: 'Team',
  },
  {
    key: PAGE_ROUTES.GUIDES,
    groups: [PAGE_ROUTES.GUIDES, `${PAGE_ROUTES.GUIDES}/[id]`],
    title: 'Guides',
  },
  {
    key: PAGE_ROUTES.ABOUT,
    groups: [PAGE_ROUTES.ABOUT],
    title: 'About',
  },
];

const dataLocations = [
  { id: 1, title: 'Jalan Besar' },
  { id: 2, title: 'Parksuites' },
];

const Header = () => {
  const router = useRouter();
  const [showFixedHeader, setShowFixedHeader] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);
  const [contact, setContact] = useState<
    {
      text: string;
      type: string;
      phone?: string;
      link?: string;
      mobileText?: string;
      subText?: string;
    }[]
  >([]);

  const fetchDataContact = async () => {
    try {
      const data = await fetchContact();
      setContact(data?.data?.attributes?.data);
    } catch (error) {
      console.error('Error fetching:', error);
    }
  };

  useEffect(() => {
    fetchDataContact();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setShowFixedHeader(true);
          } else {
            setShowFixedHeader(false);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowFixedHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setShowFixedHeader(false);

    if (router.pathname === '/' && router.asPath.includes('#location')) {
      setTimeout(() => {
        const section = document.getElementById('location');
        if (section) {
          section.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
      }, 1000);
    }
  }, [router.pathname]);

  return (
    <>
      <div css={tw`flex flex-col`}>
        <div css={router.pathname === PAGE_ROUTES.HOME ? tw`flex` : tw`hidden`}>
          <div
            ref={headerRef}
            css={[
              tw`w-full h-[8.75rem] flex items-center lg:h-[3.75rem]`,
              showFixedHeader ? tw`hidden` : '',
            ]}
          >
            <a
              href={formatPhoneNumber(contact[0]?.phone)}
              css={tw`flex-1 w-full h-full`}
            >
              <div
                css={tw`flex-1 h-full flex items-center justify-center bg-color_12 cursor-pointer`}
              >
                <div
                  css={tw`flex flex-col items-center justify-center gap-3 lg:(flex-row gap-1.5)`}
                >
                  <img
                    src='/svg/phone.svg'
                    alt='icon-phone'
                    css={tw`lg:(w-[1.0625rem] h-[1.0625rem]) w-[1.5rem] h-[1.5rem]`}
                  />

                  <p
                    css={tw`text-color_6 text-xl leading-[1.625rem] lg:(text-sm leading-normal hidden)`}
                  >
                    {contact[0]?.text} <br />
                    <span
                      css={tw`flex items-center text-color_6 justify-center font-semibold`}
                    >
                      {contact[0]?.phone}
                    </span>
                  </p>

                  <p
                    css={tw`text-color_6 text-sm leading-normal hidden lg:block md:!hidden`}
                  >
                    {contact[0]?.subText}
                  </p>

                  <p
                    css={tw`text-color_6 text-sm leading-normal md:block hidden`}
                  >
                    {contact[0]?.mobileText}
                  </p>
                </div>
              </div>
            </a>
            <a
              href={formatPhoneNumber(contact[1]?.phone)}
              css={tw`flex-1 w-full h-full`}
            >
              <div
                css={tw`flex-1 h-full flex items-center justify-center bg-color_11 cursor-pointer`}
              >
                <div
                  css={tw`flex flex-col items-center justify-center gap-3 lg:(flex-row gap-1.5)`}
                >
                  <img
                    src='/svg/phone.svg'
                    alt='icon-phone'
                    css={tw`lg:(w-[1.0625rem] h-[1.0625rem]) w-[1.5rem] h-[1.5rem]`}
                  />

                  <p
                    css={tw`text-color_6 text-xl leading-[1.625rem] lg:(text-sm leading-normal hidden)`}
                  >
                    {contact[1]?.text} <br />
                    <span
                      css={tw`flex items-center text-color_6 justify-center font-semibold`}
                    >
                      {contact[1]?.phone}
                    </span>
                  </p>

                  <p
                    css={tw`text-color_6 text-sm leading-normal hidden lg:block md:!hidden`}
                  >
                    {contact[1]?.subText}
                  </p>

                  <p
                    css={tw`text-color_6 text-sm leading-normal  md:block hidden `}
                  >
                    {contact[1]?.mobileText}
                  </p>
                </div>
              </div>
            </a>
            <div
              css={tw`flex-1 h-full flex items-center justify-center bg-color_9 cursor-pointer`}
              onClick={() => window.open(`${contact[2]?.link}`, '_blank')}
            >
              <div
                css={tw`flex flex-col items-center justify-center gap-3 lg:(flex-row gap-1.5)`}
              >
                <Image
                  src='/svg/pill.svg'
                  alt='icon-pill'
                  width='0'
                  height='0'
                  sizes='100vw'
                  css={tw`lg:(w-[1.0625rem] h-[1.0625rem]) w-[1.625rem] h-[1.625rem]`}
                />

                <div
                  css={tw`h-[3.25rem] flex items-center justify-center  lg:hidden`}
                >
                  <span
                    css={tw`flex items-center text-color_2 justify-center font-semibold text-xl`}
                  >
                    {contact[2]?.phone}
                  </span>
                </div>

                <p
                  css={tw`text-color_2 text-sm leading-normal hidden lg:block md:!hidden`}
                >
                  {contact[2]?.subText}
                </p>

                <p
                  css={tw`text-color_2 text-sm leading-normal md:block hidden`}
                >
                  {contact[2]?.mobileText}
                </p>
              </div>
            </div>
          </div>

          <div
            css={[
              tw` w-full fixed top-0 left-0 z-[99999] items-center`,
              showFixedHeader ? tw`flex` : tw`hidden`,
            ]}
          >
            <a
              href={formatPhoneNumber(contact[0]?.phone)}
              css={tw`flex-1 w-full h-full cursor-pointer`}
            >
              <div css={tw`flex-1 h-full bg-color_12 py-2.5`}>
                <div css={tw`flex items-center justify-center gap-3 `}>
                  <Image
                    src='/svg/phone.svg'
                    alt='icon-phone'
                    width='0'
                    height='0'
                    sizes='100vw'
                    css={tw`lg:(w-[1.0625rem] h-[1.0625rem]) w-[1.5rem] h-[1.5rem]`}
                  />

                  <p
                    css={tw`text-color_6 text-xl leading-[1.625rem] lg:(text-sm leading-normal) md:hidden`}
                  >
                    {contact[0]?.subText}
                  </p>

                  <p
                    css={tw`text-color_6 text-sm leading-normal md:block hidden`}
                  >
                    {contact[0]?.mobileText}
                  </p>
                </div>
              </div>
            </a>
            <a
              href={formatPhoneNumber(contact[1]?.phone)}
              css={tw`flex-1 w-full h-full cursor-pointer`}
            >
              <div css={tw`flex-1 h-full bg-color_11 py-2.5`}>
                <div css={tw`flex items-center justify-center gap-3 `}>
                  <Image
                    src='/svg/phone.svg'
                    alt='icon-phone'
                    width='0'
                    height='0'
                    sizes='100vw'
                    css={tw`lg:(w-[1.0625rem] h-[1.0625rem]) w-[1.5rem] h-[1.5rem]`}
                  />

                  <p
                    css={tw`text-color_6 text-xl leading-[1.625rem] lg:(text-sm leading-normal)  md:hidden`}
                  >
                    {contact[1]?.subText}
                  </p>

                  <p
                    css={tw`text-color_6 text-sm leading-normal  md:block hidden`}
                  >
                    {contact[1]?.mobileText}
                  </p>
                </div>
              </div>
            </a>
            <div
              css={tw`flex-1 h-full bg-color_9 py-2.5 cursor-pointer`}
              onClick={() => window.open(`${contact[2]?.link}`, '_blank')}
            >
              <div css={tw`flex items-center justify-center gap-3 `}>
                <Image
                  src='/svg/pill.svg'
                  alt='icon-pill'
                  width='0'
                  height='0'
                  sizes='100vw'
                  css={tw`lg:(w-[1.0625rem] h-[1.0625rem]) w-[1.625rem] h-[1.625rem]`}
                />

                <p
                  css={tw`text-color_2 text-xl  leading-[1.625rem] lg:(text-sm leading-normal) md:hidden`}
                >
                  {contact[2]?.subText}
                </p>

                <p
                  css={tw`text-color_2 text-sm leading-normal md:block hidden`}
                >
                  {contact[2]?.mobileText}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          css={tw`flex items-center py-9 pl-11 pr-[8.4375rem] gap-20 lg:(px-[1.5625rem] py-[1.5rem]) md:!px-5`}
        >
          <Link href={PAGE_ROUTES.HOME}>
            <div css={tw`cursor-pointer`}>
              <Image
                src='/a@3x.png'
                alt='logo'
                width='0'
                height='0'
                sizes='100vw'
                css={tw`md:(w-[8.5rem] h-[4.375rem]) w-[13.8125rem] h-[7.0625rem] object-cover`}
              />
            </div>
          </Link>
          <div
            css={tw`flex-1 w-full flex items-center justify-between pt-6 xl:hidden`}
          >
            <div css={tw`flex-1 flex items-center gap-2`}>
              <WrapperDropDown id='styled-dropdown'>
                <Dropdown
                  placement='bottomLeft'
                  getPopupContainer={() =>
                    document.getElementById('styled-dropdown') || document.body
                  }
                  menu={{
                    items: [
                      {
                        key: '1',
                        label: (
                          <div css={tw`flex flex-col w-full py-2`}>
                            {dataLocations.map((a, index) => (
                              <Link
                                href={`${PAGE_ROUTES.LOCATIONS}/#${a?.id}`}
                                css={
                                  index === 0
                                    ? tw`!border-b !border-color_4`
                                    : tw``
                                }
                              >
                                <div
                                  key={a.id}
                                  css={tw`py-2  cursor-pointer flex items-center px-5`}
                                  className='styled-item'
                                >
                                  <p
                                    css={tw`text-lg text-color_4 font-semibold leading-[1.625rem] text-left`}
                                    className='text'
                                  >
                                    {a?.title}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        ),
                      },
                    ],
                  }}
                >
                  <div
                    css={[
                      tw`py-2 px-4 cursor-pointer`,
                      router.pathname === PAGE_ROUTES.LOCATIONS
                        ? tw`underline decoration-color_4`
                        : '',
                    ]}
                  >
                    <p
                      css={tw`text-lg text-color_4 font-semibold leading-[1.625rem]`}
                      className='hover:underline decoration-color_4'
                    >
                      Locations
                    </p>
                  </div>
                </Dropdown>
              </WrapperDropDown>

              {menus.map((item) => {
                const isActive = item?.groups?.includes(router.pathname);

                return (
                  <Link href={item?.key}>
                    <div
                      css={[
                        tw`py-2 px-4 cursor-pointer transition-all`,
                        isActive ? tw`underline decoration-color_4` : '',
                      ]}
                      className='hover:underline decoration-color_4 '
                    >
                      <p
                        css={tw`text-lg text-color_4 font-semibold leading-[1.625rem]`}
                        key={item?.title}
                      >
                        {item?.title}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div css={tw`flex items-center justify-end`}>
              <Link href='https://gaiapetshop.com' target='_blank'>
                <Button css={tw`h-[3rem] min-w-[12.5rem] !bg-transparent`}>
                  <div css={tw`flex items-center gap-2`}>
                    <p css={tw`text-lg font-semibold text-color_4 leading-7`}>
                      Gaia Pet Shop
                    </p>
                    <img
                      src='/svg/union.svg'
                      alt='icon-union'
                      css={tw`w-[1.5rem] h-[1.5rem]`}
                    />
                  </div>
                </Button>
              </Link>
            </div>
          </div>
          <div
            css={tw`hidden xl:(flex flex-1 items-center justify-end)`}
            onClick={() => setOpen(true)}
          >
            <img src='/svg/menu.svg' alt='gaia-vets' width={27} height={23} />
          </div>
        </div>
      </div>
      <StyledDrawer id='styled_drawer'>
        <Drawer
          width={390}
          styles={{
            header: {
              padding: '0.625rem 1rem',
            },
            body: {
              padding: '0 1.5rem',
            },
          }}
          getContainer={() =>
            document.getElementById('styled_drawer') || document.body
          }
          open={open}
          placement='right'
        >
          <div css={tw`py-10 pl-5`}>
            <div
              css={tw`flex items-center justify-end`}
              onClick={() => setOpen(false)}
            >
              <img src='/svg/close.svg' alt='icon-close' />
            </div>

            <div css={tw`flex-1 flex flex-col gap-2 pt-12 `}>
              {menusMobile.map((item) => {
                const isActive = item?.groups?.includes(router.pathname);

                return (
                  <div
                    css={[
                      tw`py-2 px-4 cursor-pointer`,
                      isActive ? tw`underline decoration-color_4` : '',
                    ]}
                    onClick={() => {
                      if (item?.key === PAGE_ROUTES.LOCATIONS) {
                        router.push(`${PAGE_ROUTES.LOCATIONS}/#1`);
                      } else {
                        router.push(item.key);
                      }
                      setOpen(false);
                    }}
                  >
                    <p
                      css={tw`text-3xl text-color_4 font-semibold leading-normal [letter-spacing: -0.0563rem]`}
                      key={item?.title}
                    >
                      {item?.title}
                    </p>
                  </div>
                );
              })}
              <div
                css={[tw`py-2 px-4 cursor-pointer`]}
                onClick={() => {
                  window.open('https://gaiapetshop.com', '_blank');
                  setOpen(false);
                }}
              >
                <p
                  css={tw`text-3xl text-color_4 font-semibold leading-normal [letter-spacing: -0.0563rem]`}
                  key='shop'
                >
                  Shop
                </p>
              </div>
            </div>
          </div>
        </Drawer>
      </StyledDrawer>
    </>
  );
};

export default Header;
