
import {
    MDBFooter,
    MDBIcon,

  } from 'mdb-react-ui-kit';
import './Footer.css'

const Footer = () => {
    return (
        <MDBFooter className='text-center text-white' style={{ backgroundColor: '#21081a' }}>
        <div className='container p-4'></div>
  
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2021 Copyright:
          <a className='text-white' href='https://mdbootstrap.com/'>
            kego.dev
          </a>
        </div>
      </MDBFooter>
 
  );
            
         
      
}

export default Footer;