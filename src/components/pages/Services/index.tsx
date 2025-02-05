import { Button } from '@/storybook';
import React, { useState } from 'react';
import tw from 'twin.macro';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PAGE_ROUTES } from '@/utils/routes';

const GeneralServices = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleFAQ} css={tw`flex items-center gap-4 cursor-pointer`}>
        <div css={tw`flex-1 flex items-center gap-1`}>
          <div css={tw`flex-1`}>
            <h3
              css={tw`text-[2.25rem] font-montserrat font-black leading-normal text-color_2 uppercase md:(text-2xl !leading-7)`}
            >
              General services
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

      <div css={[isOpen ? tw`pt-8 pb-[2.5rem] md:(pb-7 pt-4)` : tw`pt-0`]}>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          style={{ overflow: 'hidden' }}
        >
          <div css={tw`flex flex-col gap-8 md:gap-5`}>
            <div css={tw`flex flex-col gap-8 md:(flex-col gap-5)`}>
              <p css={tw`text-lg text-color_2 leading-7`}>
                Our dedicated vet team practises evidence-based medicine with a
                pet-first approach, guiding you through every stage of your
                pet's health journey. Our prices are affordable and our vets are
                invested in your pet's long term health and well-being.
              </p>
              <img
                src='/services/1_Gen_Services.png'
                alt='1_Gen_Services'
                css={tw`xxl:h-[23.4375rem] object-cover rounded-2xl md:(!h-[13.75rem] w-full)`}
              />
            </div>
            <div
              css={tw`grid grid-cols-2 gap-x-10 gap-y-5 md:(!grid-cols-1 gap-y-2.5) px-3.5`}
            >
              <div css={tw`flex gap-2`}>
                <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                  General Health Check
                </p>
              </div>
              <div css={tw`flex gap-2`}>
                <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                  Micro-chipping & Health Certification
                </p>
              </div>
              <div css={tw`flex gap-2`}>
                <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                  Pre-export Health Check
                </p>
              </div>
              <div css={tw`flex gap-2`}>
                <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                  Spaying & Sterilisation
                </p>
              </div>
              <div css={tw`flex gap-2`}>
                <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                  Complete Pet Health Screening
                </p>
              </div>
              <div css={tw`flex gap-2`}>
                <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                  Routine Ear & Nail Care
                </p>
              </div>
              <div css={tw`flex gap-2`}>
                <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                  Routine Pet Vaccinations
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div css={tw`border-b border-b-color_4 pt-7 md:pt-2.5`} />
    </div>
  );
};

const DentalCare = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleFAQ} css={tw`flex items-center gap-4 cursor-pointer`}>
        <div css={tw`flex-1 flex items-center gap-1`}>
          <div css={tw`flex-1`}>
            <h3
              css={tw`text-[2.25rem] font-montserrat font-black leading-normal text-color_2 uppercase md:(text-2xl !leading-7)`}
            >
              Dental care
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

      <div css={[isOpen ? tw`pt-8 pb-[2.5rem] md:(pb-7 pt-4) ` : tw`pt-0`]}>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          style={{ overflow: 'hidden' }}
        >
          <div css={tw`flex flex-col gap-8 md:gap-5`}>
            <div css={tw`flex flex-col gap-8 md:(flex-col gap-5)`}>
              <p css={tw`text-lg text-color_2 leading-7`}>
                Dental hygiene is important in your pets' overall health because
                oral bacteria can spread through the bloodstream, potentially
                harming his/her heart, kidneys, and lungs. We provide complete
                dental services from basic teeth scaling to detecting dental
                abscesses using CT imaging.
              </p>
              <img
                src='/services/2_Dental.png'
                alt='2_Dental'
                css={tw`xxl:h-[23.4375rem] object-cover rounded-2xl md:(!h-[13.75rem] w-full)`}
              />
            </div>
            <div
              css={tw`grid grid-cols-2 gap-x-10 gap-y-5 md:(!grid-cols-1 gap-2.5) px-3.5`}
            >
              <div css={tw`flex gap-2`}>
                <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                  Teeth cleaning & polishing
                </p>
              </div>
              <div css={tw`flex gap-2`}>
                <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                  Dental X-rays
                </p>
              </div>
              <div css={tw`flex gap-2`}>
                <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                  Dental CT scan to detect abscesses etc.
                </p>
              </div>
              <div css={tw`flex gap-2`}>
                <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                  Tooth extraction
                </p>
              </div>
              <div css={tw`flex gap-2`}>
                <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                  Oral surgery (fixing jaw fracture, tumour removal etc.)
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div css={tw`border-b border-b-color_4 pt-7 md:pt-2.5`} />
    </div>
  );
};

