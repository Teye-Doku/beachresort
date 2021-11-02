import './Daytrips.css';
import showcase from '../../images/resort.jpg';
const  Daytrips = () =>{
    return (
        <div className="daytrips" >
             <div className="daytrips__showcase">
                 <h3>NO BOOKING = NO ENTERING</h3>
             </div>
             <div className="daytrips__showcasepic">
                 <div><h1>DAy trips</h1></div>
                 <img src={showcase} alt=""/>
             <div className="daytrips__showcasepic__text">
                 <h2>Day Trips</h2>
                 <p>We are just 80km from Accra, making day trips just as </p>
                 <p>worthwhile! Nothing a little ocean breeze can’t cure! </p>
             </div>
             </div>

             <div className="daytrips__info">
                 <h4>Kindly make a booking before visiting us. Without a booking you will be refused entry!</h4>
                 <p>The swimming pool is currently reserved for our in-house guests only to ensure social distancing. </p>
                 <p>The entry fee for day visitors is GHC 80.00 for adults, GHC 40.00 per child (15 years and under), toddlers are free of charge. 10 % discount on weekdays.</p>
                 <p>We will only accept a limited number of day guests in order to ensure social distancing protocols so please remember to book first. </p>
                 <p>Without a booking you will be refused entry.</p>
                 <p>
You are welcome to bring in your own food and drinks and make use of one of our many BBQ stands. Kindly note that if you choose to bring in your </p>
<p>own food, you also have bring your own plates, cutlery and cooking utensils. We will only provide you with a grill and charcoal.</p>
             </div>
             <div className="daytrips__info">
                 <h3>Your Safety:</h3>
                 <ul>
                     <li> You will be asked to wash and sanitize your hands upon entry.</li>
                     <li>We will check your temperature. 
                         Please note that you will be refused entry with temperature above 37C. 
                         If you made a deposit previously you will receive a full refund.</li>
                      <li>We will not accept large group bookings.</li> 
                      <li>We have enhanced our cleaning protocols.</li>   
                 </ul>
             </div>
             <div className="daytrips__info">
                 <p>Please stay safe and remember to follow all safety protocols. Kindly stay at home if you feel unwell.</p>
             </div>
             <div className="daytrips__info">
                 <p>We look forward to welcoming you! </p>
             </div>
        </div>
    );
}

export default Daytrips;


