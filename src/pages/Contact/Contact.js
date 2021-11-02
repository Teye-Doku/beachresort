import './Contact.css';


const Contact = () => {
     return(
         <div className="contact" style={{height:"1200px"}}>
              <h2>Contact Us</h2>
              <div className="contact__content">
                    <div className="contact__description">
                    <p>Questions? Suggestion? Special request? Get in contact through the form below and we’ll reply as soon as we can.</p>
                    <p>Kindly note that our phone line (0206042265) is  operational from 8am to 8pm only. </p>
                    </div>
              </div>
              <div className="contact__content">
                    
               <div className="contact__content__firstform">
                   <p>Name*</p>
                   <div className="firstform__container">
                   <div className="firstform__container__item">
                       <input type="text"  />
                       <p>First Name </p>
                   </div>
                   <div className="firstform__container__item">
                       <input type="text"  />
                       <p>Last Name </p>
                   </div>
                   </div>
              </div>    
             
                    
              </div>
             
             <div className="email__form">
                 <p>Email*</p>
                 <input type="text" />
              </div>
             <div className="email__form">
                 <p>Subject*</p>
                 <input type="text" />
              </div>
             <div className="email__form">
                 <p>Message*</p>
                 <textarea type="text" rows="4"> </textarea>
              </div>
             <div className="email__form">
                <button>Submit</button>
             </div>
              
         </div>
     )
}

export default Contact;
