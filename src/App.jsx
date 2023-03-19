import { useState } from "react";
import { Header, Footer, Shop } from "./components";

const App = () => {
  const [order, setOrder] = useState([]);

  return (
    <>
      <Header order={order} />
      <Shop />
      <Footer />
    </>
  );
};

export default App;
