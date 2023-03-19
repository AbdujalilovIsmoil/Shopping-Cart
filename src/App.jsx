import { useState } from "react";
import { Header, Footer, Shop } from "./components";

const App = () => {
  const [order, setOrder] = useState([]);

  const addToBasket = (item) => {
    const findScore = order.findIndex((el) => el.id === item.id);

    if (findScore < 0) {
      const newObject = {
        ...item,
        quantity: 1
      };
      setOrder([...order, newObject]);
    } else {
      const newOrder = order.map((el, index) => {
        if (index === findScore) {
          return {
            ...el,
            quantity: el.quantity + 1
          };
        } else {
          return el;
        }
      });
      setOrder(newOrder);
    }
  };

  return (
    <>
      <Header order={order} />
      <Shop addToBasket={addToBasket} />
      <Footer />
    </>
  );
};

export default App;
