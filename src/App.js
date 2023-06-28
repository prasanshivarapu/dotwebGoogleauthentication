import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./components/file";
import Fill from "./components/file3";
import Registration from "./components/file4";
import "./App.css";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/fill" element={<Fill />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  </Router>
);

export default App;
