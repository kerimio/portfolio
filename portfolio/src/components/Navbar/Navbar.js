import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import xing from "../../assets/xing.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
const Navbar = () => {
  return (
    <div className="wrapper">
      <div className="navbar">
        <div className="navar__links"></div>
        <div className="navbar__logo"></div>
        <div className="navbar__links">
          <p>
            <a> HOME </a>
          </p>
          <p>
            <a> ÜBER MICH </a>
          </p>
          <p>
            <a> PROJEKTE </a>
          </p>
          <p>
            <a> KONTAKT </a>
          </p>
        </div>
        <div className="navbar__right">
          <div className="socials">
            <a href="https://github.com/kerimio/portfolio">
              <img src={github} alt="logo"></img>
            </a>
            <a href="https://github.com/kerimio/portfolio">
              <img src={xing} alt="logo"></img>
            </a>
            <a href="https://github.com/kerimio/portfolio">
              <img src={linkedin} alt="logo"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
