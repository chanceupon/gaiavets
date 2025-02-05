import React, { useState } from 'react';
import tw from 'twin.macro';
import { motion } from 'framer-motion';
import { formatPhoneNumber } from '@/data/helper';
import Link from 'next/link';
import { PAGE_ROUTES } from '@/utils/routes';

const data = [
  {
    question: 'Do I need to make an appointment to see the vet?',
    answer: () => (
      <div css={tw`flex flex-col`}>
        <p css={tw`text-color_11 text-lg leading-7 block mb-3`}>
          Yes, this is recommended to reduce waiting time.{' '}
        </p>
        <p css={tw`text-color_11 text-lg leading-7`}>
          To book your appointment at{' '}
          <span css={tw`text-color_11 font-bold`}>Jalan Besar</span>, call{' '}
          <Link href={formatPhoneNumber('6950 4533')}>
            <span css={tw`text-color_11 font-bold underline cursor-pointer`}>
              6950 4533.
            </span>
          </Link>
        </p>
        <p css={tw`text-color_11 text-lg leading-7 block mb-3`}>
          Our operating hours are weekdays 10am - 10pm and weekends 9am - 9pm.
        </p>
        <p css={tw`text-color_11 text-lg leading-7`}>
          To book your appointment at{' '}
          <span css={tw`text-color_11 font-bold`}>Parksuites</span> (Holland
          Grove Rd), call{' '}
          <Link href={formatPhoneNumber('6727 7511')}>
            <span css={tw`text-color_11 font-bold underline cursor-pointer`}>
              6727 7511.
            </span>
          </Link>
        </p>
        <p css={tw`text-color_11 text-lg leading-7`}>
          Our operating hours are weekdays 10am - 10pm, and weekends 9am - 5pm.
        </p>
      </div>
    ),
  },
  {
    question: 'Do you accept walk-ins?',
    answer: () => (
      <p css={tw`text-color_11 text-lg leading-7 `}>
        Yes. To avoid long waiting times, especially during peak periods, please
        call your preferred clinic directly for an estimated wait time. Reach{' '}
        {''}
        <span css={tw`text-color_11 font-bold`}>Jalan Besar</span> at{' '}
        <Link href={formatPhoneNumber('6950 4533')}>
          <span css={tw`text-color_11 font-bold underline cursor-pointer`}>
            6950 4533
          </span>{' '}
        </Link>
        or <span css={tw`text-color_11 font-bold`}>Parksuites </span>
        (Holland Grove Rd) at{' '}
        <Link href={formatPhoneNumber('6727 7511')}>
          <span css={tw`text-color_11 font-bold underline cursor-pointer`}>
            6727 7511.
          </span>
        </Link>
      </p>
    ),
  },
  {
    question: 'How much does a vet visit cost?',
    answer: () => (
      <p css={tw`text-color_11 text-lg leading-7 `}>
        Our standard consultation fees start from $40 (incl. GST).
      </p>
    ),
  },
  {
    question: 'What type of animals do you see?',
    answer: () => (
      <div css={tw`flex flex-col`}>
        <p css={tw`text-color_11 text-lg leading-7 `}>
          We see and treat all types of animals at both locations.
        </p>
        <p css={tw`text-color_11 text-lg leading-7 `}>
          Cats, dogs, birds, exotic and pocket pets e.g. terrapins, rabbits,
          guinea pigs etc. are all welcome!
        </p>
      </div>
    ),
  },
  {
    question: 'Are the services offered at each Gaia Vets location different?',
    answer: () => (
      <div css={tw`flex flex-col`}>
        <p css={tw`text-color_11 text-lg leading-7 block mb-3`}>
          Yes. Jalan Besar is our larger veterinary centre, offering CT scan
          services and a pet hospital.
        </p>
        <p css={tw`text-color_11 text-lg leading-7 `}>
          While our clinic has fixed hours for{' '}
          <Link href={`${PAGE_ROUTES.HOME}#location`}>
            <span css={tw`text-color_11 font-bold underline cursor-pointer`}>
              consultations
            </span>
          </Link>
          , our pet hospital provides 24/7 round-the-clock monitoring and
          critical care for hospitalised pets.
        </p>
      </div>
    ),
  },
  {
    question: 'What forms of payment do you accept?',
    answer: () => (
      <p css={tw`text-color_11 text-lg leading-7 `}>
        We accept cash, NETS, credit cards, PayNow and/or CDC Vouchers.
        Instalment plans are also available via a debit card (interest rate fees
        apply.)
      </p>
    ),
  },
  {
    question: 'Is your hospital open 24/7 for emergencies and care?',
    answer: () => (
      <div css={tw`flex flex-col`}>
        <p css={tw`text-color_11 text-lg leading-7 block mb-3`}>
          Our hospital is operational 24/7 to provide care for warded patients
          who need continuous monitoring and treatment. However, our
          consultation hours for new appointments and routine visits are from
          10am - 10pm on weekdays and 9am - 9pm on weekends.
        </p>
        <p css={tw`text-color_11 text-lg leading-7 `}>
          If you have an emergency outside these hours, please visit a 24-hour
          emergency hospital nearest to you instead.
        </p>
      </div>
    ),
  },
  {
    question: 'Do you offer online consultations over video call? ',
    answer: () => (
      <p css={tw`text-color_11 text-lg leading-7 `}>
        Yes. You may call{' '}
        <Link href={formatPhoneNumber('6950 4533')}>
          <span css={tw`text-color_11 font-bold underline cursor-pointer`}>
            6950 4533
          </span>
        </Link>{' '}
        to book an appointment. Do note that online consultation slots are only
        available during our operating hours.
      </p>
    ),
  },
  {
    question: 'Do you accept referrals from other vet clinics?',
    answer: () => (
      <p css={tw`text-color_11 text-lg leading-7 `}>
        Yes we do. You may call
        <span css={tw`text-color_11 font-bold`}> Jalan Besar</span> at{' '}
        <Link href={formatPhoneNumber('6950 4533')}>
          <span css={tw`text-color_11 font-bold underline cursor-pointer`}>
            6950 4533{' '}
          </span>
        </Link>
        or <span css={tw`text-color_11 font-bold`}>Parksuites </span> at{' '}
        <Link href={formatPhoneNumber('6727 7511')}>
          <span css={tw`text-color_11 font-bold underline cursor-pointer`}>
            6727 7511.
          </span>
        </Link>
      </p>
    ),
  },
];

