import "./Navbar.css";

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
        
      </div>
    </div>
  );
};

export default Navbar;
