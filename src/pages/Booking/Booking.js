import './Booking.css';


const Booking = () => {
     return(
         <div className="booking" >
              <h2>Book Now</h2>
              <div className="booking__content">
                    <div className="booking__description">
                    <p>If your dates are at all flexible, please let us know. 
                        We book up quickly due to our limited rooms,
                         especially on holidays, but would love to find a way to host you.</p>
                         <h3>NO BOOKING = NO ENTRY</h3>
                         <h3>PLEASE READ OUR COVID 19 SAFETY 
                             PROTOCOLS CAREFULLY BEFORE MAKING A BOOKING.</h3>
                    </div>
              </div>
              <div className="booking__content">
                    
               <div className="booking__content__firstform">
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
                 <p>Phone*</p>
                 <input type="text" />
              </div>
             <div className="email__form__date">
                 <p>Date of arrival*</p>
                 <input type="date" />
              </div>
             <div className="email__form__date">
                 <p>Date of departure*</p>
                 <input type="date" />
              </div>

              <div className="email__form">
                 <p>Number Adults*</p>
                 <select>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                     <option value="6">6</option>
                     <option value="7">7</option>
                     <option value="8">8</option>
                     <option value="9">9</option>
                     <option value="10">10</option>
                 </select>
              </div>
              <div className="email__form">
                 <p>Number Kids*</p>
                 <select>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                     <option value="6">6</option>
                     <option value="7">7</option>
                     <option value="8">8</option>
                     <option value="9">9</option>
                     <option value="10">10</option>
                 </select>
              </div>
             
             <div className="email__form">
                 <p>Special request</p>
                 <textarea type="text" rows="4"> </textarea>
              </div>
             <div className="email__form">
                <button>Submit</button>
             </div>
              
         </div>
     )
}

export default Booking;