const Surgery = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleFAQ} css={tw`flex items-center gap-4 cursor-pointer`}>
        <div css={tw`flex-1 flex items-center gap-1`}>
          <div css={tw`flex-1`}>
            <h3
              css={tw`text-[2.25rem] font-montserrat font-black leading-normal text-color_2 uppercase md:(text-2xl !leading-7)`}
            >
              Surgery
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

      <div css={[isOpen ? tw`pt-8 pb-[2.5rem] md:(pb-7 pt-4)` : tw`pt-0`]}>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          style={{ overflow: 'hidden' }}
        >
          <div css={tw`flex flex-col gap-8 md:gap-5`}>
            <div css={tw`flex flex-col gap-8 md:(flex-col gap-5)`}>
              <p css={tw`text-lg text-color_2 leading-7`}>
                At Gaia Vets, we offer a full range of services, from complex
                soft tissue and orthopaedic surgeries to advanced diagnostic
                imaging. With us, your pet has access to the latest medical
                solutions and a dedicated team committed to delivering the
                highest standard of care.
              </p>
              <img
                src='/services/3_Surgery.png'
                alt='3_Surgery'
                css={tw`xxl:h-[23.4375rem] object-cover rounded-2xl md:(!h-[13.75rem] w-full)`}
              />
            </div>
            <div
              css={tw`grid grid-cols-2 gap-x-10 gap-y-5 md:(!grid-cols-1 gap-2.5) px-3.5`}
            >
              <div css={tw`flex gap-2`}>
                <span css={tw`text-xs text-color_2 mt-1.5`}>●</span>
                <p css={tw`text-lg text-color_2 leading-[1.6875rem] font-bold`}>
                  Soft Tissue Surgery:{' '}
                  <span css={tw`text-lg text-color_2 font-normal`}>
                    A wide spectrum of procedures that include everything that's
                    not related to bones, joints, muscles, or the nerves
                  </span>
                </p>
              </div>
              <div css={tw`flex gap-2`}>
                <span css={tw`text-xs text-color_2 mt-1.5`}>●</span>
                <p css={tw`text-lg text-color_2 leading-[1.6875rem] font-bold`}>
                  Orthopaedic Surgery:{' '}
                  <span css={tw`text-lg text-color_2 font-normal`}>
                    Surgery on the bones, joints, tendons, ligaments, and
                    muscles e.g. fractures, dislocations, arthritis, tumours and
                    hereditary disorders (e.g. hip dysplasia, knee cap
                    dislocation)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div css={tw`border-b border-b-color_4 pt-7 md:pt-2.5`} />
    </div>
  );
};

