import React, { useEffect } from "react";
import Cookies from "js-cookie";
import WelcomePage from "../file2";
import SignupForm from "../file1";
import { useNavigate } from "react-router-dom";
import "./index.css";

const MainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(Cookies.get("token"));

    if (Cookies.get("token") !== undefined) {
      navigate("/fill");
    }
  });

  return (
    <div className="app">
      <WelcomePage />
      <SignupForm />
    </div>
  );
};

export default MainPage;
