import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Made by <FontAwesomeIcon icon={faGithub} />
        <a className="footer-link" href="https://github.com/TidalSana">
          TidalSana
        </a>
        .2022
      </p>
    </footer>
  );
};

export default Footer;
