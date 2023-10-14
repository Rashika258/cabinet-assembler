import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { AssemblyScreen, CabinetDescription, PartsSelection, ResultScreen } from './components';


const App = () => {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" exact component={CabinetDescription} />
        <Route path="/parts-selection" component={PartsSelection} />
        <Route path="/assembly" component={AssemblyScreen} />
        <Route path="/final-product" component={ResultScreen} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
