import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';
import { motion } from 'framer-motion';

const LocationTips2 = ({ isOpenTip2 }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    isOpenTip2 && setIsShow(true);
  }, [isOpenTip2]);

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
              alt='icon-down'
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
              src='/location/fullService.png'
              alt='fullService'
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
                  Full-service vet clinic with x-rays, blood diagnostics and
                  surgical capabilities. We are also supported by our Jalan
                  Besar branch for in-depth imaging, e.g. CT Scan.
                </p>
              </div>
            </div>
          </div>
          <div css={tw`flex flex-col gap-7 md:gap-5`}>
            <img
              src='/location/ampleParking.png'
              alt='ampleParking'
              css={tw`w-full h-[17.5rem] object-cover rounded-2xl`}
            />
            <div css={tw`flex flex-col gap-5`}>
              <h1
                css={tw`text-color_11 text-3xl font-bold leading-normal [letter-spacing: -0.0563rem] md:(text-[1.75rem])`}
              >
                Parking
              </h1>
              <div css={tw`flex flex-col gap-2.5`}>
                <p css={tw`text-lg leading-[1.6875rem] text-color_2`}>
                  Sheltered and located within Parksuites Condominium at B1,
                  there are ample lots for visitors, be it rain or shine.
                </p>
              </div>
            </div>
          </div>

          <div css={tw`flex flex-col gap-7 md:gap-5`}>
            <img
              src='/location/amenities.png'
              alt='amenities'
              css={tw`w-full h-[17.5rem] object-cover rounded-2xl`}
            />
            <div css={tw`flex flex-col gap-5`}>
              <h1
                css={tw`text-color_11 text-3xl font-bold leading-normal [letter-spacing: -0.0563rem] md:(text-[1.75rem])`}
              >
                Amenities
              </h1>
              <div css={tw`flex flex-col gap-2.5 ml-3`}>
                <div css={tw`flex gap-2`}>
                  <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                  <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                    Near pet-friendly Cedele Bakery & Kitchen
                  </p>
                </div>
                <div css={tw`flex gap-2`}>
                  <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                  <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                    Steps away from Meatmen Butcher, Wine Connection, and
                    7-Eleven
                  </p>
                </div>
                <div css={tw`flex gap-2`}>
                  <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                  <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                    3 - 5 minute walk to Cold Storage Jelita
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

export default LocationTips2;
