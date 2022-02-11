import "./Navbar.css";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navar__links"></div>
        <div className="navbar__logo">
          <img src={logo} alt="logo"></img>
        </div>
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
      </div>
    </div>
  );
};

export default Navbar;
