import Cookie from 'js-cookie';

const cookieName = 'userData';

export function getIsConnected() {
  return !!getName();
}

export function getName() {
  let name = '';
  let cookieData = Cookie.get(cookieName);
  if (cookieData) {
    cookieData = JSON.parse(cookieData);
    name = cookieData.name;
  }
  return name;
}
