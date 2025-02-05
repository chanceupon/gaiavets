export const DEFAULT_FILTER = {
  filter: {},
  page: 1,
  limit: 20,
  sort: {
    createdAt: -1,
  },
};

export const DEFAULT_RESPONSE = {
  docs: [],
  totalDocs: 0,
  limit: 25,
  hasPrevPage: false,
  hasNextPage: false,
  page: 1,
  totalPages: 0,
};

export const GuideTypeName = {
  Featured_Article: 'Featured Article',
  Article: 'Article',
};
