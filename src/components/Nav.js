import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../styles/Nav.css";
import { useEffect, useState } from "react";

const Navigation = (props) => {
  const { change, number } = props;

  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    if (number === 0) return setEmpty(true);
    return setEmpty(false);
  }, [number]);
  return (
    <nav className="navigation">
      <div className="logo">
        <Link to="/shopping-cart">
          <h1 className="title">Keebs</h1>
        </Link>
      </div>
      <ul className="nav-links">
        <Link to="/shopping-cart">
          <li className="links">Home</li>
        </Link>
        <Link to="/shop">
          <li className="links">Shop</li>
        </Link>
        <div className="shopping-cart">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="shopping-cart"
            onClick={change}
          />
          <span
            className={`${empty ? "hidden" : ""} badge badge-warning`}
            id="label-cart"
          >
            {number}
          </span>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
