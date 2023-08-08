import React, { useState, useEffect } from "react";
import GoogleAuth from "../file5";
import Cookies from "js-cookie";

import { useNavigate } from "react-router-dom";

import "./index.css";

const Fill = () => {
  const [firstName, FirstName] = useState("");
  const [imageURL, setImageURL] = useState("");

  const [middleName, MiddleName] = useState("");
  const [lastName, LastName] = useState("");
  const [ssn, Ssn] = useState("");
  const [mobileNo, MobileNo] = useState("");
  const [email, Email] = useState("");
  const [gender, Gender] = useState("");
  const [dob, Dob] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(
    Cookies.get("token") !== undefined
  );
  const [address, Address] = useState("");
  const [townCity, TownCity] = useState("");
  const [regionState, RegionState] = useState("");
  const [zipCode, ZipCode] = useState("");
  const navigate = useNavigate();

  console.log(Cookies.get("token"));
  const Submit = (event) => {
    event.preventDefault();

    // Perform form submission logic here
  };

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("Token");
    setIsAuthenticated(false);
    navigate("/");
  };

  const Gendercha = (event) => {
    Gender(event.target.value);
  };

  function handleFileChange(event) {
    const selectedFile = event.target.files[0];
    const fileURL = URL.createObjectURL(selectedFile);
    setImageURL(fileURL);
  }

  return (
    <div className="dea">
      <form onSubmit={Submit} className="form">
        <div className="Emp">
          <h1 className="add">Add Employee</h1>
        </div>
        <div className="logo">
          <label htmlFor="logo">Attach Logo</label>
          <div className="file">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              id="logo"
              className="file1"
            />
            {imageURL && <p>Image URL: {imageURL}</p>}
          </div>
        </div>

        <div className="firstname">
          <div className="clm">
            <label>First Name</label>
            <input
              className="inputevent"
              type="text"
              value={firstName}
              onChange={(e) => FirstName(e.target.value)}
            />
          </div>
          <div className="clm">
            <label>Middle Name</label>
            <input
              className="inputevent"
              type="text"
              value={middleName}
              onChange={(e) => MiddleName(e.target.value)}
            />
          </div>
          <div className="clm">
            <label>Last Name</label>
            <input
              className="inputevent"
              type="text"
              value={lastName}
              onChange={(e) => LastName(e.target.value)}
            />
          </div>
        </div>

        <div className="firstname">
          <div className="clm">
            <label>SSN (Ex: ###-##-####)</label>
            <input
              className="inputevent"
              type="text"
              value={ssn}
              onChange={(e) => Ssn(e.target.value)}
            />
          </div>
          <div className="clm">
            <label>Mobile No (Ex: +91##########)</label>
            <input
              type="text"
              className="inputevent"
              value={mobileNo}
              onChange={(e) => MobileNo(e.target.value)}
            />
          </div>
          <div className="clm">
            <label>Email-Id</label>
            <input
              className="inputevent"
              type="email"
              value={email}
              onChange={(e) => Email(e.target.value)}
            />
          </div>
        </div>
        <div className="firstname">
          <div className="male">
            <li className="gen">Gender</li>
            <div className="co">
              <input
                className="gender"
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={Gendercha}
              />
              <label> Male</label>
            </div>
            <div className="co">
              <input
                className="gender"
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={Gendercha}
              />
              <label> Female</label>
            </div>
          </div>

          <div className="clm">
            <label>Date of Birth (MM/DD/YYYY)</label>
            <input
              className="inputevent"
              type="Date"
              value={dob}
              onChange={(e) => Dob(e.target.value)}
            />
          </div>
          <div className="clm">
            <label>Last Name</label>
            <input
              className="inputevent"
              type="text"
              value={lastName}
              onChange={(e) => LastName(e.target.value)}
            />
          </div>
        </div>
        <div className="clm">
          <label>Address</label>
          <input
            className="ress"
            type="textarea"
            value={address}
            onChange={(e) => Address(e.target.value)}
          />
        </div>
        <div className="firstname">
          <div className="clm">
            <label>Town/City</label>
            <input
              type="text"
              className="inputevent"
              value={townCity}
              onChange={(e) => TownCity(e.target.value)}
            />
          </div>
          <div className="clm">
            <label>Region/State</label>
            <input
              type="text"
              className="inputevent"
              value={regionState}
              onChange={(e) => RegionState(e.target.value)}
            />
          </div>
          <div className="clm">
            <label>Zip Code</label>
            <input
              type="text"
              className="inputevent"
              value={zipCode}
              onChange={(e) => ZipCode(e.target.value)}
            />
          </div>
        </div>
        <div className="down">
          <button className="button" type="submit">
            Submit
          </button>
          <button className="button" onClick={logout}>
            logout
          </button>
        </div>
      </form>
    </div>
  );
};

export default Fill;
