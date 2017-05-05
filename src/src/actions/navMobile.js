export const TOGGLE_NAV_MOBILE = 'TOGGLE_NAV_MOBILE';
export function toggleNavMobile(dispatch, isOpen) {
  dispatch({
    type: TOGGLE_NAV_MOBILE,
    data: !isOpen
  });
}
