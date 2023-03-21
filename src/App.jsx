import { useState } from "react";
import { Header, Footer, Shop, Modal } from "./components";

const App = () => {
  const [product, setProduct] = useState([]);
  const [open, setOpen] = useState(false);

  const addToBasket = (items) => {
    const findScore = product.findIndex((el) => el.id === items.id);

    if (findScore < 0) {
      const newItem = {
        ...items,
        quantity: 1
      };
      setProduct([...product, newItem]);
    } else {
      const newProduct = product.filter((item, index) => {
        if (index === findScore) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        } else {
          return item;
        }
      });
      setProduct(newProduct);
    }
  };

  const removeBasket = (id) => {
    const removeItem = product.filter((el) => el.id !== id);
    setProduct(removeItem);
  };

  const incrementProduct = (id) => {
    const incrementItem = product.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          quantity: el.quantity + 1
        };
      } else {
        return el;
      }
    });
    setProduct(incrementItem);
  };

  const decrementProduct = (id) => {
    const decrementItem = product.map((el) => {
      if (el.quantity <= 1) {
        return {
          ...el,
          quantity: 1
        };
      }
      if (el.id === id) {
        return {
          ...el,
          quantity: el.quantity - 1
        };
      } else {
        return el;
      }
    });
    setProduct(decrementItem);
  };

  const openToogleFunction = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <Modal
        product={product}
        removeBasket={removeBasket}
        incrementProduct={incrementProduct}
        decrementProduct={decrementProduct}
        open={open}
      />
      <Header product={product} openToogleFunction={openToogleFunction} />
      <Shop addToBasket={addToBasket} />
      <Footer />
    </>
  );
};

export default App;
