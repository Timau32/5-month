import {
  BOOK_ADDED_TO_CART,
  BOOK_REMOVE_FROM_CART,
  BOOK_DELETE_FROM_CART,
} from "../types";

const createItem = (
  book,
  cartBook = { title: book.title, id: book.id, count: 0, total: 0 },
  quantity
) => {
  return {
    ...cartBook,
    count: cartBook.count + quantity,
    total: quantity * book.price + cartBook.total,
  };
};

const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return cartItems.filter(({ id }) => id !== item.id);
  }
  if (idx > -1) {
    return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
  }

  return [...cartItems, item];
};

const updateOrder = (state, payload, quantity) => {
  const { cartItems: items, bookList } = state;
  const { books } = bookList;
  const { cartItems } = items;

  const book = books.find(({ id }) => id === payload);
  const cartIndex = cartItems.findIndex(({ id }) => id === payload);
  const cartBook = cartItems[cartIndex];

  const newItem = createItem(book, cartBook, quantity);

  return {
    orderTotal: 0,
    cartItems: updateCartItems(cartItems, newItem, cartIndex),
  };
};

export default (state, { type, payload }) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }

  switch (type) {
    case BOOK_ADDED_TO_CART:
      return updateOrder(state, payload, 1);
    case BOOK_REMOVE_FROM_CART:
      return updateOrder(state, payload, -1);

    case BOOK_DELETE_FROM_CART:
      const { cartItems } = state.cartItems;
      const itemCount = cartItems.find(({ id }) => id === payload).count;

      return updateOrder(state, payload, -itemCount);
    default:
      return state.cartItems;
  }
};
