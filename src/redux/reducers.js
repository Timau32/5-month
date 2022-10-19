import { BOOK_ADDED_TO_CART, FETCH_BOOKS_SUCCESS } from "./types";

const initialState = {
  books: [],
  cartItems: [],
  orderTotal: 400,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_BOOKS_SUCCESS:
      return { ...state, books: payload };

    case BOOK_ADDED_TO_CART:
      const { cartItems, books } = state;
      const book = books.find(({ id }) => id === payload);

      const newItem = {
        id: book.id,
        count: 1,
        total: book.price,
        title: book.title,
      };

      return { ...state, cartItems: [...cartItems, newItem] };

    default:
      return state;
  }
};

export default reducer;
