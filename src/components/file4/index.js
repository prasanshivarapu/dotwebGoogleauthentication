import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Registration = () => {
  console.log(Cookies.get("token"));
  const [name, Name1] = useState("");
  const [email, Email1] = useState("");
  const [retypeEmail, RetypeEmail] = useState("");
  const [password, Password] = useState("");
  const [retypePassword, RetypePassword] = useState("");
  const [error, error1] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (Cookies.get("token") !== undefined) {
      navigate("/fill");
    }
  });

  const Name = (event) => {
    Name1(event.target.value);
  };

  const Email = (event) => {
    Email1(event.target.value);
  };

  const RetypeEmailC = (event) => {
    RetypeEmail(event.target.value);
  };

  const PasswordC = (event) => {
    Password(event.target.value);
  };

  const RetypePasswordC = (event) => {
    RetypePassword(event.target.value);
  };

  const Submit = (event) => {
    event.preventDefault();
    if (retypePassword === password && retypeEmail === email && name !== "") {
      alert("Sucessfully Registered");
      Name1("");
      Email1("");
      RetypeEmail("");
      Password("");
      RetypePassword("");
    } else {
      error1(true);
    }
  };
  const e = error ? "please provide correct details" : "";
  return (
    <div className="re">
      <h1>Registration Form</h1>

      <form onSubmit={Submit}>
        <div className="re1">
          <label htmlFor="name">Name:</label>
          <input
            className="relinput"
            type="text"
            id="name"
            value={name}
            onChange={Name}
          />
        </div>
        <div className="re1">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="relinput"
            id="email"
            value={email}
            onChange={Email}
          />
        </div>

        <div className="re1">
          <label htmlFor="retypeEmail">Retype Email:</label>
          <input
            type="email"
            className="relinput"
            id="retypeEmail"
            value={retypeEmail}
            onChange={RetypeEmailC}
          />
        </div>

        <div className="re1">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="relinput"
            id="password"
            value={password}
            onChange={PasswordC}
          />
        </div>

        <div className="re1">
          <label htmlFor="retypePassword">Retype Password:</label>
          <input
            type="password"
            className="relinput"
            id="retypePassword"
            value={retypePassword}
            onChange={RetypePasswordC}
          />
        </div>
        <p className="err">{e}</p>
        <button className="regbtn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
