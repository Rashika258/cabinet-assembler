import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import {
  AssemblyScreen,
  CabinetHomePage,
  PartsSelection,
  ResultScreen,
} from './components';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CabinetHomePage />} />
        <Route path='/parts-selection' element={<PartsSelection />} />
        <Route path='/assembly' element={<AssemblyScreen />} />
        <Route path='/final-product' element={<ResultScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