const Item = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleFAQ} css={tw`flex items-center gap-4 cursor-pointer`}>
        <div
          css={tw`w-[2.5rem] h-[2.5rem] rounded-full border border-color_4 flex items-center justify-center md:(w-[2rem] h-[2rem])`}
        >
          <p
            css={tw`text-[1.375rem] text-color_4 font-medium leading-2 md:(text-lg leading-[1.125rem])`}
          >
            {index}
          </p>
        </div>
        <div css={tw`flex-1 flex items-center gap-2.5`}>
          <div css={tw`flex-1`}>
            <h3
              css={tw`text-[1.625rem] font-semibold leading-normal text-color_2 md:text-xl`}
            >
              {item?.question}
            </h3>
          </div>
          <motion.img
            key={isOpen ? 'up' : 'down'}
            src={isOpen ? '/svg/chevron-up.svg' : '/svg/chevron-down.svg'}
            alt='toggle-icon'
            initial={false}
            animate={{ x: 0 }}
            transition={{
              duration: 1.5,
              ease: [0.42, 0, 0.58, 1],
            }}
            css={tw`w-[1.375rem] h-[0.75rem]`}
          />
        </div>
      </div>

      <div
        css={[
          tw`pl-[3.5rem] md:pl-[3.125rem] w-[90%]`,
          isOpen ? tw`pt-3.5` : tw`pt-0`,
        ]}
      >
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          style={{ overflow: 'hidden' }}
        >
          {item?.answer ? <div>{item?.answer()}</div> : null}
        </motion.div>
      </div>

      <div css={tw`border-b border-b-color_4 pt-7 md:pt-5`} />
    </div>
  );
};

const FAQ = () => {
  return (
    <div css={tw`flex flex-col gap-7 pt-10 md:(gap-5)`}>
      <div css={tw`flex items-center gap-5 md:gap-4`}>
        <p
          css={tw`text-3xl font-semibold leading-[2.375rem] text-color_4 md:(text-2xl leading-normal)`}
        >
          Useful FAQs
        </p>
        <img
          src='/svg/question.svg'
          alt='icon-question'
          css={tw`w-[2.25rem] h-[2.25rem] md:(w-[1.5rem] h-[1.5rem])`}
        />
      </div>

      <div css={tw`flex flex-col gap-7 md:gap-5`}>
        {data?.map((item, index) => <Item item={item} index={index + 1} />)}
      </div>
    </div>
  );
};

export default FAQ;
