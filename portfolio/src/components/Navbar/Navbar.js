import "./Navbar.css";
import logo_black from './../../assets/logo_black.png';


const scrollToTestDiv = (page) => {
  const divElement = document.getElementById(page);
  divElement.scrollIntoView({ behavior: 'smooth' });
}


const Navbar = () => {
  return (
    <div className="wrapper">
      <div className="navbar">
        <div className="navar__links"></div>
        <div className="navbar__logo">
          <img src={logo_black} alt="logo"></img>
        </div>
        <div className="navbar__links">
          <p>
            <a onClick={()=> scrollToTestDiv('#')}> HOME </a>
          </p>
          <p>
            <a onClick={()=> scrollToTestDiv('about')}> ÜBER MICH </a>
          </p>
          <p>
            <a onClick={()=> scrollToTestDiv('portfolio')}> PROJEKTE </a>
          </p>
          <p>
            <a onClick={()=> scrollToTestDiv('contact')}> KONTAKT </a>
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
