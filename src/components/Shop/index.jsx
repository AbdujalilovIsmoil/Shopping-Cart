import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../../assets/config";
import Loader from "../Loader";
import List from "../../UI/List";
import "./Shop.scss";

const index = () => {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY
      }
    })
      .then((response) => response.json())
      .then((data) => {
        data && setProducts(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="shop my-4">
        <div className="container">
          {loading ? (
            <Loader />
          ) : (
            <List product={product} />
          )}
        </div>
      </div>
    </>
  );
};

export default index;
