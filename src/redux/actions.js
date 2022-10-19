import { BOOK_ADDED_TO_CART, FETCH_BOOKS_SUCCESS } from "./types";

const booksLoaded = (books) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: books,
  };
};

const bookAddedToCart = (bookid) => {
  return {
    type: BOOK_ADDED_TO_CART,
    payload: bookid,
  };
};

export { booksLoaded, bookAddedToCart };
