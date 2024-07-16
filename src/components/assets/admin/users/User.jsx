
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import A_navigation from "../A_navigation";


import "../a_style.css";

const  User = () =>
{

    let navigate = useNavigate();

  const [user, setUser] = useState({
    f_name: "",
    l_name: "",
    mob_no: "",
    address: "",
    emailId:"",
    password:""

  });

  const { f_name,l_name,mob_no,address,emailID ,pswd} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user/add", user);
    navigate("/");
  };
    return (
      <div className="Contain">
      <A_navigation/>
      
      <div className="row">
          <div className="demo">
            <h2 className="text-center m-4">Add User</h2>
  
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  First Name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your name"
                  name="f_name"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Username" className="form-label">
                  Last Name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your username"
                  name="l_name"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  Mobile no
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your e-mail address"
                  name="mob_no"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Address
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your name"
                  name="address"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  EmailId
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your name"
                  name="emailId"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Password
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your name"
                  name="pswd"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
  </div>
      </div>
    );

}   
export default User;