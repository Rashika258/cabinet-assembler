import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { AssemblyScreen, CabinetDescription, PartsSelection, ResultScreen } from './components';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';


const App = () => {
  return (
    // <DndProvider backend={HTML5Backend}>
    <Router>

  
      <Routes>
        <Route path="/"  element={<AssemblyScreen/>} />
        <Route path="/parts-selection" element={<PartsSelection/>} />
        <Route path="/assembly" element={<AssemblyScreen/>} />
        <Route path="/final-product" element={<ResultScreen/>} />
      </Routes>
   

  </Router>
  // </DndProvider>
  );
}

export default App;