const Hospitalisation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleFAQ} css={tw`flex items-center gap-4 cursor-pointer`}>
        <div css={tw`flex-1 flex items-center gap-1`}>
          <div css={tw`flex-1`}>
            <h3
              css={tw`text-[2.25rem] font-montserrat font-black leading-normal text-color_2 uppercase md:(text-2xl !leading-7)`}
            >
              Hospitalisation
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

      <div css={[isOpen ? tw`pt-8 pb-[2.5rem] md:(pb-7 pt-4)` : tw`pt-0`]}>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          style={{ overflow: 'hidden' }}
        >
          <div css={tw`flex flex-col gap-8 md:gap-5`}>
            <div css={tw`flex flex-col gap-8 md:(flex-col gap-5)`}>
              <p css={tw`text-lg text-color_2 leading-7`}>
                While we have fixed{' '}
                <Link href={`${PAGE_ROUTES.HOME}#location`}>
                  <span
                    css={tw`underline font-bold text-color_2 cursor-pointer`}
                  >
                    clinic hours
                  </span>{' '}
                </Link>
                for consultations, our pet hospital is operational 24/7 to
                provide continuous monitoring and critical care for warded
                patients. Our wards and ICU are spacious and managed by a
                dedicated veterinary team to care for your pets and give you a
                peace of mind.
              </p>
              <img
                src='/services/4_Hospitalisation.png'
                alt='4_Hospitalisation'
                css={tw`xxl:h-[23.4375rem] object-cover rounded-2xl md:(!h-[13.75rem] w-full)`}
              />
            </div>
            <div css={tw`flex gap-x-10 gap-y-5 lg:flex-col `}>
              <div css={tw`flex flex-1 flex-col`}>
                <p css={tw`text-xl text-color_2 font-bold leading-7 `}>
                  Types of Hospitalisation
                </p>
                <div css={tw`flex flex-col pl-3.5 gap-2.5 pt-1.5`}>
                  <div css={tw`flex flex-col pl-1`}>
                    <div css={tw`flex`}>
                      <span css={tw`text-lg text-color_2 font-bold mr-0.5 `}>
                        1.{''}
                      </span>
                      <p css={tw`text-lg text-color_2 font-bold`}>
                        {''} Comprehensive Care for Serious Conditions
                      </p>
                    </div>
                    <p css={tw`text-lg text-color_2 pl-5`}>
                      When pets face serious illness or require major surgery,
                      hospitalisation ensures they receive continuous
                      monitoring, wound management and care, and treatment.
                    </p>
                  </div>
                  <div css={tw`flex flex-col`}>
                    <div css={tw`flex`}>
                      <span css={tw`text-lg text-color_2 font-bold mr-0.5 `}>
                        2.{''}
                      </span>
                      <p css={tw`text-lg text-color_2 font-bold`}>
                        Intravenous Therapy for Critical Care
                      </p>
                    </div>
                    <p css={tw`text-lg text-color_2 pl-5`}>
                      For conditions like dehydration, blood loss, or the need
                      for anaesthesia, an IV catheter and fluid pump are used to
                      deliver essential fluids directly into your pet's
                      bloodstream. Such cases require hospitalisation for
                      careful monitoring during treatment.
                    </p>
                  </div>
                </div>
              </div>
              <div css={tw`flex flex-1 flex-col`}>
                <p css={tw`text-xl text-color_2 font-bold leading-7 `}>
                  What to Expect During Your Pet's Hospital Stay
                </p>
                <p css={tw`text-lg text-color_2`}>
                  If your pet needs to be hospitalised, our veterinary team will
                  guide you on the length of stay, visiting hours, provide
                  updates and post-discharge care. Our vets will brief you on
                  any procedures or treatments provided, along with associated
                  costs.
                </p>
                <p css={tw`text-lg text-color_2 py-5`}>
                  Your pet will stay in a comfortable, individual cage or pen,
                  with regular updates from our team at least once a day, or
                  more frequently if needed. We'll provide food and water, and
                  you're welcome to discuss any special dietary needs or
                  concerns with us during admission or by contacting our clinic
                  during operating hours.
                </p>
                <div>
                  <p css={tw`text-xl text-color_2 font-bold leading-7 `}>
                    Referrals for Pet Hospitalisation
                  </p>
                  <p css={tw`text-lg text-color_2`}>
                    We also accept pets referred by your primary vet and ensure
                    they receive the same high-quality care and attentiveness
                    that all pets deserve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div css={tw`border-b border-b-color_4 pt-7 md:pt-2.5`} />
    </div>
  );
};

