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
    const filtered = order.filter((el) => el.id !== id);
    setOrder(filtered);
  };

  const incrementQuantity = (id) => {
    const incrementData = order.map((el) => {
      if (el.id === id) {
        const incrQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: incrQuantity
        };
      } else {
        return el;
      }
    });
    setOrder(incrementData);
  };

  const decrementQuantity = (id) => {
    const decrementData = order.map((el) => {
      if (el.id === id) {
        const decrQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: decrQuantity
        };
      } else {
        return el;
      }
    });
    setOrder(decrementData);
  };

  return (
    <>
      <Header order={order} />
      <Modal
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        order={order}
        removeBasket={removeBasket}
      />
      <Shop addToBasket={addToBasket} />
      <Footer />
    </>
  );
};

export default App;
