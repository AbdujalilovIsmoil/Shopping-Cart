import React from "react";
import Cart from "../../UI/Cart";

const index = ({ product, openToogleFunction }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top z-index-1 top-0">
        <div className="container">
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            React Shop
          </a>
          <Cart product={product} openToogleFunction={openToogleFunction} />
        </div>
      </nav>
    </>
  );
};

export default index;