const Xray = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleFAQ} css={tw`flex items-center gap-4 cursor-pointer`}>
        <div css={tw`flex-1 flex items-center gap-1`}>
          <div css={tw`flex-1`}>
            <h3
              css={tw`text-[2.25rem] font-montserrat font-black  leading-normal text-color_2 uppercase md:(text-2xl !leading-7)`}
            >
              X-ray, Fluoroscopy & Ultrasound
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

      <div css={[isOpen ? tw`pt-8 pb-[2.5rem] md:(pb-7 pt-4)` : tw`pt-0`]}>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          style={{ overflow: 'hidden' }}
        >
          <div css={tw`flex flex-col gap-8 md:gap-5`}>
            <div css={tw`flex flex-col gap-8 md:(flex-col gap-5)`}>
              <p css={tw`text-lg text-color_2 leading-7`}>
                The full array of advanced imaging services is available at both
                Jalan Besar and Parksuites. These tools are essential for
                diagnosing a variety of diseases from heart and respiratory to
                periodontal. Your pet is in good hands with our experienced
                veterinary team, who will ensure your pet is comfortable during
                X-rays and ultrasounds.
              </p>
              <img
                src='/services/5_Gen_Xray.png'
                alt='5_Gen_Xray'
                css={tw`xxl:h-[23.4375rem] object-cover rounded-2xl md:(!h-[13.75rem] w-full)`}
              />
            </div>
            <div css={tw`flex gap-x-10 gap-y-5  lg:flex-col`}>
              <div css={tw`flex flex-1 flex-col gap-6`}>
                <p css={tw`text-xl text-color_2 font-bold leading-7 `}>
                  What is the difference between X-ray, Fluoroscopy and
                  Ultrasound for pets?
                </p>
                <div css={tw`flex flex-col pl-3.5 gap-5 md:gap-2.5`}>
                  <div css={tw`flex gap-2`}>
                    <span css={tw`text-xs text-color_2 mt-1.5`}>●</span>
                    <p
                      css={tw`text-lg text-color_2 leading-[1.6875rem] font-bold`}
                    >
                      X-ray:{' '}
                      <span css={tw`text-lg text-color_2 font-normal`}>
                        Snapshots of internal tissues in a single moment
                      </span>
                    </p>
                  </div>
                  <div css={tw`flex gap-2`}>
                    <span css={tw`text-xs text-color_2 mt-1.5`}>●</span>
                    <p
                      css={tw`text-lg text-color_2 leading-[1.6875rem] font-bold`}
                    >
                      Fluoroscopy:{' '}
                      <span css={tw`text-lg text-color_2 font-normal`}>
                        Provides continuous, real-time images of your pet's
                        internal tissues. Fluoroscopy is often used to visualise
                        body systems that move e.g. heart, the respiratory
                        system (airways), and digestive system.
                      </span>
                    </p>
                  </div>
                  <div css={tw`flex gap-2`}>
                    <span css={tw`text-xs text-color_2 mt-1.5`}>●</span>
                    <p
                      css={tw`text-lg text-color_2 leading-[1.6875rem] font-bold`}
                    >
                      Ultrasonography:{' '}
                      <span css={tw`text-lg text-color_2 font-normal`}>
                        An imaging technique that uses sound waves and does not
                        require radiation. Ultrasounds show details of soft
                        tissues, making this technique useful for us to assess
                        your pet's organs such as the heart, liver, kidneys and
                        intestines etc.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div css={tw`flex flex-1 flex-col gap-5`}>
                <div>
                  <p css={tw`text-xl text-color_2 font-bold leading-7 `}>
                    Will my pet require sedation during these procedures?
                  </p>
                  <p css={tw`text-lg text-color_2`}>
                    In cases where the animal cannot stay still enough to give a
                    clear image, light sedation or anaesthesia may be required.
                    Our team will provide some guidance to prepare your pet for
                    these imaging scans.
                  </p>
                </div>

                <div>
                  <p css={tw`text-xl text-color_2 font-bold leading-7 `}>
                    How long does a pet X-ray, Fluoroscopy and/or Ultrasound
                    take?
                  </p>
                  <p css={tw`text-lg text-color_2`}>
                    Depending on the part of the body that's being scanned,
                    X-rays can take up to 20 minutes, while fluoroscopies and
                    ultrasounds can take up to 1 hour.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div css={tw`border-b border-b-color_4 pt-7 md:pt-2.5`} />
    </div>
  );
};

