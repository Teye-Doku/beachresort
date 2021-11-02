import './Accomodation.css';
import interior from '../../images/interior.jpg';

const Accomodation = () => {
     return(
         <div className="accommodation">
             <div className="accommodation__showcase">
                 <h3>KINDLY MAKE A BOOKING BEFORE VISITING US. WE DO NOT ACCEPT WALK-INS.</h3>
             </div>
             <div className="accommodation__item">
                  <img  src={interior} alt=""/>
                  <div>
                  <h3>Standard Oceanfront Chalet</h3>
                  <p>GHC 700.00 /weekday night</p>
                  <p>GHC 900.00/holiday night</p>
                  <ul>
                      <li>A queen-sized bed, air- condition, TV and mini fridge.</li>
                      <li>Spacious terrace with direct views of the Atlantic Ocean.</li>
                      <li>Complimentary breakfast for up to two Guests.</li>
                  </ul>
                  </div>
             </div>
             <div className="accommodation__item">
                  <img  src={interior} alt=""/>
                  <div>
                  <h3>Standard Oceanfront Chalet</h3>
                  <p>GHC 700.00 /weekday night</p>
                  <p>GHC 900.00/holiday night</p>
                  <ul>
                      <li>A queen-sized bed, air- condition, TV and mini fridge.</li>
                      <li>Spacious terrace with direct views of the Atlantic Ocean.</li>
                      <li>Complimentary breakfast for up to two Guests.</li>
                  </ul>
                  </div>
             </div>
             <div className="accommodation__item">
                  <img  src={interior} alt=""/>
                  <div>
                  <h3>Standard Oceanfront Chalet</h3>
                  <p>GHC 700.00 /weekday night</p>
                  <p>GHC 900.00/holiday night</p>
                  <ul>
                      <li>A queen-sized bed, air- condition, TV and mini fridge.</li>
                      <li>Spacious terrace with direct views of the Atlantic Ocean.</li>
                      <li>Complimentary breakfast for up to two Guests.</li>
                  </ul>
                  </div>
             </div>
         </div>
     );
};

export default Accomodation;