import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../styles/Nav.css";

const Navigation = (props) => {
  const { change } = props;
  return (
    <nav className="navigation">
      <div className="logo">
        <h1 className="title">Keebs</h1>
      </div>
      <ul className="nav-links">
        <Link to="/">
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
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
