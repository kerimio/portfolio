
import Weather from '../Weather/Weather';
import './Header.css'
const Header = () => {
 

  return (
    <div>
<div className="headerRight">        <Weather></Weather></div> 

        <div className="headerLeft">
        <div className=".text-pop-up-top">
        <h1 className="myName"> &lt;&gt; Kerim Gökceoglu &lt;/&gt; </h1>
        <p className="welcome">Herzlich Willkommen</p>
        </div>
      </div>
    </div>
  )
}

export default Header;