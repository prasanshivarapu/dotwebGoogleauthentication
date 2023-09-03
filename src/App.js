import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./components/file";
import Fill from "./components/file3";
import Registration from "./components/file4";
import "./App.css";
import Passwordtext from "./components/file7";




const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/fill" element={<Passwordtext />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  </Router>
);

export default App;
