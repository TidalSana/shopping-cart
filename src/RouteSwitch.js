import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import App from "./App";
import Shop from "./components/Shop/Shop";
import Footer from "./components/Footer";

const RouteSwitch = () => {
  // close and open shop modal
  const [modal, setModal] = useState(true);
  const toggleModal = (e) => {
    e.stopPropagation();
    setModal(!modal);
  };

  // used to set item attributes
  const [product, setProduct] = useState({
    price: 0,
    colors: "",
    pcb: "",
    quantity: "1",
  });

  // used to display list in the cart
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((prev, next) => prev + next.price, 0));
  }, [cart]);
  const updateCart = (e) => {
    e.preventDefault();
    // add to cart array
    setCart((prevState) => [...prevState, product]);
    setProduct({ price: 0, colors: "", pcb: "", quantity: "1" });
    e.target.reset();
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Cart
        items={cart}
        setItem={setCart}
        total={total}
        toggle={modal}
        change={toggleModal}
      />
      <Nav change={toggleModal} number={cart.length} />
      <div className="page-container">
        <div className="content-container">
          <Routes>
            <Route path="/" element={<App />} />
            <Route
              path="/shop"
              element={
                <Shop
                  click={updateCart}
                  product={product}
                  changeProduct={setProduct}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default RouteSwitch;
