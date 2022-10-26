import {
  BOOK_ADDED_TO_CART,
  BOOK_DELETE_FROM_CART,
  BOOK_REMOVE_FROM_CART,
  FETCH_BOOKS_SUCCESS,
} from "./types";

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

const bookRemoveFromCart = (bookid) => {
  return {
    type: BOOK_REMOVE_FROM_CART,
    payload: bookid,
  };
};

const bookDeleteFromCart = (bookid) => {
  return {
    type: BOOK_DELETE_FROM_CART,
    payload: bookid,
  };
};

export { booksLoaded, bookAddedToCart, bookRemoveFromCart,bookDeleteFromCart };
