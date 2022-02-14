
import { Navbar, Header, Body, Weather, Portfolio,ContactForm, Footer } from "./components";
import ScrollTop from "react-scrolltop-button";

import './App.css';

function App() {
  return (
    <div className="App">
    <div className="tracking-in-expand">
      <div className="grad">
        <Weather></Weather>
        <Navbar></Navbar>
        <Header></Header>
        <Body></Body>
        <Portfolio></Portfolio>
        <ContactForm></ContactForm>
        <Footer></Footer>
        <ScrollTop />


        </div>
      </div>
      
    </div>
  );
}

export default App;
