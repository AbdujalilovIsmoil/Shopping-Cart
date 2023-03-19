import React from "react";
import Card from "../Card";

const index = ({ product = [], addToBasket }) => {
  if (!product.length) {
    return <h1 className="text-center mt-5">NOT FOUND</h1>;
  }
  return (
    <>
      <div className="row">
        {product.map((item) => (
          <div
            className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
            key={item.id}
          >
            <Card {...item} product={product} addToBasket={addToBasket} />
          </div>
        ))}
      </div>
    </>
  );
};

export default index;
