export const POS_POSITION_URLS = {
  development: '/fixtures/pos_position.json',
  test: '/fixtures/pos_position.json',
  production: '/json/pos_position.json'
};

export const POS_FILTERS_URLS = {
  development: '/fixtures/filters_list.json',
  test: '/fixtures/filters_list.json',
  production: '/json/filters.json'
};

export const POS_SEARCH_URLS = {
  development: (ids) => `https://tpc33of0na.execute-api.eu-west-1.amazonaws.com/beta/PointOfSale?ids=${ids}`,
  test: (ids) => `/fixtures/pos_list.json?ids=${ids}`,
  production: (ids) => `https://tpc33of0na.execute-api.eu-west-1.amazonaws.com/beta/PointOfSale?ids=${ids}`
};
