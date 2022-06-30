import React  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Authenticate from './Components/Authenticate';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Authenticate/>
    <App/>
  </>
);


