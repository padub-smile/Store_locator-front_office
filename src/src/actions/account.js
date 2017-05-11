import Cookie from 'js-cookie';

export function getIsConnected() {
  const cookieName = 'userData';
  let isConnected = false;
  let cookieData = Cookie.get(cookieName);
  if (cookieData) {
    cookieData = JSON.parse(cookieData);
    isConnected = !!cookieData.name;
  }
  return isConnected;
}