const CTScan = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleFAQ} css={tw`flex items-center gap-4 cursor-pointer`}>
        <div css={tw`flex-1 flex items-center gap-1`}>
          <div css={tw`flex-1`}>
            <h3
              css={tw`text-[2.25rem] font-montserrat font-black leading-normal text-color_2 uppercase md:(text-2xl !leading-7)`}
            >
              CT Scan
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

      <div css={[isOpen ? tw`pt-8 pb-[2.5rem] md:(pb-7 pt-4)` : tw`pt-0`]}>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          style={{ overflow: 'hidden' }}
        >
          <div css={tw`flex flex-col gap-8 md:gap-5`}>
            <div css={tw`flex flex-col gap-8 md:(flex-col gap-5)`}>
              <p css={tw`text-lg text-color_2 leading-7`}>
                At Gaia Vets, we're proud to be one of the few veterinary
                facilities in Singapore with in-house CT imaging capabilities.
                CT Scan is powerful, providing images in 3D and cross sections
                so our vets have precise, detailed visual data at hand to
                accurately diagnose, treat and plan for surgery. Only available
                at Jalan Besar.
              </p>
              <img
                src='/services/ctScan.png'
                alt='ctScan'
                css={tw`h-[31.25rem] xxl:h-[23.4375rem] object-cover rounded-2xl md:(!h-[17.75rem] w-full)`}
              />
            </div>
            <div css={tw`flex gap-x-10 gap-y-5  lg:flex-col`}>
              <div css={tw`flex flex-1 flex-col gap-2`}>
                <p css={tw`text-xl text-color_2 font-bold leading-7 `}>
                  What are CT Scans used for in pets?
                </p>
                <div css={tw`flex flex-col gap-5 md:gap-2.5 pl-3.5`}>
                  <div css={tw`flex gap-2`}>
                    <span css={tw`text-xs text-color_2 mt-1.5`}>●</span>
                    <p
                      css={tw`text-lg text-color_2 leading-[1.6875rem] font-bold`}
                    >
                      Cancer diagnosis:{' '}
                      <span css={tw`text-lg text-color_2 font-normal`}>
                        Confirm the presence of tumour, its size and precise
                        location
                      </span>
                    </p>
                  </div>
                  <div css={tw`flex gap-2`}>
                    <span css={tw`text-xs text-color_2 mt-1.5`}>●</span>
                    <p
                      css={tw`text-lg text-color_2 leading-[1.6875rem] font-bold`}
                    >
                      Orthopaedic issues:{' '}
                      <span css={tw`text-lg text-color_2 font-normal`}>
                        Assess the extent of bone, soft tissue and joint damage,
                        fractures, lesions etc.
                      </span>
                    </p>
                  </div>
                  <div css={tw`flex gap-2`}>
                    <span css={tw`text-xs text-color_2 mt-1.5`}>●</span>
                    <p
                      css={tw`text-lg text-color_2 leading-[1.6875rem] font-bold`}
                    >
                      Heart and vascular diseases:{' '}
                      <span css={tw`text-lg text-color_2 font-normal`}>
                        Confirm sites of disease progression
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div css={tw`flex flex-1 flex-col gap-5`}>
                <div>
                  <p css={tw`text-xl text-color_2 font-bold leading-7 `}>
                    Does my pet need sedation for a CT Scan?
                  </p>
                  <p css={tw`text-lg text-color_2`}>
                    Yes, anaesthesia is required to keep your dog or cat calm
                    and still during the procedure, as any movement will affect
                    the CT image quality. For the same reason, our team will
                    advise you to avoid feeding your pet the night before the
                    scan as well.
                  </p>
                </div>

                <div>
                  <p css={tw`text-xl text-color_2 font-bold leading-7 `}>
                    How long does a pet CT scan take?
                  </p>
                  <p css={tw`text-lg text-color_2`}>
                    It can take up to 2 hours for the entire procedure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div css={tw`border-b border-b-color_4 pt-7 md:pt-2.5`} />
    </div>
  );
};

