// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MapComponent from './components/MapComponent';
import PersonalPage from './components/PersonalPage';
import Login from './components/login';
import Register from './components/register';

const App = () => {
  return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/map" element={<MapComponent />} />
            <Route path='/about' element={<PersonalPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
