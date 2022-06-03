import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Keyboards from "./Shop/Keyboards";
import "../styles/Cart.css";

const Cart = (props) => {
  const { items, toggle, change, total } = props;

  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    if (items.length > 0) return setEmpty(true);
  }, [items]);

  return (
    <div
      className={`${toggle ? "hidden" : ""} cart transparent-section `}
      onClick={change}
    >
      <div
        className="white-section"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="cart-title-container">
          <h2 className="cart-title">Cart</h2>
          <button className="close">
            <FontAwesomeIcon icon={faCircleXmark} onClick={change} />
          </button>
        </div>
        <div className={`${empty ? "hidden" : ""} empty`}>
          <p>Your Shopping Cart is empty!</p>
        </div>
        <div className="cart-items">
          {items.map((item, index) => (
            <div className="item-cart" id={index} key={index}>
              <img
                className="item-pictures"
                key={item.colors}
                src={Keyboards[item.colors].img}
                alt={Keyboards[item.colors].name}
                id={Keyboards[item.colors].name}
              />
              <div className="item-text">
                <p className="color">Color: {Keyboards[item.colors].name}</p>
                <p className="pcb">PCB: {item.pcb}</p>
                <p className="amount">Quantity: {item.quantity}</p>
                <p className="cost">Cost: ${item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={`${empty ? "total" : "hidden"} `}>
          <h3 className="total-title">Total:</h3>
          <p className="total-amount">${total}</p>
        </div>
        <button className={`${empty ? "checkout" : "hidden"} `}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
