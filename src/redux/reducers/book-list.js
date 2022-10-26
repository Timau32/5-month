import {FETCH_BOOKS_SUCCESS} from "../types";

export default (state, { type, payload }) => {
  if (state == undefined) {
    return {
      books: [],
      loading: true,
      error: null,
    };
  }

  switch (type) {
    case FETCH_BOOKS_SUCCESS:
      return { ...state, books: payload };
    default:
      return state.bookList;
  }
};
