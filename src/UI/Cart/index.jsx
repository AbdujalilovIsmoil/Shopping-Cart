import React from "react";

const index = ({ order }) => {
  return (
    <>
      <div className="d-flex align-items-center">
        <a className="text-reset me-3 hidden-arrow" href="#">
          <i className="fas fa-shopping-cart"></i>
          <span className="badge rounded-pill badge-notification bg-danger">
            {order.length}
          </span>
        </a>
      </div>
    </>
  );
};

export default index;
