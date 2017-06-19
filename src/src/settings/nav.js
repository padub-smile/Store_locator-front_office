export const NAV_UNIVERSE_QUERY_PARAMETER = 'activeMenu';
export const NAV_AVAILABLE_IDENTIFIERS = {
  'womens-fashion': 'cdc',
  'mens-fashion': 'cdc',
  'fragrance': 'pcd',
  'makeup': 'pcd',
  'skincare': 'pcd',
  'childrens-fashion': 'cdc',
  'jewellery': 'cdc',
  'timepieces': 'cdc'
};

export const NAV_MOBILE_URLS = {
  development: '/fixtures/navmobile.json',
  test: '/fixtures/navmobile.json',
  production: 'http://m.dior.com/fr_fr/static/menu/64,pcd,66.json'
};

export const NAV_MOBILE_LINKS_URLS = {
  development: '/fixtures/navmobile_links.json',
  test: '/fixtures/navmobile_links.json',
  production: '#' // TODO : Add missing prod URL.
};

export const NAV_METANAV_URLS = {
  development:  '/fixtures/metanav.json',
  test:  '/fixtures/metanav.json',
  production: 'http://www.dior.com/couture/fr_fr/ws/metanav'
};

export const NAV_SUBNAV_URLS = {
  development: (universe) => `/fixtures/${universe}.json`,
  test: (universe) => `/fixtures/${universe}.json`,
  production: (universe) => `http://www.dior.com/couture/fr_fr/ws/topmenu/${universe}`
};

export const NAV_FOOTER_URLS = {
  development: '/fixtures/footer.json',
  test: '/fixtures/footer.json',
  production: 'http://www.dior.com/couture/fr_fr/ws/footer'
};
