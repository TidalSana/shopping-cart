import { useEffect, useState } from "react";

const Form = (props) => {
  const { click, change, item } = props;
  const [empty, setEmpty] = useState(false);
  const [max, setMax] = useState(false);

  useEffect(() => {
    if (item.price === 0) return setEmpty(false);

    return setEmpty(true);
  }, [item.price]);

  useEffect(() => {
    if (item.quantity < 6) {
      return setMax(false);
    }
    return setMax(true);
  }, [item.quantity]);

  return (
    <form className="shop-form" onSubmit={click}>
      <div className="product-name">
        <h2 className="product-title">WILBA.TECH Salvation Keyboard</h2>
      </div>
      <div className="price">
        <h3 className={`${empty ? "" : "hidden"} product-price`}>
          ${item.price}
        </h3>
        <h3 className={`${max ? "" : "hidden"} product-warning `}>
          MAX AMOUNT OF PRODUCTS (5)
        </h3>
      </div>
      <div className="options">
        <div className="colors">
          <label className="colors-label" htmlFor="colors">
            Colors
            <select
              required
              name="colors"
              id="colors"
              defaultValue=""
              onChange={change}
            >
              <option defaultValue disabled value="">
                Pick your Colors
              </option>
              <option label="Samurai Blue" value="0">
                Samurai Blue
              </option>
              <option label="Momentum Red" value="1">
                Momentum Red
              </option>
              <option label="Lightning Silver" value="2">
                Lightning Silver
              </option>
              <option label="Soul Black" value="3">
                Soul Black
              </option>
              <option label="Business Grey" value="4">
                Business Grey
              </option>
            </select>
          </label>
        </div>
        <div className="pcb">
          <label className="pcb-label" htmlFor="pcb">
            PCB
            <select
              required
              name="pcb"
              id="pcb"
              defaultValue=""
              onChange={change}
            >
              <option defaultValue disabled value="">
                Pick your PCB
              </option>
              <option value="hotswap">Hotswap PCB</option>
              <option value="solder">Solder PCB</option>
            </select>
          </label>
        </div>
      </div>
      <div className="quantity">
        <label className="quantity-label" htmlFor="quantity">
          Quantity
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="5"
            defaultValue="1"
            onChange={change}
          />
        </label>
      </div>
      <button type="submit" className="add-cart">
        Add to Cart
      </button>
    </form>
  );
};

export default Form;
