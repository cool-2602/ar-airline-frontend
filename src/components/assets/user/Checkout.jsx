import axios from "axios";
import React, { useEffect,  useState } from "react";
import {Link, useParams,useNavigate} from 'react-router-dom';
import Navigation from "./Navigation";

const Checkout = () =>
{     
  let navigate = useNavigate();
    const [flights, setflights] = useState({
        f_id:"",
        date: "",
        d_time: "",
        a_time: "",
        origin: "",
        destination:"",
        });
      
        const { f_id } = useParams();
      
        useEffect(() => {
          loadflights();
        }, []);
      
        const loadflights = async () => {
          const result = await axios.get(`http://localhost:8080/flights/${f_id}`);
          setflights(result.data);
        };

        const [reservation, setReservation] = useState({
          name:"",
          age:"",
          address:"",
          email:"",
          contact:"",
          amount:"",
        })

        const { name, age,address,email,contact,amount} = reservation;

        const onInputChange = (e) => {
          setReservation({ ...reservation, [e.target.name]: e.target.value });
        };
      
        const onSubmit = async (e) => {
          e.preventDefault();
          await axios.post("http://localhost:8080/reserv/add", reservation);
          navigate("/");
        };

  return (
    <div className="">
    <Navigation/>
      <div className="">
        <div className="col-md-5 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Checkout</h2>

          <div className="card">
            <div className="card-header">
              {/* Checkout : {flights.f_id} */}
              {/* <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Date:</b>
                  {flights.date}
                </li>
                <li className="list-group-item">
                  <b>Departure Time:</b>
                  {flights.d_time}
                </li>
                <li className="list-group-item">
                  <b>Arival Time:</b>
                  {flights.a_time}
                </li>
                <li className="list-group-item">
                  <b>Origin:</b>
                  {flights.origin}
                </li>
                <li className="list-group-item">
                  <b>Destination:</b>
                  {flights.destination}
                </li>
              </ul> */}
              <div className="input-box">Date:  {flights.date}</div><br/>
              <div className="input-box">Arrival Time:  {flights.a_time}</div><br/>
              <div className="input-box">Departure Time  {flights.d_time}</div><br/>
              <div className="input-box">Origin: {flights.origin}</div><br/>
              <div className="input-box">Destination: {flights.destination}</div><br/>
              <div className="input-box">
                Name: <input type="text" placeholder="Name" name="name" 
                  onChange={(e) => onInputChange(e)}  required/>
            </div>
           
            <div className="input-box">
                Age: <input type="text" placeholder="Age" name="age" 
                  onChange={(e) => onInputChange(e)}  required/>
            </div>
            <div className="input-box">
                Address: <input type="text" placeholder="Address" name="address"
                  onChange={(e) => onInputChange(e)} required/>
            </div>
            <div className="input-box">
                Email Id.: <input type="text" placeholder="Email Id" name="email"
                  onChange={(e) => onInputChange(e)} required/>
            </div>
            <div className="input-box">
                Contact No.: <input type="text" placeholder="Conatct no" name="contact"
                  onChange={(e) => onInputChange(e)} required/>
            </div>
            {/* <div className="input-box">
                Flight Fare: <input type="text" placeholder="Fare" name="amount"
                  onChange={(e) => onInputChange(e)}  required/>
            </div> */}
            <div className="input-box">
                Total Amount: <input type="text" placeholder="Total Amount" name="amount"
                  onChange={(e) => onInputChange(e)} required/>
            </div>
            <div className="input-box">
               Payment Mode: 
                <select id="payment_mode" name="payment_mode" placeholder = "select"  required>
                    <option value="credit_card" >Credit Card</option>
                    <option value="debit_card">Debit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="net_banking">Net Banking</option>
                </select>
            </div>
            <button className="reg_btn" type="submit">Checkout</button>
        </div>
        </div>
        </div>
        </div>
        <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
    );
}
export default Checkout;