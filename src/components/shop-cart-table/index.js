import React from "react";
import { connect } from "react-redux";
import classes from "./styles.module.scss";

const ShopCartTable = ({ items, total }) => {
  const renderItems = (el, idx) => {
    const { title, count, total, id } = el;
    return (
      <tr key={`shop-item-${id}`}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}$</td>
        <td>
          <button className="btn btn-outline-success btn-sm">
            <i className="fa-solid fa-circle-plus"></i>
          </button>
          <button className="btn btn-outline-warning btn-sm">
            <i className="fa-solid fa-circle-minus"></i>
          </button>
          <button className="btn btn-outline-danger btn-sm">
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

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

export default connect(mapStateToProps)(ShopCartTable);
