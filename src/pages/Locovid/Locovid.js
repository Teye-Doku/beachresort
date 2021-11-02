import './Locovid.css';

const Locovid = () =>{
    return (
        <div className="locovid" style={{height:"1500px"}}>
            <div className="locovid__showcase">
                 <div className="locovid_text">
                      <h1>Location & Covid 19 Safety</h1>
                      <p>We are 80km from Accra and 70km from Cape Coast.</p>
                      <h3>STRICTLY NO BOOKING = NO ENTRY</h3>
                      <h3>NO FACE MASK = NO ENTRY</h3>
                 </div>
            </div>
            <div className="locovid__center">
                     <h3>Your Safety</h3>
                     <p>At Blue Diamond, we continue to view Covid-19 as a public health emergency and 
                         take the safety measures very seriously.  
                         Please note that refusal to follow the safety protocols 
                         will result in no entry!</p>

                     <ul>
                         <li>You will be asked to wash and sanitize your hands 
                             upon entry (including children)</li>
                          <li>No face mask no entry!</li>  
                          <li>We will check your temperature. 
                              Please note that you will be refused entry with temperature above 37C.  
                              If  you made a deposit previously you will receive a full refund.</li> 
                          <li>We will not accept large group bookings.</li>    
                          <li>No walk-ins are permitted at this time.</li>
                          <li>You are welcome to bring in your own food and drinks and use one of our many BBQ stands.
                               Kindly note that if you choose to bring in your own food, 
                               you also have to bring your own plates, cutlery and cooking utensils. 
                              We will only provide you with a grill and charcoal.</li>
                    </ul> 
                   <h4>
                   Please stay safe and remember to follow all safety protocols.
                     Kindly stay 
                    home if you feel unwell or have recently been in
                     contact with a positive person. 
                    </h4>   
                    <p>We look forward to welcoming you! </p> 
                 </div>
                 <div className="locovid__bottom">
                     <h3>Call or WhatsApp</h3>
                     <p>00233 206042265</p>
                 </div>
        </div>
    )
}

export default Locovid;
