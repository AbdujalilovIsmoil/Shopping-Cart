import { useState } from "react";
import { Header, Footer, Shop, Modal } from "./components";

const App = () => {
  const [order, setOrder] = useState([]);

  const addToBasket = (items) => {
    const findScore = order.findIndex((el) => el.id === items.id);

    if (findScore < 0) {
      const newItem = {
        ...items,
        quantity: 1
      };
      setOrder([...order, newItem]);
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

  const removeBasket = (id) => {
    const filtered = order.filter(el => el.id !== id);
    setOrder(filtered);
  }


  return (
    <>
      <Header order={order} />
      <Modal order={order} removeBasket={removeBasket}/>
      <Shop addToBasket={addToBasket} />
      <Footer />
    </>
  );
};

export default App;