const BloodTests = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleFAQ} css={tw`flex items-center gap-4 cursor-pointer`}>
        <div css={tw`flex-1 flex items-center gap-1`}>
          <div css={tw`flex-1`}>
            <h3
              css={tw`text-[2.25rem] font-montserrat font-black leading-normal text-color_2 uppercase md:(text-2xl !leading-7)`}
            >
              Blood Tests & Lab Diagnostics
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

      <div css={[isOpen ? tw`pt-8 pb-[2.5rem] md:(pb-7 pt-4)` : tw`pt-0`]}>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          style={{ overflow: 'hidden' }}
        >
          <div css={tw`flex flex-col gap-8 md:gap-5`}>
            <div css={tw`flex flex-col gap-8 md:(flex-col gap-5)`}>
              <p css={tw`text-lg text-color_2 leading-7`}>
                We offer an array of in-house diagnostic tests with rapid
                same-day results. This enables our vets to diagnose and provide
                treatment with more accurate data on hand, onsite.
              </p>
              <img
                src='/services/7_Blood_Tests.png'
                alt='7_Blood_Tests'
                css={tw`xxl:h-[23.4375rem] object-cover rounded-2xl md:(!h-[13.75rem] w-full)`}
              />
            </div>
            <div css={tw`flex gap-x-10 gap-y-5  lg:flex-col`}>
              <div css={tw`flex flex-1 flex-col`}>
                <p css={tw`text-xl text-color_2 font-bold leading-7 `}>
                  Why Blood Tests Matter
                </p>
                <div css={tw`flex flex-col gap-5 md:gap-2.5 pl-3.5`}>
                  <div css={tw`flex gap-2`}>
                    <span css={tw`text-xs text-color_2 mt-1.5`}>●</span>
                    <p
                      css={tw`text-lg text-color_2 leading-[1.6875rem] font-bold`}
                    >
                      Baseline Health Monitoring:{' '}
                      <span css={tw`text-lg text-color_2 font-normal`}>
                        Provide organ function benchmarks specific to your pet's
                        latest health condition.
                      </span>
                    </p>
                  </div>
                  <div css={tw`flex gap-2`}>
                    <span css={tw`text-xs text-color_2 mt-1.5`}>●</span>
                    <p
                      css={tw`text-lg text-color_2 leading-[1.6875rem] font-bold`}
                    >
                      Diagnostic Clarity:{' '}
                      <span css={tw`text-lg text-color_2 font-normal`}>
                        Identify causes of illness when common symptoms, e.g.
                        vomiting, lethargy etc. arise
                      </span>
                    </p>
                  </div>
                  <div css={tw`flex gap-2`}>
                    <span css={tw`text-xs text-color_2 mt-1.5`}>●</span>
                    <p
                      css={tw`text-lg text-color_2 leading-[1.6875rem] font-bold`}
                    >
                      Pre-Surgery Safety:{' '}
                      <span css={tw`text-lg text-color_2 font-normal`}>
                        Ensure your pet is fit for sedation or anaesthesia.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div css={tw`flex flex-1 flex-col `}>
                <p css={tw`text-xl text-color_2 font-bold`}>
                  Additional Onsite Lab Diagnostics
                </p>
                <div css={tw`flex flex-col gap-5 md:gap-2.5 pl-3.5`}>
                  <div css={tw`flex gap-2`}>
                    <span css={tw`text-xs text-color_2 mt-1.5`}>●</span>
                    <p
                      css={tw`text-lg text-color_2 leading-[1.6875rem] font-bold`}
                    >
                      Skin Analysis:{' '}
                      <span css={tw`text-lg text-color_2 font-normal`}>
                        Diagnose bacterial, fungal infections, and mites through
                        skin scrape samples.
                      </span>
                    </p>
                  </div>
                  <div css={tw`flex gap-2`}>
                    <span css={tw`text-xs text-color_2 mt-1.5`}>●</span>
                    <p
                      css={tw`text-lg text-color_2 leading-[1.6875rem] font-bold`}
                    >
                      Fine Needle Aspiration:{' '}
                      <span css={tw`text-lg text-color_2 font-normal`}>
                        Examines lumps or abnormal organs for early detection of
                        serious conditions.
                      </span>
                    </p>
                  </div>
                  <div css={tw`flex gap-2`}>
                    <span css={tw`text-xs text-color_2 mt-1.5`}>●</span>
                    <p
                      css={tw`text-lg text-color_2 leading-[1.6875rem] font-bold`}
                    >
                      Urinalysis:{' '}
                      <span css={tw`text-lg text-color_2 font-normal`}>
                        Checks kidney function and detects urinary infections.
                      </span>
                    </p>
                  </div>
                  <div css={tw`flex gap-2`}>
                    <span css={tw`text-xs text-color_2 mt-1.5`}>●</span>
                    <p
                      css={tw`text-lg text-color_2 leading-[1.6875rem] font-bold`}
                    >
                      Stool Testing:{' '}
                      <span css={tw`text-lg text-color_2 font-normal`}>
                        Identifies parasites causing digestive issues.
                      </span>
                    </p>
                  </div>
                  <div css={tw`flex gap-2`}>
                    <span css={tw`text-xs text-color_2 mt-1.5`}>●</span>
                    <p
                      css={tw`text-lg text-color_2 leading-[1.6875rem] font-bold`}
                    >
                      PCR Tests:{' '}
                      <span css={tw`text-lg text-color_2 font-normal`}>
                        Detects specific infectious diseases like FeLV.
                      </span>
                    </p>
                  </div>
                </div>
                <p css={tw`text-color_2 text-lg pt-5`}>
                  Any specialised tests not available in-house are sent to
                  trusted external labs.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div css={tw`border-b border-b-color_4 pt-7 md:pt-2.5`} />
    </div>
  );
};

