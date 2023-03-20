import React from "react";

const index = ({ order }) => {
  return (
    <>
      <div className="d-flex align-items-center">
        <a className="text-reset me-3 hidden-arrow" href="#">
          <i
            data-mdb-toggle="modal"
            data-mdb-target="#exampleModal"
            className="fas fa-shopping-cart"
          ></i>
          <span className="badge rounded-pill badge-notification bg-danger">
            {order}
          </span>
        </a>
      </div>
    </>
  );
};

export default index;
