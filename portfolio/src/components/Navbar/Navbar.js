import "./Navbar.css";


const scrollToTestDiv = (page) => {
  const divElement = document.getElementById(page);
  divElement.scrollIntoView({ behavior: 'smooth' });
}


const Navbar = () => {
  return (
    <div className="wrapper">
      <div className="navbar">
        <div className="navar__links"></div>
        <div className="navbar__logo"></div>
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
