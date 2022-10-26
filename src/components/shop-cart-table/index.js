import React from "react";
import { connect } from "react-redux";
import {
  bookAddedToCart,
  bookDeleteFromCart,
  bookRemoveFromCart,
} from "../../redux/actions";
import classes from "./styles.module.scss";

const ShopCartTable = ({ items, total, increment, decrement, deleteBook }) => {
  const renderItems = (el, idx) => {
    const { title, count, total, id } = el;
    return (
      <tr key={`shop-item-${id}`}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}$</td>
        <td>
          <button
            onClick={() => increment(id)}
            className="btn btn-outline-success btn-sm"
          >
            <i className="fa-solid fa-circle-plus"></i>
          </button>
          <button
            onClick={() => decrement(id)}
            className="btn btn-outline-warning btn-sm"
          >
            <i className="fa-solid fa-circle-minus"></i>
          </button>
          <button
            onClick={() => deleteBook(id)}
            className="btn btn-outline-danger btn-sm"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className={classes.cart_table}>
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <td>№</td>
            <td>Item</td>
            <td>Count</td>
            <td>Price</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>{items.map(renderItems)}</tbody>
      </table>

      <div className={classes.cart_table_total}>Total: {total}$</div>
    </div>
  );
};

const mapStateToProps = ({ cartItems }) => {
  return {
    items: cartItems.cartItems,
    total: cartItems.orderTotal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (bookid) => dispatch(bookAddedToCart(bookid)),
    decrement: (bookid) => dispatch(bookRemoveFromCart(bookid)),
    deleteBook: (bookid) => dispatch(bookDeleteFromCart(bookid)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopCartTable);
