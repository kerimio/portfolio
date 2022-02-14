
import { Navbar, Header, Body, Portfolio,ContactForm, Footer } from "./components";


import './App.css';

function App() {
  return (
    <div className="App">
    <div className="tracking-in-expand">
      <div className="grad">
        <Navbar></Navbar>
        <Header></Header>
        <Body></Body>
        <Portfolio></Portfolio>
        <ContactForm></ContactForm>
        <Footer></Footer>
        </div>
      </div>
      
    </div>
  );
}

export default App;
