import React from "react";

const index = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top z-index-1 top-0">
        <div className="container">
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            React Shop
          </a>

          <div className="d-flex align-items-center">
            <a className="text-reset me-3 hidden-arrow" href="#">
              <i className="fas fa-shopping-cart"></i>
              <span className="badge rounded-pill badge-notification bg-danger">
                1
              </span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default index;
