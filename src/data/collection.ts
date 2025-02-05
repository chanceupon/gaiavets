export type TeamCollection = {
  attributes: {
    teamInfo: {
      id: string;
      title: string;
      description: string;
      members: {
        id: string;
        name: string;
        position: string;
        description: string;
        image: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
      }[];
    };
  };
};

export type BannerCollection = {
  mainText: string;
  subText: string;
  slides: {
    data: {
      id: string;
      attributes: {
        url: string;
      };
    }[];
  };
};

export type WhyChooseUsCollection = {
  id: string;
  title: string;
  icon: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  causes: {
    id: string;
    title: string;
    mobileTitle: string;
    description: string;
    textLink: string;
    link: string;
    image: {
      data: {
        id: string;
        attributes: {
          url: string;
        };
      };
    };
  }[];
};

export type GaiaGuideCollection = {
  id: string;
  bigText: string;
  smallText: string;
  bigTextMobile: string;
  achievements: {
    text: string;
    number: number;
  }[];
};

export type WhyPeopleLoveUsCollection = {
  id: string;
  title: string;
  icon: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  reviewCards: {
    id: string;
    description: string;
    star: number;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  }[];
};

export type OurLocationsCollection = {
  id: string;
  title: string;
  data: {
    name: string;
    note: string;
    phone: string;
    address: string;
    weekend: string;
    normalDay: string;
    phoneText: string;
    weekendHour: string;
    normalDayHour: string;
  }[];
};

export type ForAllYourPetNeedsCollection = {
  id: string;
  title: string;
  description: string;
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  buttonVisitOurShop: {
    text: string;
    link: string;
  };
};

export type HomeCollection = {
  banner: BannerCollection;
  whyChooseUs: WhyChooseUsCollection;
  gaiaGuide: GaiaGuideCollection;
  whyPeopleLoveUs: WhyPeopleLoveUsCollection;
  ourLocations: OurLocationsCollection;
  forAllYourPetNeeds: ForAllYourPetNeedsCollection;
};

export type GuideCollection = {
  id?: string;
  attributes: {
    title: string;
    subTitle: string;
    content: any;
    shortDescription: string;
    slug: string;
    date: Date;
    tags: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    readTime: string;
    type: string;
  };
  moreGuides?: {
    data: GuideCollection[];
  };
};

export type GuideDetailCollection = {
  slug: string;
  title: string;
  date: Date;
  subTitle: string;
  content: any;
  shortDescription: string;
  tags: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  readTime: string;
  type: string;
  moreGuides?: {
    data: GuideCollection[];
  };
};
