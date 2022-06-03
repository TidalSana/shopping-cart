import Showcase from "./Showcase";
import Recommendation from "./Recommendation";
import { Link } from "react-router-dom";
import "../../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-landing">
        <div className="landing-desc">
          <h2 className="landing-title">WILBA.TECH Salvation</h2>
          <p className="landing-para">
            The SALVATION combines the soft and vibrant typing experience of an
            innovative leaf spring mounting system with a 60% tray case design.
          </p>
        </div>
        <Link to="/shop">
          <button className="landing-btn">Buy Now</button>
        </Link>
      </div>
      <div className="home-collections">
        <Showcase />
      </div>
      <div className="home-desc">
        <Recommendation />
      </div>
    </div>
  );
};

export default Home;
