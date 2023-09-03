import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import './index.css'

const Passwordlist = props => {
  const {happy, todo, run} = props
  const a = '*'
  const {name, pass, word, id} = happy
  const btn = () => {
    todo(id)
  }
     const navigate = useNavigate(); 
  useEffect(() => {

    if (Cookies.get("token") === undefined) {
      navigate("/fill");
    }
  });
  const pep = run ? word : a.repeat(word.length)
  return (
    <div className="treet11">
      <div>
        <h1 className="first">{name[0]}</h1>
      </div>
      <div className="inside white">
        <li>{name}</li>
        <li>{pass}</li>
        {pep}
      </div>

      <button type="button" onClick={btn} className="delete">
        <img
          className="delete1"
          alt="avatar"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        />
      </button>
    </div>
  )
}
export default Passwordlist
