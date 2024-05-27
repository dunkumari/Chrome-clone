import React from 'react';
import Navbar from './pages/Navbar';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FastPage from './pages/Fast';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
         
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
