import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import ReCAPTCHA from "react-google-recaptcha";
import GoogleAuth from "../file5";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Fill from "../file3";
import "./index.css";

const SignupForm = () => {
  const [profile, setProfile] = useState(null);
  const [captchaValue, setCaptchaValue] = useState("");
  const [btn, setBtn] = useState(false);
  const [input1, setInput1] = useState("");
  const [password1, setPassword1] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const eyeB = () => {
    setBtn((prevBtn) => !prevBtn);
  };
  const handleRecaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const inputText = (event) => {
    setInput1(event.target.value);
  };

  const passwordText = (event) => {
    setPassword1(event.target.value);
  };

  const register = () => {
    navigate("/registration");
  };

  const loginTo = (event) => {
    event.preventDefault();

    if (input1 === "prasan" && password1 === "prasan" && captchaValue !== "") {
      Cookies.set("token", 1234, { expires: 30 });
      console.log(Cookies.get("token") === undefined);
      setError("");
      navigate("/fill");
    } else {
      if (input1 !== "prasan" || password1 !== "prasan") {
        setError("Username and password not matched");
      } else if (captchaValue === "") {
        setError("Please verify the captcha");
      } else {
        setError("");
      }
    }
  };
  useEffect(() => {
    if (Cookies.get("token") !== undefined) {
      navigate("/fill");
    }
  }, []);

  const bt = btn ? <AiOutlineEye /> : <AiOutlineEyeInvisible />;

  // const E = error ? "Username and password not matched" : "verify captcha";

  return (
    <div className="main">
      <h1 className="in">LOGIN</h1>
      <p className="in1">Easily Using</p>
      <GoogleAuth />
      <p className="in2">OR Using Account Details</p>
      <form onSubmit={loginTo} className="main1">
        <input
          value={input1}
          className="input"
          onChange={inputText}
          type="text"
          placeholder="Your Username"
        />
        <div className="pass">
          <input
            value={password1}
            className="input5"
            onChange={passwordText}
            type={btn ? "text" : "password"}
            placeholder="Enter Password"
          />
          <button className="button5" onClick={eyeB} type="button">
            {bt}
          </button>
        </div>
        <div className="box">
          <div className="check">
            <input type="checkbox" />
            <p className="rem">Remember</p>
          </div>
          <p className="for">Forgot Password?</p>
        </div>
        <p className="e">{error}</p>

        <ReCAPTCHA
          className="cap"
          sitekey="6Ld4QtsmAAAAAARPzLjNGUBa9baKcVsLp-U4WLmu"
          onChange={handleRecaptchaChange}
        />

        <button className="button1" type="submit">
          Login
        </button>
      </form>
      <p>New to RentalApp?</p>
      <button className="button2" type="button" onClick={register}>
        Register
      </button>
    </div>
  );
};

export default SignupForm;
