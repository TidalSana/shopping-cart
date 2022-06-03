const Form = (props) => {
  const { click, change, cost } = props;
  return (
    <form className="shop-form" onSubmit={click}>
      <div className="price">
        <h3>${cost}</h3>
      </div>
      <div className="options">
        <div className="colors">
          <label htmlFor="colors">Colors:</label>
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
        </div>
        <div className="pcb">
          <label htmlFor="pcb">PCB:</label>
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
        </div>
      </div>
      <div className="quantity">
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="5"
          defaultValue="1"
          onChange={change}
        />
      </div>
      <button type="submit" className="add-cart">
        Add to Cart
      </button>
    </form>
  );
};

export default Form;