const PocketExotic = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleFAQ} css={tw`flex items-center gap-4 cursor-pointer`}>
        <div css={tw`flex-1 flex items-center gap-1`}>
          <div css={tw`flex-1`}>
            <h3
              css={tw`text-[2.25rem] font-montserrat font-black leading-normal text-color_2 uppercase md:(text-2xl !leading-7)`}
            >
              Pocket & Exotic Pet Care
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

      <div css={[isOpen ? tw`pt-8 pb-[2.5rem] md:(pb-7 pt-4)` : tw`pt-0`]}>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          style={{ overflow: 'hidden' }}
        >
          <div css={tw`flex flex-col gap-8 md:gap-5`}>
            <div css={tw`flex flex-col gap-8 md:(flex-col gap-5)`}>
              <p css={tw`text-lg text-color_2 leading-7`}>
                We provide tailored care for exotic and pocket pets such as
                rabbits, guinea pigs, terrapins and more! Expect professional
                guidance from our vets on everything from nutrition and housing
                to general care for your exotic pets.
              </p>
              <img
                src='/services/8_Pocket_Exotic.png'
                alt='8_Pocket_Exotic'
                css={tw`xxl:h-[23.4375rem] object-cover rounded-2xl md:(!h-[13.75rem] w-full)`}
              />
            </div>
            <div
              css={tw`grid grid-cols-2 gap-x-10 gap-y-5 md:(!grid-cols-1 gap-2.5) px-3.5`}
            >
              <div css={tw`flex gap-2`}>
                <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                  Diet & Nutrition Plan
                </p>
              </div>
              <div css={tw`flex gap-2`}>
                <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                  In-house X-ray & Ultrasound
                </p>
              </div>
              <div css={tw`flex gap-2`}>
                <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                  Parasite Prevention & Treatment
                </p>
              </div>
              <div css={tw`flex gap-2`}>
                <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                  In-house Blood Testing
                </p>
              </div>
              <div css={tw`flex gap-2`}>
                <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                  Dental Care
                </p>
              </div>
              <div css={tw`flex gap-2`}>
                <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                  Oxygen & Nebulization Therapy
                </p>
              </div>
              <div css={tw`flex gap-2`}>
                <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                  General Surgery (sterilisation, lump removal, wound repair)
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div css={tw`border-b border-b-color_4 pt-7 md:pt-2.5`} />
    </div>
  );
};

const BirdCare = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleFAQ} css={tw`flex items-center gap-4 cursor-pointer`}>
        <div css={tw`flex-1 flex items-center gap-1`}>
          <div css={tw`flex-1`}>
            <h3
              css={tw`text-[2.25rem] font-montserrat font-black leading-normal text-color_2 uppercase md:(text-2xl !leading-7)`}
            >
              Bird care
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

      <div css={[isOpen ? tw`pt-8 pb-[2.5rem] md:(pb-7 pt-4)` : tw`pt-0`]}>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          style={{ overflow: 'hidden' }}
        >
          <div css={tw`flex flex-col gap-8 md:gap-5`}>
            <div css={tw`flex flex-col gap-8 md:(flex-col gap-5)`}>
              <p css={tw`text-lg text-color_2 leading-7`}>
                You can count on our knowledgeable bird keepers on staff and
                vets that have special interest in avian medicine! Our clinic is
                well-equipped to handle avian cases and we routinely treat birds
                for{' '}
                <Link href='https://gaiavets.com/blog/9-signs-your-bird-may-be-sick'>
                  <span
                    css={tw`text-color_2 underline font-bold cursor-pointer`}
                  >
                    common ailments
                  </span>{' '}
                  {''}
                  {''}
                </Link>{' '}
                such as lack of appetite, fluffed up feathers, egg-binding etc.{' '}
              </p>
              <img
                src='/services/9_Bird_Care.png'
                alt='9_Bird_Care'
                css={tw`xxl:h-[23.4375rem] object-cover rounded-2xl md:(!h-[13.75rem] w-full)`}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div css={tw`border-b border-b-color_4 pt-7 md:pt-2.5`} />
    </div>
  );
};

const GeriatricManagement = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleFAQ} css={tw`flex items-center gap-4 cursor-pointer`}>
        <div css={tw`flex-1 flex items-center gap-1`}>
          <div css={tw`flex-1`}>
            <h3
              css={tw`text-[2.25rem] font-montserrat font-black leading-normal text-color_2 uppercase md:(text-2xl !leading-7)`}
            >
              Geriatric Management
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

      <div css={[isOpen ? tw`pt-8 pb-[2.5rem] md:(pb-7 pt-4)` : tw`pt-0`]}>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          style={{ overflow: 'hidden' }}
        >
          <div css={tw`flex flex-col gap-8 md:gap-5`}>
            <div css={tw`flex flex-col gap-8 md:(flex-col gap-5)`}>
              <p css={tw`text-lg text-color_2 leading-7`}>
                Support your pet's golden years with compassionate care and
                tailored solutions. As pets age, they often face changes in
                diet, mobility, and overall health. Our team at Gaia Vets is
                here for you, ensuring that your animal companions remain
                comfortable and pain-free.
              </p>
              <img
                src='/services/10_Geriatric.png'
                alt='10_Geriatric'
                css={tw`xxl:h-[23.4375rem] object-cover rounded-2xl md:(!h-[13.75rem] w-full)`}
              />
            </div>
            <div
              css={tw`grid grid-cols-2 gap-x-10 gap-y-5 md:(!grid-cols-1 gap-2.5) px-3.5`}
            >
              <div css={tw`flex gap-2`}>
                <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                  Pain Management
                </p>
              </div>
              <div css={tw`flex gap-2`}>
                <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                  Physiotherapy
                </p>
              </div>
              <div css={tw`flex gap-2`}>
                <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                  Arthritis Management
                </p>
              </div>
              <div css={tw`flex gap-2`}>
                <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                  Cancer Management
                </p>
              </div>
              <div css={tw`flex gap-2`}>
                <span css={tw`text-xs mt-1.5 text-color_2`}>●</span>
                <p css={tw`text-lg text-color_2 leading-[1.6875rem]`}>
                  24/7 Hospital Care for critically ill or end-of-life pets
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div css={tw`border-b border-b-color_4 pt-7 md:pt-2.5`} />
    </div>
  );
};

