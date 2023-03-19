import { useState } from "react";

const index = ({
  name,
  description,
  price,
  full_background,
  id,
  addToBasket
}) => {
  return (
    <>
      <div className="card my-3">
        <img src={full_background} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title" style={{ fontSize: "18px" }}>
            {name}
          </h5>
          <p className="card-text" style={{ fontSize: "18px" }}>
            {description}
          </p>
          <div className="box d-flex justify-content-between align-items-center">
            <a
              href="#!"
              className="btn btn-primary"
              onClick={() => addToBasket({ name, price, id, description })}
            >
              Buy
            </a>
            <h5 className="my-3">{price}$</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
