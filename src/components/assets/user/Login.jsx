
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

import "./style.css";

const  Login = () =>
    {
    let navigate = useNavigate();
    const [registration, setRegistration] = useState({
    });
    
      const { f_name,l_name,mob_no,address,emailID ,pswd} = registration;
    
      const onInputChange = (e) => {
        setRegistration({ ...registration, [e.target.name]: e.target.value });
      };
    
      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/login", registration);
        navigate("/");
      };
    return(
        <div className="Container">
        <Navigation/>
        <div className="row">
          <div className="col-md-4 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Login</h2>
  
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  User Name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="username"
                  name="username"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pswd" className="form-label">
                  Password
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="password"
                  name="pswd"
                  onChange={(e) => onInputChange(e)}
                />
                 </div>
                 <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
                </form>
              </div>
              </div>
            <Footer/>
        </div>
    );
}  
export default Login;