const Services = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      css={tw`flex flex-col gap-[7.5rem] pt-[2.75rem] pb-[6.25rem] lg:gap-[2.5rem] md:(pb-[3.75rem] !pt-0)`}
    >
      <div
        css={tw`flex w-full gap-[4.375rem] pr-[8.4375rem] lg:(px-[1.875rem] flex-col gap-[2.5rem]) md:!px-5`}
      >
        <div css={tw`flex-1`}>
          <img
            src='/services/bannerMain.png'
            alt='bannerMain'
            css={tw`w-full h-[42.375rem] object-cover lg:(h-[31.25rem] object-cover) md:!h-[18.75rem] `}
          />
        </div>
        <div css={tw`flex flex-1 flex-col justify-between gap-7`}>
          <div css={tw`flex flex-col gap-8 md:gap-7`}>
            <h1
              css={tw`font-montserrat text-[5.625rem] font-[900] leading-[5.0625rem] text-color_2 uppercase md:(text-[3.125rem] leading-[2.8125rem])`}
            >
              Equipped <br css={tw`md:hidden`} /> for every{' '}
              <br css={tw`md:hidden`} /> kind of <br css={tw`md:hidden`} /> pet
            </h1>
            <p css={tw`text-xl leading-[1.875rem] text-color_2 md:text-lg`}>
              Our experienced vets are here to support your pet through every
              life stage. On top of dogs and cats, we routinely treat and care
              for birds, pocket pets, and even terrapins and fish.
            </p>
            <p css={tw`text-xl leading-[1.875rem] text-color_2  md:text-lg`}>
              Both our veterinary centres in Singapore provide the services
              listed below, except for CT scan which is only available at our
              Jalan Besar location.
            </p>
          </div>
          <Link href={`${PAGE_ROUTES.HOME}#location`}>
            <Button
              type='primary'
              css={tw`h-[3.25rem] px-7 md:(h-[3rem] w-full)`}
            >
              <div css={tw`flex items-center gap-2`}>
                <p
                  css={tw`text-2xl font-medium leading-7 text-color_5 md:text-lg`}
                >
                  Book Now
                </p>
                <img
                  src='/svg/arrow-up.svg'
                  alt='icon-arrow-up'
                  css={tw`md:(w-[1.125rem] h-[1.125rem]) w-[1.375rem] h-[1.375rem]`}
                />
              </div>
            </Button>
          </Link>
        </div>
      </div>

      <div css={tw`px-[8.4375rem] lg:px-[1.875rem] md:!px-5`}>
        <p css={tw`text-[1.875rem] font-bold leading-normal text-color_4`}>
          Services
        </p>

        <div css={tw`flex flex-col gap-7 md:gap-2.5 mt-7`}>
          <GeneralServices />
          <DentalCare />
          <Surgery />
          <Hospitalisation />
          <Xray />
          <CTScan />
          <BloodTests />
          <PocketExotic />
          <BirdCare />
          <GeriatricManagement />
        </div>

        <div
          css={tw`items-center justify-center gap-1.5 cursor-pointer pt-10 hidden md:flex `}
          onClick={backToTop}
        >
          <p
            css={tw`text-color_4 text-[1.375rem] font-medium leading-2 underline md:text-xl`}
          >
            Back to Top
          </p>
          <img
            src='/svg/arrow_up_red.svg'
            alt='icon-arrow-up-red'
            css={tw`md:w-[1.0625rem] h-[1.0625rem]`}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
