import Weather from "../Weather/Weather";
import kg from "../../assets/kg.png";
import angular from "../../assets/angular.png";
import react from "../../assets/react.png";
import vue from "../../assets/vue.png";

import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="headerRight">
        <div className="circle"></div>
      </div>
      <div className="rotatingObjects">
      <img className="vue"src= {vue}></img>
      <img className="angular"src= {angular}></img>
      <img className="react"src= {react}></img>
      <img className="angular"src= {angular}></img>
      </div>
      <img className="kerim" src={kg}></img>
      <div className="headerLeft">
        <div className="webDeveloper"> Web-Developer </div>
        <div className=".text-pop-up-top">
          <h1 className="myName"> &lt;&gt; Kerim Gökceoglu &lt;/&gt; </h1>
          <p className="welcome">Herzlich Willkommen</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
