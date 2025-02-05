import { GraphQLClient, RequestOptions } from 'graphql-request';
import { GraphQLError, print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  PageComponentsDynamicZoneInput: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type About = {
  __typename?: 'About';
  aboutUs?: Maybe<ComponentAboutPageAboutUs>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  meta?: Maybe<ComponentCommonMetaPage>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  whatDrives?: Maybe<ComponentAboutPageWhatDrives>;
};

export type AboutEntity = {
  __typename?: 'AboutEntity';
  attributes?: Maybe<About>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AboutEntityResponse = {
  __typename?: 'AboutEntityResponse';
  data?: Maybe<AboutEntity>;
};

export type AboutInput = {
  aboutUs?: InputMaybe<ComponentAboutPageAboutUsInput>;
  meta?: InputMaybe<ComponentCommonMetaPageInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  whatDrives?: InputMaybe<ComponentAboutPageWhatDrivesInput>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentAboutPageAboutUs = {
  __typename?: 'ComponentAboutPageAboutUs';
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  mainTitle?: Maybe<Scalars['String']['output']>;
  subTitle?: Maybe<Scalars['String']['output']>;
};

export type ComponentAboutPageAboutUsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  mainTitle?: InputMaybe<Scalars['String']['input']>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentAboutPageItemWhatDrives = {
  __typename?: 'ComponentAboutPageItemWhatDrives';
  buttonLink?: Maybe<ComponentCommonButton>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentAboutPageItemWhatDrivesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentAboutPageItemWhatDrivesFiltersInput>>>;
  buttonLink?: InputMaybe<ComponentCommonButtonFiltersInput>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentAboutPageItemWhatDrivesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAboutPageItemWhatDrivesFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentAboutPageItemWhatDrivesInput = {
  buttonLink?: InputMaybe<ComponentCommonButtonInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentAboutPageWhatDrives = {
  __typename?: 'ComponentAboutPageWhatDrives';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  listWhatDrives?: Maybe<Array<Maybe<ComponentAboutPageItemWhatDrives>>>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentAboutPageWhatDrivesListWhatDrivesArgs = {
  filters?: InputMaybe<ComponentAboutPageItemWhatDrivesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentAboutPageWhatDrivesInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  listWhatDrives?: InputMaybe<Array<InputMaybe<ComponentAboutPageItemWhatDrivesInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentCommonButton = {
  __typename?: 'ComponentCommonButton';
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type ComponentCommonButtonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCommonButtonFiltersInput>>>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCommonButtonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCommonButtonFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
};

export type ComponentCommonButtonInput = {
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentCommonDocument = {
  __typename?: 'ComponentCommonDocument';
  content?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastUpdate?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ComponentCommonDocumentInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lastUpdate?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentCommonItemMenu = {
  __typename?: 'ComponentCommonItemMenu';
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  menuChildren?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ComponentCommonItemMenuFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCommonItemMenuFiltersInput>>>;
  link?: InputMaybe<StringFilterInput>;
  menuChildren?: InputMaybe<JsonFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCommonItemMenuFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCommonItemMenuFiltersInput>>>;
};

export type ComponentCommonItemMenuInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  menuChildren?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentCommonItemSocial = {
  __typename?: 'ComponentCommonItemSocial';
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ComponentCommonItemSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCommonItemSocialFiltersInput>>>;
  link?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCommonItemSocialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCommonItemSocialFiltersInput>>>;
};

export type ComponentCommonItemSocialInput = {
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentCommonMenu = {
  __typename?: 'ComponentCommonMenu';
  data?: Maybe<Array<Maybe<ComponentCommonItemMenu>>>;
  id: Scalars['ID']['output'];
};


export type ComponentCommonMenuDataArgs = {
  filters?: InputMaybe<ComponentCommonItemMenuFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentCommonMenuInput = {
  data?: InputMaybe<Array<InputMaybe<ComponentCommonItemMenuInput>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentCommonMetaPage = {
  __typename?: 'ComponentCommonMetaPage';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type ComponentCommonMetaPageInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentGuidePageGuideHeader = {
  __typename?: 'ComponentGuidePageGuideHeader';
  id: Scalars['ID']['output'];
  subTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentGuidePageGuideHeaderInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentHomePageBanner = {
  __typename?: 'ComponentHomePageBanner';
  buttonBook?: Maybe<ComponentCommonButton>;
  id: Scalars['ID']['output'];
  mainText?: Maybe<Scalars['String']['output']>;
  mobileImage?: Maybe<UploadFileRelationResponseCollection>;
  slides?: Maybe<UploadFileRelationResponseCollection>;
  subText?: Maybe<Scalars['String']['output']>;
};


export type ComponentHomePageBannerMobileImageArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentHomePageBannerSlidesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHomePageBannerInput = {
  buttonBook?: InputMaybe<ComponentCommonButtonInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  mainText?: InputMaybe<Scalars['String']['input']>;
  mobileImage?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slides?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  subText?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentHomePageForAllYourPetNeeds = {
  __typename?: 'ComponentHomePageForAllYourPetNeeds';
  buttonVisitOurShop?: Maybe<ComponentCommonButton>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentHomePageForAllYourPetNeedsInput = {
  buttonVisitOurShop?: InputMaybe<ComponentCommonButtonInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentHomePageGaiaGuide = {
  __typename?: 'ComponentHomePageGaiaGuide';
  achievements?: Maybe<Array<Maybe<ComponentHomePageItemAchievement>>>;
  background?: Maybe<UploadFileEntityResponse>;
  bigText?: Maybe<Scalars['String']['output']>;
  bigTextMobile?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  smallText?: Maybe<Scalars['String']['output']>;
};


export type ComponentHomePageGaiaGuideAchievementsArgs = {
  filters?: InputMaybe<ComponentHomePageItemAchievementFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHomePageGaiaGuideInput = {
  achievements?: InputMaybe<Array<InputMaybe<ComponentHomePageItemAchievementInput>>>;
  background?: InputMaybe<Scalars['ID']['input']>;
  bigText?: InputMaybe<Scalars['String']['input']>;
  bigTextMobile?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  smallText?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentHomePageItemAchievement = {
  __typename?: 'ComponentHomePageItemAchievement';
  id: Scalars['ID']['output'];
  number?: Maybe<Scalars['Float']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type ComponentHomePageItemAchievementFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHomePageItemAchievementFiltersInput>>>;
  not?: InputMaybe<ComponentHomePageItemAchievementFiltersInput>;
  number?: InputMaybe<FloatFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomePageItemAchievementFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
};

export type ComponentHomePageItemAchievementInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  number?: InputMaybe<Scalars['Float']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentHomePageItemCause = {
  __typename?: 'ComponentHomePageItemCause';
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  link?: Maybe<Scalars['String']['output']>;
  mobileTitle?: Maybe<Scalars['String']['output']>;
  textLink?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentHomePageItemCauseFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHomePageItemCauseFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  mobileTitle?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentHomePageItemCauseFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomePageItemCauseFiltersInput>>>;
  textLink?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentHomePageItemCauseInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  mobileTitle?: InputMaybe<Scalars['String']['input']>;
  textLink?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentHomePageItemWhyPeopleLoveUs = {
  __typename?: 'ComponentHomePageItemWhyPeopleLoveUs';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  star?: Maybe<Scalars['Float']['output']>;
};

export type ComponentHomePageItemWhyPeopleLoveUsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHomePageItemWhyPeopleLoveUsFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentHomePageItemWhyPeopleLoveUsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomePageItemWhyPeopleLoveUsFiltersInput>>>;
  star?: InputMaybe<FloatFilterInput>;
};

export type ComponentHomePageItemWhyPeopleLoveUsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  star?: InputMaybe<Scalars['Float']['input']>;
};

export type ComponentHomePageOurLocations = {
  __typename?: 'ComponentHomePageOurLocations';
  data?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentHomePageOurLocationsInput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentHomePageWhyChooseUs = {
  __typename?: 'ComponentHomePageWhyChooseUs';
  causes?: Maybe<Array<Maybe<ComponentHomePageItemCause>>>;
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentHomePageWhyChooseUsCausesArgs = {
  filters?: InputMaybe<ComponentHomePageItemCauseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHomePageWhyChooseUsInput = {
  causes?: InputMaybe<Array<InputMaybe<ComponentHomePageItemCauseInput>>>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentHomePageWhyPeopleLoveUs = {
  __typename?: 'ComponentHomePageWhyPeopleLoveUs';
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
  reviewCards?: Maybe<Array<Maybe<ComponentHomePageItemWhyPeopleLoveUs>>>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentHomePageWhyPeopleLoveUsReviewCardsArgs = {
  filters?: InputMaybe<ComponentHomePageItemWhyPeopleLoveUsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHomePageWhyPeopleLoveUsInput = {
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  reviewCards?: InputMaybe<Array<InputMaybe<ComponentHomePageItemWhyPeopleLoveUsInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentLocationPageItemLocationTip = {
  __typename?: 'ComponentLocationPageItemLocationTip';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentLocationPageItemLocationTipFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLocationPageItemLocationTipFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentLocationPageItemLocationTipFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLocationPageItemLocationTipFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentLocationPageItemLocationTipInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentLocationPageItemUseFulFaQs = {
  __typename?: 'ComponentLocationPageItemUseFulFaQs';
  answer?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  question?: Maybe<Scalars['String']['output']>;
};

export type ComponentLocationPageItemUseFulFaQsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLocationPageItemUseFulFaQsFiltersInput>>>;
  answer?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentLocationPageItemUseFulFaQsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLocationPageItemUseFulFaQsFiltersInput>>>;
  question?: InputMaybe<StringFilterInput>;
};

export type ComponentLocationPageItemUseFulFaQsInput = {
  answer?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentLocationPageLocation = {
  __typename?: 'ComponentLocationPageLocation';
  buttonCallNow?: Maybe<ComponentCommonButton>;
  buttonWhatsapp?: Maybe<ComponentCommonButton>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  information?: Maybe<Scalars['JSON']['output']>;
  locationTips?: Maybe<ComponentLocationPageLocationTips>;
  mapIframe?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ComponentLocationPageLocationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLocationPageLocationFiltersInput>>>;
  buttonCallNow?: InputMaybe<ComponentCommonButtonFiltersInput>;
  buttonWhatsapp?: InputMaybe<ComponentCommonButtonFiltersInput>;
  description?: InputMaybe<StringFilterInput>;
  information?: InputMaybe<JsonFilterInput>;
  locationTips?: InputMaybe<ComponentLocationPageLocationTipsFiltersInput>;
  mapIframe?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentLocationPageLocationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLocationPageLocationFiltersInput>>>;
};

export type ComponentLocationPageLocationInput = {
  buttonCallNow?: InputMaybe<ComponentCommonButtonInput>;
  buttonWhatsapp?: InputMaybe<ComponentCommonButtonInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  information?: InputMaybe<Scalars['JSON']['input']>;
  locationTips?: InputMaybe<ComponentLocationPageLocationTipsInput>;
  mapIframe?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentLocationPageLocationTips = {
  __typename?: 'ComponentLocationPageLocationTips';
  id: Scalars['ID']['output'];
  tips?: Maybe<Array<Maybe<ComponentLocationPageItemLocationTip>>>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentLocationPageLocationTipsTipsArgs = {
  filters?: InputMaybe<ComponentLocationPageItemLocationTipFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentLocationPageLocationTipsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLocationPageLocationTipsFiltersInput>>>;
  not?: InputMaybe<ComponentLocationPageLocationTipsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLocationPageLocationTipsFiltersInput>>>;
  tips?: InputMaybe<ComponentLocationPageItemLocationTipFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentLocationPageLocationTipsInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  tips?: InputMaybe<Array<InputMaybe<ComponentLocationPageItemLocationTipInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentLocationPageUseFulFaQs = {
  __typename?: 'ComponentLocationPageUseFulFaQs';
  data?: Maybe<Array<Maybe<ComponentLocationPageItemUseFulFaQs>>>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentLocationPageUseFulFaQsDataArgs = {
  filters?: InputMaybe<ComponentLocationPageItemUseFulFaQsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentLocationPageUseFulFaQsInput = {
  data?: InputMaybe<Array<InputMaybe<ComponentLocationPageItemUseFulFaQsInput>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentServicesPageAllServices = {
  __typename?: 'ComponentServicesPageAllServices';
  id: Scalars['ID']['output'];
  services?: Maybe<Array<Maybe<ComponentServicesPageItemService>>>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentServicesPageAllServicesServicesArgs = {
  filters?: InputMaybe<ComponentServicesPageItemServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentServicesPageAllServicesInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  services?: InputMaybe<Array<InputMaybe<ComponentServicesPageItemServiceInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentServicesPageBannerService = {
  __typename?: 'ComponentServicesPageBannerService';
  buttonBookNow?: Maybe<ComponentCommonButton>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentServicesPageBannerServiceInput = {
  buttonBookNow?: InputMaybe<ComponentCommonButtonInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentServicesPageItemService = {
  __typename?: 'ComponentServicesPageItemService';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  textColumn1?: Maybe<Scalars['String']['output']>;
  textColumn2?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentServicesPageItemServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentServicesPageItemServiceFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentServicesPageItemServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServicesPageItemServiceFiltersInput>>>;
  textColumn1?: InputMaybe<StringFilterInput>;
  textColumn2?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentServicesPageItemServiceInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  textColumn1?: InputMaybe<Scalars['String']['input']>;
  textColumn2?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedMetaSocial = {
  __typename?: 'ComponentSharedMetaSocial';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork;
  title: Scalars['String']['output'];
};

export type ComponentSharedMetaSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  socialNetwork?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedMetaSocialInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  socialNetwork?: InputMaybe<Enum_Componentsharedmetasocial_Socialnetwork>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonicalURL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  keywords?: Maybe<Scalars['String']['output']>;
  metaDescription: Scalars['String']['output'];
  metaImage?: Maybe<UploadFileEntityResponse>;
  metaRobots?: Maybe<Scalars['String']['output']>;
  metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>;
  metaTitle: Scalars['String']['output'];
  metaViewport?: Maybe<Scalars['String']['output']>;
  structuredData?: Maybe<Scalars['JSON']['output']>;
};


export type ComponentSharedSeoMetaSocialArgs = {
  filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  canonicalURL?: InputMaybe<StringFilterInput>;
  keywords?: InputMaybe<StringFilterInput>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaRobots?: InputMaybe<StringFilterInput>;
  metaSocial?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  metaViewport?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  structuredData?: InputMaybe<JsonFilterInput>;
};

export type ComponentSharedSeoInput = {
  canonicalURL?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaImage?: InputMaybe<Scalars['ID']['input']>;
  metaRobots?: InputMaybe<Scalars['String']['input']>;
  metaSocial?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialInput>>>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaViewport?: InputMaybe<Scalars['String']['input']>;
  structuredData?: InputMaybe<Scalars['JSON']['input']>;
};

export type ComponentTeamPageMember = {
  __typename?: 'ComponentTeamPageMember';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
};

export type ComponentTeamPageMemberFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentTeamPageMemberFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentTeamPageMemberFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentTeamPageMemberFiltersInput>>>;
  position?: InputMaybe<StringFilterInput>;
};

export type ComponentTeamPageMemberInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentTeamPageTeamInfo = {
  __typename?: 'ComponentTeamPageTeamInfo';
  buttonBookNow?: Maybe<ComponentCommonButton>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  members?: Maybe<Array<Maybe<ComponentTeamPageMember>>>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentTeamPageTeamInfoMembersArgs = {
  filters?: InputMaybe<ComponentTeamPageMemberFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentTeamPageTeamInfoInput = {
  buttonBookNow?: InputMaybe<ComponentCommonButtonInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  members?: InputMaybe<Array<InputMaybe<ComponentTeamPageMemberInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Contact = {
  __typename?: 'Contact';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ContactEntity = {
  __typename?: 'ContactEntity';
  attributes?: Maybe<Contact>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ContactEntityResponse = {
  __typename?: 'ContactEntityResponse';
  data?: Maybe<ContactEntity>;
};

export type ContactInput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter'
}

export enum Enum_Guide_Type {
  Article = 'Article',
  FeaturedArticle = 'Featured_Article'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type Footer = {
  __typename?: 'Footer';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  logo?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FooterEntity = {
  __typename?: 'FooterEntity';
  attributes?: Maybe<Footer>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type FooterEntityResponse = {
  __typename?: 'FooterEntityResponse';
  data?: Maybe<FooterEntity>;
};

export type FooterInput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  logo?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GenericMorph = About | ComponentAboutPageAboutUs | ComponentAboutPageItemWhatDrives | ComponentAboutPageWhatDrives | ComponentCommonButton | ComponentCommonDocument | ComponentCommonItemMenu | ComponentCommonItemSocial | ComponentCommonMenu | ComponentCommonMetaPage | ComponentGuidePageGuideHeader | ComponentHomePageBanner | ComponentHomePageForAllYourPetNeeds | ComponentHomePageGaiaGuide | ComponentHomePageItemAchievement | ComponentHomePageItemCause | ComponentHomePageItemWhyPeopleLoveUs | ComponentHomePageOurLocations | ComponentHomePageWhyChooseUs | ComponentHomePageWhyPeopleLoveUs | ComponentLocationPageItemLocationTip | ComponentLocationPageItemUseFulFaQs | ComponentLocationPageLocation | ComponentLocationPageLocationTips | ComponentLocationPageUseFulFaQs | ComponentServicesPageAllServices | ComponentServicesPageBannerService | ComponentServicesPageItemService | ComponentSharedMetaSocial | ComponentSharedSeo | ComponentTeamPageMember | ComponentTeamPageTeamInfo | Contact | Footer | Guide | GuidePage | Header | Home | I18NLocale | Location | Page | PrivacyPolicy | Service | Social | Subscriber | Team | TermsAndCondition | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Guide = {
  __typename?: 'Guide';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  image?: Maybe<UploadFileEntityResponse>;
  moreGuides?: Maybe<GuideRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readTime?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  subTitle?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  title: Scalars['String']['output'];
  type?: Maybe<Enum_Guide_Type>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type GuideMoreGuidesArgs = {
  filters?: InputMaybe<GuideFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GuideEntity = {
  __typename?: 'GuideEntity';
  attributes?: Maybe<Guide>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type GuideEntityResponse = {
  __typename?: 'GuideEntityResponse';
  data?: Maybe<GuideEntity>;
};

export type GuideEntityResponseCollection = {
  __typename?: 'GuideEntityResponseCollection';
  data: Array<GuideEntity>;
  meta: ResponseCollectionMeta;
};

export type GuideFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GuideFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  moreGuides?: InputMaybe<GuideFiltersInput>;
  not?: InputMaybe<GuideFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GuideFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  readTime?: InputMaybe<StringFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  shortDescription?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  subTitle?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<JsonFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type GuideInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  moreGuides?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readTime?: InputMaybe<Scalars['String']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Enum_Guide_Type>;
};

export type GuidePage = {
  __typename?: 'GuidePage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  header?: Maybe<ComponentGuidePageGuideHeader>;
  meta?: Maybe<ComponentCommonMetaPage>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GuidePageEntity = {
  __typename?: 'GuidePageEntity';
  attributes?: Maybe<GuidePage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type GuidePageEntityResponse = {
  __typename?: 'GuidePageEntityResponse';
  data?: Maybe<GuidePageEntity>;
};

export type GuidePageInput = {
  header?: InputMaybe<ComponentGuidePageGuideHeaderInput>;
  meta?: InputMaybe<ComponentCommonMetaPageInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type GuideRelationResponseCollection = {
  __typename?: 'GuideRelationResponseCollection';
  data: Array<GuideEntity>;
};

export type Header = {
  __typename?: 'Header';
  buttonCart?: Maybe<ComponentCommonButton>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  logo?: Maybe<UploadFileEntityResponse>;
  menu?: Maybe<ComponentCommonMenu>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HeaderEntity = {
  __typename?: 'HeaderEntity';
  attributes?: Maybe<Header>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type HeaderEntityResponse = {
  __typename?: 'HeaderEntityResponse';
  data?: Maybe<HeaderEntity>;
};

export type HeaderInput = {
  buttonCart?: InputMaybe<ComponentCommonButtonInput>;
  logo?: InputMaybe<Scalars['ID']['input']>;
  menu?: InputMaybe<ComponentCommonMenuInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Home = {
  __typename?: 'Home';
  banner?: Maybe<ComponentHomePageBanner>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  forAllYourPetNeeds?: Maybe<ComponentHomePageForAllYourPetNeeds>;
  gaiaGuide?: Maybe<ComponentHomePageGaiaGuide>;
  meta?: Maybe<ComponentCommonMetaPage>;
  ourLocations?: Maybe<ComponentHomePageOurLocations>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  whyChooseUs?: Maybe<ComponentHomePageWhyChooseUs>;
  whyPeopleLoveUs?: Maybe<ComponentHomePageWhyPeopleLoveUs>;
};

export type HomeEntity = {
  __typename?: 'HomeEntity';
  attributes?: Maybe<Home>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type HomeEntityResponse = {
  __typename?: 'HomeEntityResponse';
  data?: Maybe<HomeEntity>;
};

export type HomeInput = {
  banner?: InputMaybe<ComponentHomePageBannerInput>;
  forAllYourPetNeeds?: InputMaybe<ComponentHomePageForAllYourPetNeedsInput>;
  gaiaGuide?: InputMaybe<ComponentHomePageGaiaGuideInput>;
  meta?: InputMaybe<ComponentCommonMetaPageInput>;
  ourLocations?: InputMaybe<ComponentHomePageOurLocationsInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  whyChooseUs?: InputMaybe<ComponentHomePageWhyChooseUsInput>;
  whyPeopleLoveUs?: InputMaybe<ComponentHomePageWhyPeopleLoveUsInput>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Location = {
  __typename?: 'Location';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locations?: Maybe<Array<Maybe<ComponentLocationPageLocation>>>;
  meta?: Maybe<ComponentCommonMetaPage>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  usefulFAQs?: Maybe<ComponentLocationPageUseFulFaQs>;
};


export type LocationLocationsArgs = {
  filters?: InputMaybe<ComponentLocationPageLocationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LocationEntity = {
  __typename?: 'LocationEntity';
  attributes?: Maybe<Location>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type LocationEntityResponse = {
  __typename?: 'LocationEntityResponse';
  data?: Maybe<LocationEntity>;
};

export type LocationInput = {
  locations?: InputMaybe<Array<InputMaybe<ComponentLocationPageLocationInput>>>;
  meta?: InputMaybe<ComponentCommonMetaPageInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  usefulFAQs?: InputMaybe<ComponentLocationPageUseFulFaQsInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createGuide?: Maybe<GuideEntityResponse>;
  createPage?: Maybe<PageEntityResponse>;
  createSubscriber?: Maybe<SubscriberEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAbout?: Maybe<AboutEntityResponse>;
  deleteContact?: Maybe<ContactEntityResponse>;
  deleteFooter?: Maybe<FooterEntityResponse>;
  deleteGuide?: Maybe<GuideEntityResponse>;
  deleteGuidePage?: Maybe<GuidePageEntityResponse>;
  deleteHeader?: Maybe<HeaderEntityResponse>;
  deleteHome?: Maybe<HomeEntityResponse>;
  deleteLocation?: Maybe<LocationEntityResponse>;
  deletePage?: Maybe<PageEntityResponse>;
  deletePrivacyPolicy?: Maybe<PrivacyPolicyEntityResponse>;
  deleteService?: Maybe<ServiceEntityResponse>;
  deleteSocial?: Maybe<SocialEntityResponse>;
  deleteSubscriber?: Maybe<SubscriberEntityResponse>;
  deleteTeam?: Maybe<TeamEntityResponse>;
  deleteTermsAndCondition?: Maybe<TermsAndConditionEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAbout?: Maybe<AboutEntityResponse>;
  updateContact?: Maybe<ContactEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFooter?: Maybe<FooterEntityResponse>;
  updateGuide?: Maybe<GuideEntityResponse>;
  updateGuidePage?: Maybe<GuidePageEntityResponse>;
  updateHeader?: Maybe<HeaderEntityResponse>;
  updateHome?: Maybe<HomeEntityResponse>;
  updateLocation?: Maybe<LocationEntityResponse>;
  updatePage?: Maybe<PageEntityResponse>;
  updatePrivacyPolicy?: Maybe<PrivacyPolicyEntityResponse>;
  updateService?: Maybe<ServiceEntityResponse>;
  updateSocial?: Maybe<SocialEntityResponse>;
  updateSubscriber?: Maybe<SubscriberEntityResponse>;
  updateTeam?: Maybe<TeamEntityResponse>;
  updateTermsAndCondition?: Maybe<TermsAndConditionEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateGuideArgs = {
  data: GuideInput;
};


export type MutationCreatePageArgs = {
  data: PageInput;
};


export type MutationCreateSubscriberArgs = {
  data: SubscriberInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteGuideArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSubscriberArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAboutArgs = {
  data: AboutInput;
};


export type MutationUpdateContactArgs = {
  data: ContactInput;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateFooterArgs = {
  data: FooterInput;
};


export type MutationUpdateGuideArgs = {
  data: GuideInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateGuidePageArgs = {
  data: GuidePageInput;
};


export type MutationUpdateHeaderArgs = {
  data: HeaderInput;
};


export type MutationUpdateHomeArgs = {
  data: HomeInput;
};


export type MutationUpdateLocationArgs = {
  data: LocationInput;
};


export type MutationUpdatePageArgs = {
  data: PageInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePrivacyPolicyArgs = {
  data: PrivacyPolicyInput;
};


export type MutationUpdateServiceArgs = {
  data: ServiceInput;
};


export type MutationUpdateSocialArgs = {
  data: SocialInput;
};


export type MutationUpdateSubscriberArgs = {
  data: SubscriberInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTeamArgs = {
  data: TeamInput;
};


export type MutationUpdateTermsAndConditionArgs = {
  data: TermsAndConditionInput;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Page = {
  __typename?: 'Page';
  components?: Maybe<Array<Maybe<PageComponentsDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PageComponentsDynamicZone = ComponentAboutPageAboutUs | ComponentAboutPageWhatDrives | ComponentCommonDocument | ComponentCommonMenu | ComponentGuidePageGuideHeader | ComponentHomePageBanner | ComponentHomePageForAllYourPetNeeds | ComponentHomePageGaiaGuide | ComponentHomePageOurLocations | ComponentHomePageWhyChooseUs | ComponentHomePageWhyPeopleLoveUs | ComponentLocationPageLocation | ComponentLocationPageLocationTips | ComponentLocationPageUseFulFaQs | ComponentServicesPageAllServices | ComponentServicesPageBannerService | ComponentTeamPageTeamInfo | Error;

export type PageEntity = {
  __typename?: 'PageEntity';
  attributes?: Maybe<Page>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PageEntityResponse = {
  __typename?: 'PageEntityResponse';
  data?: Maybe<PageEntity>;
};

export type PageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection';
  data: Array<PageEntity>;
  meta: ResponseCollectionMeta;
};

export type PageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageInput = {
  components?: InputMaybe<Array<Scalars['PageComponentsDynamicZoneInput']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type PrivacyPolicy = {
  __typename?: 'PrivacyPolicy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  document?: Maybe<ComponentCommonDocument>;
  meta?: Maybe<ComponentCommonMetaPage>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PrivacyPolicyEntity = {
  __typename?: 'PrivacyPolicyEntity';
  attributes?: Maybe<PrivacyPolicy>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PrivacyPolicyEntityResponse = {
  __typename?: 'PrivacyPolicyEntityResponse';
  data?: Maybe<PrivacyPolicyEntity>;
};

export type PrivacyPolicyInput = {
  document?: InputMaybe<ComponentCommonDocumentInput>;
  meta?: InputMaybe<ComponentCommonMetaPageInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  about?: Maybe<AboutEntityResponse>;
  contact?: Maybe<ContactEntityResponse>;
  footer?: Maybe<FooterEntityResponse>;
  guide?: Maybe<GuideEntityResponse>;
  guidePage?: Maybe<GuidePageEntityResponse>;
  guides?: Maybe<GuideEntityResponseCollection>;
  header?: Maybe<HeaderEntityResponse>;
  home?: Maybe<HomeEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  location?: Maybe<LocationEntityResponse>;
  me?: Maybe<UsersPermissionsMe>;
  page?: Maybe<PageEntityResponse>;
  pages?: Maybe<PageEntityResponseCollection>;
  privacyPolicy?: Maybe<PrivacyPolicyEntityResponse>;
  service?: Maybe<ServiceEntityResponse>;
  social?: Maybe<SocialEntityResponse>;
  subscriber?: Maybe<SubscriberEntityResponse>;
  subscribers?: Maybe<SubscriberEntityResponseCollection>;
  team?: Maybe<TeamEntityResponse>;
  termsAndCondition?: Maybe<TermsAndConditionEntityResponse>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAboutArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryContactArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryFooterArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryGuideArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGuidePageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryGuidesArgs = {
  filters?: InputMaybe<GuideFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHeaderArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHomeArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLocationArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPrivacyPolicyArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryServiceArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QuerySocialArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QuerySubscriberArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySubscribersArgs = {
  filters?: InputMaybe<SubscriberFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTeamArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTermsAndConditionArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Service = {
  __typename?: 'Service';
  allServices?: Maybe<ComponentServicesPageAllServices>;
  banner?: Maybe<ComponentServicesPageBannerService>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  meta?: Maybe<ComponentCommonMetaPage>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ServiceEntity = {
  __typename?: 'ServiceEntity';
  attributes?: Maybe<Service>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ServiceEntityResponse = {
  __typename?: 'ServiceEntityResponse';
  data?: Maybe<ServiceEntity>;
};

export type ServiceInput = {
  allServices?: InputMaybe<ComponentServicesPageAllServicesInput>;
  banner?: InputMaybe<ComponentServicesPageBannerServiceInput>;
  meta?: InputMaybe<ComponentCommonMetaPageInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type Social = {
  __typename?: 'Social';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Array<Maybe<ComponentCommonItemSocial>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type SocialDataArgs = {
  filters?: InputMaybe<ComponentCommonItemSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SocialEntity = {
  __typename?: 'SocialEntity';
  attributes?: Maybe<Social>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SocialEntityResponse = {
  __typename?: 'SocialEntityResponse';
  data?: Maybe<SocialEntity>;
};

export type SocialInput = {
  data?: InputMaybe<Array<InputMaybe<ComponentCommonItemSocialInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subscriber = {
  __typename?: 'Subscriber';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SubscriberEntity = {
  __typename?: 'SubscriberEntity';
  attributes?: Maybe<Subscriber>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SubscriberEntityResponse = {
  __typename?: 'SubscriberEntityResponse';
  data?: Maybe<SubscriberEntity>;
};

export type SubscriberEntityResponseCollection = {
  __typename?: 'SubscriberEntityResponseCollection';
  data: Array<SubscriberEntity>;
  meta: ResponseCollectionMeta;
};

export type SubscriberFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SubscriberFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<SubscriberFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SubscriberFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SubscriberInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Team = {
  __typename?: 'Team';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  meta?: Maybe<ComponentCommonMetaPage>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  teamInfo?: Maybe<ComponentTeamPageTeamInfo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TeamEntity = {
  __typename?: 'TeamEntity';
  attributes?: Maybe<Team>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TeamEntityResponse = {
  __typename?: 'TeamEntityResponse';
  data?: Maybe<TeamEntity>;
};

export type TeamInput = {
  meta?: InputMaybe<ComponentCommonMetaPageInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  teamInfo?: InputMaybe<ComponentTeamPageTeamInfoInput>;
};

export type TermsAndCondition = {
  __typename?: 'TermsAndCondition';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  document?: Maybe<ComponentCommonDocument>;
  meta?: Maybe<ComponentCommonMetaPage>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TermsAndConditionEntity = {
  __typename?: 'TermsAndConditionEntity';
  attributes?: Maybe<TermsAndCondition>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TermsAndConditionEntityResponse = {
  __typename?: 'TermsAndConditionEntityResponse';
  data?: Maybe<TermsAndConditionEntity>;
};

export type TermsAndConditionInput = {
  document?: InputMaybe<ComponentCommonDocumentInput>;
  meta?: InputMaybe<ComponentCommonMetaPageInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type GetTeamQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTeamQuery = { __typename?: 'Query', team?: { __typename?: 'TeamEntityResponse', data?: { __typename?: 'TeamEntity', attributes?: { __typename?: 'Team', teamInfo?: { __typename?: 'ComponentTeamPageTeamInfo', id: string, title?: string | null, description?: string | null, members?: Array<{ __typename?: 'ComponentTeamPageMember', id: string, name?: string | null, position?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null } | null } | null } | null } | null };

export type GetHomeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomeQuery = { __typename?: 'Query', home?: { __typename?: 'HomeEntityResponse', data?: { __typename?: 'HomeEntity', attributes?: { __typename?: 'Home', seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, keywords?: string | null, metaRobots?: string | null, structuredData?: any | null, metaViewport?: string | null, canonicalURL?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, metaSocial?: Array<{ __typename?: 'ComponentSharedMetaSocial', socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork, title: string, description: string, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null } | null, banner?: { __typename?: 'ComponentHomePageBanner', mainText?: string | null, subText?: string | null, slides?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null }> } | null } | null, whyChooseUs?: { __typename?: 'ComponentHomePageWhyChooseUs', id: string, title?: string | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, causes?: Array<{ __typename?: 'ComponentHomePageItemCause', id: string, title?: string | null, mobileTitle?: string | null, description?: string | null, textLink?: string | null, link?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null } | null, gaiaGuide?: { __typename?: 'ComponentHomePageGaiaGuide', id: string, bigText?: string | null, bigTextMobile?: string | null, smallText?: string | null, achievements?: Array<{ __typename?: 'ComponentHomePageItemAchievement', text?: string | null, number?: number | null } | null> | null } | null, whyPeopleLoveUs?: { __typename?: 'ComponentHomePageWhyPeopleLoveUs', id: string, title?: string | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, reviewCards?: Array<{ __typename?: 'ComponentHomePageItemWhyPeopleLoveUs', id: string, description?: string | null, star?: number | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null } | null, ourLocations?: { __typename?: 'ComponentHomePageOurLocations', id: string, title?: string | null, data?: any | null } | null, forAllYourPetNeeds?: { __typename?: 'ComponentHomePageForAllYourPetNeeds', id: string, title?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, buttonVisitOurShop?: { __typename?: 'ComponentCommonButton', text?: string | null, link?: string | null } | null } | null } | null } | null } | null };

export type GetGuidesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGuidesQuery = { __typename?: 'Query', guides?: { __typename?: 'GuideEntityResponseCollection', data: Array<{ __typename?: 'GuideEntity', id?: string | null, attributes?: { __typename?: 'Guide', slug?: string | null, date?: any | null, title: string, subTitle?: string | null, content?: string | null, shortDescription?: string | null, tags?: any | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, readTime?: string | null, type?: Enum_Guide_Type | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null };

export type GetDetailGuideQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetDetailGuideQuery = { __typename?: 'Query', guides?: { __typename?: 'GuideEntityResponseCollection', data: Array<{ __typename?: 'GuideEntity', attributes?: { __typename?: 'Guide', slug?: string | null, date?: any | null, title: string, subTitle?: string | null, content?: string | null, tags?: any | null, readTime?: string | null, type?: Enum_Guide_Type | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, keywords?: string | null, metaRobots?: string | null, structuredData?: any | null, metaViewport?: string | null, canonicalURL?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, metaSocial?: Array<{ __typename?: 'ComponentSharedMetaSocial', socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork, title: string, description: string, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null } | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, moreGuides?: { __typename?: 'GuideRelationResponseCollection', data: Array<{ __typename?: 'GuideEntity', id?: string | null, attributes?: { __typename?: 'Guide', title: string, slug?: string | null, date?: any | null, subTitle?: string | null, content?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null } | null }> } | null };

export type GetLocationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLocationQuery = { __typename?: 'Query', location?: { __typename?: 'LocationEntityResponse', data?: { __typename?: 'LocationEntity', attributes?: { __typename?: 'Location', locations?: Array<{ __typename?: 'ComponentLocationPageLocation', mapIframe?: string | null } | null> | null } | null } | null } | null };


export const GetTeamDocument = gql`
    query getTeam {
  team(publicationState: LIVE) {
    data {
      attributes {
        teamInfo {
          id
          title
          description
          members(pagination: {pageSize: 100}) {
            id
            name
            position
            description
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const GetHomeDocument = gql`
    query getHome {
  home(publicationState: LIVE) {
    data {
      attributes {
        seo {
          metaTitle
          metaDescription
          metaImage {
            data {
              attributes {
                url
              }
            }
          }
          metaSocial {
            socialNetwork
            title
            description
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          keywords
          metaRobots
          structuredData
          metaViewport
          canonicalURL
        }
        banner {
          mainText
          subText
          slides {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
        whyChooseUs {
          id
          title
          icon {
            data {
              attributes {
                url
              }
            }
          }
          causes {
            id
            title
            mobileTitle
            description
            textLink
            link
            image {
              data {
                id
                attributes {
                  url
                }
              }
            }
          }
        }
        gaiaGuide {
          id
          bigText
          bigTextMobile
          smallText
          achievements {
            text
            number
          }
        }
        whyPeopleLoveUs {
          id
          title
          icon {
            data {
              attributes {
                url
              }
            }
          }
          reviewCards {
            id
            description
            star
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
        ourLocations {
          id
          title
          data
        }
        forAllYourPetNeeds {
          id
          title
          description
          image {
            data {
              attributes {
                url
              }
            }
          }
          buttonVisitOurShop {
            text
            link
          }
        }
      }
    }
  }
}
    `;
export const GetGuidesDocument = gql`
    query getGuides {
  guides(publicationState: LIVE, sort: ["type:desc", "date:desc"]) {
    data {
      id
      attributes {
        slug
        date
        title
        subTitle
        content
        shortDescription
        tags
        createdAt
        updatedAt
        publishedAt
        image {
          data {
            attributes {
              url
            }
          }
        }
        readTime
        type
      }
    }
  }
}
    `;
export const GetDetailGuideDocument = gql`
    query getDetailGuide($slug: String!) {
  guides(filters: {slug: {eq: $slug}}) {
    data {
      attributes {
        seo {
          metaTitle
          metaDescription
          metaImage {
            data {
              attributes {
                url
              }
            }
          }
          metaSocial {
            socialNetwork
            title
            description
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          keywords
          metaRobots
          structuredData
          metaViewport
          canonicalURL
        }
        slug
        date
        title
        subTitle
        content
        tags
        image {
          data {
            attributes {
              url
            }
          }
        }
        readTime
        type
        createdAt
        updatedAt
        publishedAt
        moreGuides {
          data {
            id
            attributes {
              title
              slug
              date
              subTitle
              content
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const GetLocationDocument = gql`
    query getLocation {
  location(publicationState: LIVE) {
    data {
      attributes {
        locations {
          mapIframe
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();
const GetTeamDocumentString = print(GetTeamDocument);
const GetHomeDocumentString = print(GetHomeDocument);
const GetGuidesDocumentString = print(GetGuidesDocument);
const GetDetailGuideDocumentString = print(GetDetailGuideDocument);
const GetLocationDocumentString = print(GetLocationDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getTeam(variables?: GetTeamQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetTeamQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetTeamQuery>(GetTeamDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTeam', 'query', variables);
    },
    getHome(variables?: GetHomeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetHomeQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetHomeQuery>(GetHomeDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getHome', 'query', variables);
    },
    getGuides(variables?: GetGuidesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetGuidesQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetGuidesQuery>(GetGuidesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getGuides', 'query', variables);
    },
    getDetailGuide(variables: GetDetailGuideQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetDetailGuideQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetDetailGuideQuery>(GetDetailGuideDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDetailGuide', 'query', variables);
    },
    getLocation(variables?: GetLocationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetLocationQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetLocationQuery>(GetLocationDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getLocation', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;