import Keyboards from "./Keyboards";
import Form from "./Form";
import "../../styles/Shop.css";
import { useEffect, useState } from "react";

const Shop = (props) => {
  const { click, changeProduct, product } = props;

  const [image, setImage] = useState([
    <img
      className="keyboard-pictures-main"
      key={0}
      src={Keyboards[0].img}
      alt={Keyboards[0].name}
      id={Keyboards[0].name}
    />,
  ]);
  useEffect(() => {
    const previewEle = document.querySelectorAll(".keyboard-pictures-preview");
    const mainEle = document.querySelector(".keyboard-pictures-main");

    previewEle.forEach((element) => {
      if (element.id === mainEle.id) {
        element.classList.add("active-img");
        return;
      }
      element.classList.remove("active-img");
    });
  }, [image]);
  const handleImage = (e) => {
    e.preventDefault();
    const currentPos = e.currentTarget.id;

    if (image.length > 0) setImage([]);

    setImage((prevState) => [
      ...prevState,
      <img
        className="keyboard-pictures-main"
        key={currentPos}
        src={Keyboards[currentPos].img}
        alt={Keyboards[currentPos].name}
        id={Keyboards[currentPos].name}
      />,
    ]);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    changeProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "colors") {
      if (image.length > 0) setImage([]);

      setImage((prevState) => [
        ...prevState,
        <img
          className="keyboard-pictures-main"
          key={value}
          src={Keyboards[value].img}
          alt={Keyboards[value].name}
          id={Keyboards[value].name}
        />,
      ]);
    }

    if (name === "pcb") {
      if (value === "hotswap") {
        changeProduct((prevState) => ({
          ...prevState,
          price: 300 * product.quantity,
        }));
        return;
      }
      changeProduct((prevState) => ({
        ...prevState,
        price: 295 * product.quantity,
      }));
      return;
    }

    if (name === "quantity") {
      if (product.pcb === "hotswap") {
        changeProduct((prevState) => ({
          ...prevState,
          price: 300 * value,
        }));
        return;
      }
      changeProduct((prevState) => ({
        ...prevState,
        price: 295 * value,
      }));
      return;
    }
  };

  return (
    <div className="shop">
      <div className="shop-banner">
        <p className="shop-text">
          This is a Pre-Order! Order expected to ship around Q2 2022
        </p>
      </div>
      <div className="keyboards-shop">
        <div className="main-shopping-area">
          <div className="image-preview">
            {Keyboards.map((board) => {
              return (
                <div
                  onClick={handleImage}
                  key={board.id}
                  id={board.id}
                  className="preview-panel"
                >
                  <img
                    className="keyboard-pictures-preview"
                    src={board.img}
                    alt={board.name}
                    id={board.name}
                  />
                </div>
              );
            })}
          </div>
          <div className="image-holder">{image}</div>
        </div>
        <div className="product-form">
          <Form click={click} change={handleChange} cost={product.price} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
