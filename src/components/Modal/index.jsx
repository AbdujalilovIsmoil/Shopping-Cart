import React from "react";
import "./Modal.scss";

const index = ({
  product = [],
  removeBasket,
  incrementProduct,
  decrementProduct,
  open
}) => {
  const reduced = product.reduce((sum, b) => {
    return sum + b.quantity * b.price;
  }, 0);

  let classNames = "tables";

  if (open) {
    classNames += " open";
  }

  return (
    <>
      <div className={classNames}>
        <div className="table-responsive responsive bg-light px-3 rounded-5">
          <table className="table mt-5 table-hover bg-light">
            <thead>
              <tr>
                <th>№</th>
                <th>Fullname</th>
                <th>Price</th>
                <th>Score</th>
                <th>Delete</th>
                <th>Plus</th>
                <th>Minus</th>
              </tr>
            </thead>
            <tbody>
              {product.map((el, index) => (
                <tr key={el.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{el.name}</td>
                  <td>{el.price * el.quantity}</td>
                  <td>{el.quantity}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-link btn-sm px-3"
                      data-ripple-color="dark"
                      onClick={() => removeBasket(el.id)}
                    >
                      <i className="fas fa-trash text-danger fs-5"></i>
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-sm px-3 btn-success"
                      data-ripple-color="dark"
                      onClick={() => incrementProduct(el.id)}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-sm px-3 btn-danger"
                      data-ripple-color="dark"
                      onClick={() => decrementProduct(el.id)}
                    >
                      -
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h6 className="mt-2">Total: {reduced}$</h6>
        </div>
      </div>
    </>
  );
};

export default index;
