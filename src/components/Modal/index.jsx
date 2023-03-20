import { useState } from "react";
import "./Modal.scss";

const index = ({
  order,
  removeBasket,
  incrementQuantity,
  decrementQuantity
}) => {
  const reduced = order.reduce((a, b) => {
    return a + b.quantity * b.price;
  }, 0);
  return (
    <>
      <div className="container">
        <table className="table bg-light mt-5">
          <thead>
            <tr>
              <th scope="col">№</th>
              <th scope="col">Fullname</th>
              <th scope="col">Price</th>
              <th scope="col">Score</th>
              <th scope="col">Delete</th>
              <th scope="col">Plus</th>
              <th scope="col">Minus</th>
            </tr>
          </thead>
          <tbody>
            {order.length ? (
              order.map((el) => (
                <tr>
                  <th scope="row">{el.id}</th>
                  <td>{el.name}</td>
                  <td>{el.price * el.quantity}$</td>
                  <td>{el.quantity}</td>
                  <td>
                    <button
                      onClick={() => removeBasket(el.id)}
                      type="button"
                      className="btn btn-link btn-sm px-3"
                      data-ripple-color="dark"
                    >
                      <i className="fas fa-trash text-danger fs-5"></i>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => incrementQuantity(el.id)}
                      type="button"
                      className="btn btn-sm px-3 btn-success"
                      data-ripple-color="dark"
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => decrementQuantity(el.id)}
                      type="button"
                      className="btn btn-sm px-3 btn-danger"
                      data-ripple-color="dark"
                    >
                      -
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <h4 className="mt-4 ms-4">NOT FOUND</h4>
            )}
          </tbody>
        </table>
        <h5 className="mt-2">Total: {reduced}$</h5>
      </div>
    </>
  );
};

export default index;
