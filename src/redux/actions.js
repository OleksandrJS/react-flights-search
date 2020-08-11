/** @format */

import { SHOW_LOADER, HIDE_LOADER, FETCH_POST } from './types';

// const PROXY = 'https://cors-anywhere.herokuapp.com/';
const PRICE = 'https://min-prices.aviasales.ru/calendar_preload';

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function dispatchLoader() {
  return (dispatch) => {
    dispatch(hideLoader());
  };
}

export function fetchData(data) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await fetch(PRICE + data);
      const json = await response.json();
      dispatch({ type: FETCH_POST, payload: json });
      // dispatch(hideLoader());
    } catch (e) {
      dispatch(hideLoader());
    }
  };
}
