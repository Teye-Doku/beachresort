import  * as FaIcons from "react-icons/fa";
import './Footer.css';


const  Footer = () => {
    return (
        <>
          <div className="footer">
       
              <div className="footer__item">
                  <h3 className="footer__beachname">Beach Resort</h3>
                  <FaIcons.FaFacebookF className="social__icons" />
                  <FaIcons.FaInstagram className="social__icons" />
                  
              </div>
              <div className="footer__item">
                  <p>Ghana - West Africa</p>
                  <p>Accra - Tema</p>
                  <p>Greater Accra </p>
                  <p>P.O.Box 1233 </p>
              </div>
              <div className="footer__item">
                  <p>Contact</p>
                  <p>0233338900</p>
                  <p>sakyi@st.ug.edu.gh@legon</p>
      
              </div>
            
      
          
      </div>
        </>
    )
}

export default Footer;

