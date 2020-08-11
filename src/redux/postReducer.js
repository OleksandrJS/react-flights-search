/** @format */

import { FETCH_POST } from './types';

const initialState = {
  fetchedPosts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, fetchedPosts: action.payload };
    default:
      return state;
  }
};
