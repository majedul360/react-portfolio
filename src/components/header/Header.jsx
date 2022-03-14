import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./header.scss";

const Header = ({ openMenu, setOpenMenu }) => {
  return (
    <div className={`header ${openMenu && "active"}`}>
      <a href="" className="logo">
        genius.
      </a>
      <div className="contact">
        <a href="">
          <FontAwesomeIcon className="icon" icon={faUser} />
          01317-999607
          <span></span>
        </a>
        <a href="">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
          <span>majedul@gmail.com</span>
        </a>
      </div>
      <div className="hamburger" onClick={() => setOpenMenu(!openMenu)}>
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>
    </div>
  );
};

export default Header;
