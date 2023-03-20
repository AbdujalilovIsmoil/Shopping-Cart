import React from "react";
import Cart from "../../UI/Cart";

const index = ({ order = [] }) => {
  if (order.length) {
    const reduced = order.reduce((a, b) => {
      return a + (b.quantity * b.price) * 1;
    },0);
    console.log(reduced);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top z-index-1 top-0">
        <div className="container">
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            React Shop
          </a>
          <Cart order={order.length} />
        </div>
      </nav>
    </>
  );
};

export default index;
