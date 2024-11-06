import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import Signin from './components/Signin/Signin';
import NotFound from './components/Notfound/NotFound';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="bg-container">
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
