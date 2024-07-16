import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditAirport() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [airport, setAirport] = useState({
    airport_code: "",
    airport_name: "",
    location: "",
  });

  const { airport_code, airport_name, location } = airport;

  const onInputChange = (e) => {
    setAirport({ ...airport, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadAirport();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/airports/${airport_code}`, airport);
    navigate("/");
  };

  const loadAirport = async () => {
    const result = await axios.get(`http://localhost:8080/airports/${airport_code}`);
    setAirport(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit airport</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Airport Code
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="airport_code"
                value={airport_code}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="airport_name" className="form-label">
                Airport Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your airportname"
                name="airport_name"
                value={airport_name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Location
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="location"
                value={location}
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