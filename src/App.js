import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AssemblyScreen,
  CabinetDescription,
  PartsSelection,
  ResultScreen,
} from "./components";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PartsSelection />} />
        <Route path="/parts-selection" element={<PartsSelection />} />
        <Route path="/assembly" element={<AssemblyScreen />} />
        <Route path="/final-product" element={<ResultScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
