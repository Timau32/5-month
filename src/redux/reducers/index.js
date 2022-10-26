import bookList from "./book-list";
import cartItemsReducer from "./cartItemsReducer";

const reducer = (state, action) => {
  return {
    bookList: bookList(state, action),
    cartItems: cartItemsReducer(state, action),
  };
};

export default reducer;
