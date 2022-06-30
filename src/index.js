import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Authenticate from './Components/Authenticate';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <div className="container-fluid movie-app">
        <Routes>
          <Route path="/login" element={<Authenticate />} />
          <Route path="/" element={<App/>} />
          <Route path="/home" element={<App />} />
        </Routes>
      </div>
    </Router>
  </>
);


