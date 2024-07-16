import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {useParams} from 'react-router-dom';
import Home from "./components/assets/user/Home";
import About from "./components/assets/user/About";
import Contact from "./components/assets/user/Contact";
import Checkout from "./components/assets/user/Checkout";
import Registration from "./components/assets/user/Registration/Registration";
import Login from "./components/assets/user/Login";
import Search from "./components/assets/user/Search";
import A_navigation from "./components/assets/admin/A_navigation";
import Dashboard from "./components/assets/admin/Dashboard";
import User from "./components/assets/admin/users/User";
import UserDetails from "./components/assets/admin/users/UserDetails";
import RegistrationDetails from "./components/assets/admin/RegistrationDetails";
import Airlines from "./components/assets/admin/airline/Airlines";
import AirlineDetails from "./components/assets/admin/airline/AirlineDetails";
import AirportDetails from "./components/assets/admin/airports/AirportDetails";
import Flight from "./components/assets/admin/flights/Flight"
import FlightDetails from "./components/assets/admin/flights/FlightDetails";
import ReservationDetails from "./components/assets/admin/ReservationDetails";
import AddAirport from "./components/assets/admin/airports/addAirport";

import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element={< Home/>}></Route>      
          <Route path = "/About" element={< About/>}></Route>
          <Route path = "/Search" element={< Search/>}></Route>
          <Route path = "/Contact" element={< Contact/>}></Route>
          <Route path = "/Checkout" element={< Checkout/>}></Route>
          <Route path = "/Login" element={< Login/>}></Route>
          <Route path = "/Registration" element={< Registration/>}></Route>
      


          {/* /************************Admin************************ */}
          <Route path = "/Dashboard" element={< Dashboard/>}></Route>
          <Route path = "Dashboard/User" element={< User/>}></Route>
          <Route path = "Dashboard/UserDetails" element={< UserDetails/>}></Route>
          <Route path = "Dashboard/Airlines" element={< Airlines/>}></Route>
          <Route path = "Dashboard/AirlineDetails" element={< AirlineDetails/>}></Route>
          <Route path = "Dashboard/RegistrationDetails" element={< RegistrationDetails/>}></Route>
          <Route path = "Dashboard/AddAirport" element={< AddAirport/>}></Route>
          <Route path = "Dashboard/editAirport" element={< editAirport/>}></Route>
          <Route path = "Dashboard/AirportDetails" element={< AirportDetails/>}></Route>
          <Route path = "Dashboard/Flight" element={< Flight/>}></Route>
          <Route path = "Dashboard/FlightDetails" element={< FlightDetails/>}></Route>
         
          
          <Route exact path="/Checkout/:f_id" element={<Checkout />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
