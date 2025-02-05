import React from 'react';
import { GuideCollection, HomeCollection } from '@/data/collection';
import Banner from './Banner';
import GaiaGuide from './GaiaGuide';
import Statistic from './Statistic';
import WhyPeopleLoveUs from './WhyPeopleLoveUs';
import OurLocations from './OurLocations';
import ForAllYourPetNeeds from './ForAllYourPetNeeds';
import Guides from './Guides';
import dynamic from 'next/dynamic';

const WhyChooseUs = dynamic(() => import('./WhyChooseUs'), {
  ssr: false,
});

const Home: React.FC<{
  dataHome: HomeCollection;
  dataGuides: GuideCollection[];
}> = ({ dataHome, dataGuides }) => {
  return (
    <>
      <Banner data={dataHome.banner} />
      <WhyChooseUs data={dataHome?.whyChooseUs} />
      <GaiaGuide data={dataHome?.gaiaGuide} />
      <Statistic data={dataHome?.gaiaGuide} />
      <Guides data={dataGuides} />
      <WhyPeopleLoveUs data={dataHome.whyPeopleLoveUs} />
      <OurLocations data={dataHome?.ourLocations} />
      <ForAllYourPetNeeds data={dataHome?.forAllYourPetNeeds} />
    </>
  );
};

export default Home;
