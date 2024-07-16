import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../a_style.css";
import A_navigation from "../A_navigation";

const AirlineDetails  = () => {
  const [airlines, setAirlines] = useState([]);

  const {air_id } = useParams();

 useEffect(() => {
    loadAirlines();
 },[]);


 const  loadAirlines = async () => {
  const result = await axios.get("http://localhost:8080/airlines");
  setAirlines(result.data);
 }



  return (
    <div className="Container">
    <A_navigation/>
      <div className="rev_intro">
      <h3>Airline Details</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Airline Name</th>
              <th scope="col">Airline Contact</th>
              <th scope="col">Region</th>
              {/* <th scope="col">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {airlines.map((airlines, index) => (
              <tr>
                <td scope="row" key={index}>
                  {index + 1}
                </td>
                <td>{airlines.a_name}</td>
                <td>{airlines.contact}</td>
                <td>{airlines.region}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AirlineDetails;