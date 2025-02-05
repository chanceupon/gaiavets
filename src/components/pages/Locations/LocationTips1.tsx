import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';
import { motion } from 'framer-motion';

const LocationTips1 = ({ isOpenTip1 }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    isOpenTip1 && setIsShow(true);
  }, [isOpenTip1]);

  return (
    <div css={[tw`pt-12 md:(pt-7)`, isShow ? tw`md:(pb-[1.25rem])` : '']}>
      <div css={tw`inline-block`}>
        <div
          css={tw`flex items-center gap-4 cursor-pointer`}
          onClick={() => setIsShow(!isShow)}
        >
          <h1
            css={tw`text-color_2 font-montserrat text-[2rem] font-[900] leading-8 underline uppercase md:(text-2xl leading-[1.875rem])`}
          >
            Location tips
          </h1>
          <div>
            <img
              src={!isShow ? '/svg/chevron-down.svg' : '/svg/chevron-up.svg'}
              css={tw`w-[1.375rem] h-[0.75rem]`}
            />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isShow ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        css={[tw`overflow-hidden pt-7`]}
      >
        <div
          css={tw`grid grid-cols-3 gap-[1.875rem] lg:grid-cols-2 md:(!grid-cols-1 gap-7)`}
        >
          <div css={tw`flex flex-col gap-7 md:gap-5`}>
            <img
              src='/location/image_1.png'
              alt='location-1'
              css={tw`w-full h-[17.5rem] object-cover rounded-2xl`}
            />
            <div css={tw`flex flex-col gap-5`}>
              <h1
                css={tw`text-color_11 text-3xl font-bold leading-normal [letter-spacing: -0.0563rem] md:(text-[1.75rem])`}
              >
                Services
              </h1>
              <div css={tw`flex flex-col gap-2.5`}>
                <p css={tw`text-lg leading-[1.6875rem] text-color_2`}>
                  One-stop veterinary centre equipped with advanced diagnostic
                  tools, including CT scan and fluoroscopy.
                </p>
                <p css={tw`text-lg leading-[1.6875rem] text-color_2`}>
                  Plus, a pet hospital that operates 24/7 and fully furnished
                  surgical suites equipped to handle orthopaedic repairs,
                  abdominal surgeries and more.
                </p>
              </div>
            </div>
          </div>
          <div css={tw`flex flex-col gap-7 md:gap-5`}>
            <img
              src='/location/image_2.png'
              alt='location-2'
              css={tw`w-full h-[17.5rem] object-cover rounded-2xl`}
            />
            <div css={tw`flex flex-col gap-5`}>
              <h1
                css={tw`text-color_11 text-3xl font-bold leading-normal [letter-spacing: -0.0563rem] md:(text-[1.75rem])`}
              >
                Parking
              </h1>
              <div css={tw`flex flex-col gap-2.5 ml-3`}>
                <div css={tw`flex gap-2`}>
                  <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                  <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                    <span
                      css={tw`text-lg text-color_2 font-bold leading-[1.6875rem]`}
                    >
                      Car Park at Beatty Rd{' '}
                    </span>
                    opp. MOE Umar Pulavar Tamil Language Centre. Access Gaia
                    Vets via back entrance.
                  </p>
                </div>

                <div css={tw`flex gap-2`}>
                  <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                  <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                    <span
                      css={tw`text-lg text-color_2 font-bold leading-[1.6875rem]`}
                    >
                      Car Park at Beatty Rd{' '}
                    </span>
                    opp. Sturdee Residences.
                  </p>
                </div>
                <div css={tw`flex gap-2`}>
                  <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                  <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                    <span
                      css={tw`text-lg text-color_2 font-bold leading-[1.6875rem]`}
                    >
                      Off-Street Parallel Parking{' '}
                    </span>
                    along Jalan Besar and Beatty Rd.
                  </p>
                  <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}></p>
                </div>
                <div css={tw`flex gap-2`}>
                  <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                  <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                    <span
                      css={tw`text-lg text-color_2 font-bold leading-[1.6875rem]`}
                    >
                      Heavy Vehicle Car Park{' '}
                    </span>
                    at Bendemeer Rd.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div css={tw`flex flex-col gap-7 md:gap-5`}>
            <img
              src='/location/image_3.png'
              alt='location-3'
              css={tw`w-full h-[17.5rem] object-cover rounded-2xl`}
            />
            <div css={tw`flex flex-col gap-5`}>
              <h1
                css={tw`text-color_11 text-3xl font-bold leading-normal [letter-spacing: -0.0563rem] md:(text-[1.75rem])`}
              >
                Shops
              </h1>
              <div css={tw`flex flex-col gap-2.5 ml-3`}>
                <div css={tw`flex gap-2`}>
                  <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                  <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                    Numerous food options at ARC380, e.g. Famous Golden Mile
                    Thai Pancake.
                  </p>
                </div>
                <div css={tw`flex gap-2`}>
                  <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                  <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                    2 - 4 minute walk to Coba Kedai Kopi, Abundance, Punggol
                    Nasi Lemak, and pet-friendly cafe, Moonchild.
                  </p>
                </div>
                <div css={tw`flex gap-2`}>
                  <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                  <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                    Just a 3-minute drive to City Square Mall.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LocationTips1;
