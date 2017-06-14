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
  development: (ids) => `/fixtures/pos_list.json?ids=${ids}`,
  test: (ids) => `/fixtures/pos_list.json?ids=${ids}`,
  production: (ids) => `https://51y3jl17xa.execute-api.eu-west-1.amazonaws.com/beta/PointOfSale?ids=${ids}`
};
