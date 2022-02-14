import Weather from "../Weather/Weather";
import kg from "../../assets/kg.png";
import angular from "../../assets/angular.png";
import react from "../../assets/react.png";
import vue from "../../assets/vue.png";
import Console from "../Console/Console";

import "./Header.css";
const Header = () => {
  return (
    <div  className="wrapper-header">
      <div className="headerLeft">
        <div className="webDeveloper"> Web-Developer </div>
        <div className=".text-pop-up-top">
          <h1  className="myName"> &lt;&gt; Kerim Gökceoglu &lt;/&gt; </h1>
          <p className="welcome">Herzlich Willkommen</p>
          <Console></Console>
        </div>
      </div>

      <div  className="headerRight">
        <div className="test">
          <div className="circle"></div>
          <div className="rotatingObjects">
            <div className="vueWrapper">
              <img className="vue" src={vue}></img>
            </div>
            <div className="angularWrapper">
              <img className="angular" src={angular}></img>
            </div>
            <div className="reactWrapper">
              <img className="react" src={react}></img>
            </div>
          </div>
        </div>
        <img className="kerim" src={kg}></img>
      </div>
    </div>
  );
};

export default Header;
