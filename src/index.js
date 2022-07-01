import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import Enter from './Components/Enter';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div>
        <Route exact path="/" component={Enter} />
        <Route exact path="/login" component={Enter} />
        <Route exact path="/home" component={App} />
      </div>
    </Router>
  </React.StrictMode>
);


