import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Daytrips from './pages/Daytrips/Daytrips';
import Booking from './pages/Booking/Booking';
import Menu from './pages/Menu/Menu';
import Accomodation from './pages/Accomodation/Accomodation';
import Locovid from './pages/Locovid/Locovid';
import Gallery from './pages/Gallery/Gallery';


function App() {
  return (
    <div className="App">
       <Router>
          <Header />
          <Switch>
             <Route exact path="/gallery" component={Gallery} />
             <Route exact path="/locovid" component={Locovid} />
             <Route exact path="/accommodation" component={Accomodation} />
             <Route exact path="/menu" component={Menu} />
             <Route exact path="/booking" component={Booking} />
             <Route exact path="/daytrips" component={Daytrips} />
             <Route exact path="/about" component={About} />
             <Route exact path="/contact" component={Contact} />
             <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
       </Router>
       
    </div>
  );
}

export default App;
