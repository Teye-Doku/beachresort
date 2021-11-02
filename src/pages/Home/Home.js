import {
 useHistory
} from 'react-router-dom';

import './Home.css';
import guest from '../../images/guest.jpg';
import rooms from '../../images/rooms.jpg';
import Room from '../../components/Room/Room';



const Home = () => {
    const history = useHistory();
     return(
         <div className="home" style={{height:"1500px"}}>
             <div className="home__showcase">
                 <h3>Are You Ready To Escape ?</h3>
                 <button onClick={()=> history.push('/booking')}>Yes!</button>
             </div>
             <div className="home__title">
                 <h3>Where every grain of sand becomes a dream fulfilled...</h3>
             </div>

             <div className="rooms">
                 <Room
                  title="Room and Rates"
                   src={guest}
                   description="Each of our 11 guest chalets are uniquely placed and feature magnificent views of the Atlantic Ocean."
                    />
                 <Room
                  title="Amenities"
                   src={rooms}
                   description="We have a 500 meter Coconut tree lined beachfront, a swimming pool and a Spa."
                    />
             </div>
         </div>
     )
}
export default Home;