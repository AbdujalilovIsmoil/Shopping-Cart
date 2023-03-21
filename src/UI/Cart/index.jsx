import React from "react";

const index = ({ product = [], openToogleFunction = Function.prototype }) => {
  return (
    <>
      <div className="d-flex align-items-center">
        <a
          className="text-reset me-3 hidden-arrow"
          href="#"
          onClick={openToogleFunction}
        >
          <i
            data-mdb-toggle="modal"
            data-mdb-target="#exampleModal"
            className="fas fa-shopping-cart"
          ></i>
          <span className="badge rounded-pill badge-notification bg-danger">
            {product.length}
          </span>
        </a>
      </div>
    </>
  );
};

export default index;
