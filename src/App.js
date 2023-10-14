import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AssemblyScreen,
  CabinetHomePage,
  PartsSelection,
  ResultScreen,
} from "./components";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CabinetHomePage />} />
        <Route path="/parts-selection" element={<PartsSelection />} />
        <Route path="/assembly" element={<AssemblyScreen />} />
        <Route path="/final-product" element={<ResultScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
