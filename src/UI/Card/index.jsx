import React from "react";

const index = ({ name, description, price, full_background }) => {
  return (
    <>
      <div className="card my-3">
        <img src={full_background} className="card-img-top" alt={name} />
        <div className="card-body">
          <div className="card-box">
            <h5 className="card-title" style={{ fontSize: "18px" }}>
              {name}
            </h5>
            <p className="card-text" style={{ fontSize: "18px" }}>
              {description}
            </p>
          </div>
          <h5 className="my-3">{price}$</h5>
          <a href="#!" className="btn btn-primary">
            Buy
          </a>
        </div>
      </div>
    </>
  );
};

export default index;
