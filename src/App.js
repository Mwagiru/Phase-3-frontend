import './App.css';
import React,{ useState } from 'react';
import Form from './Components/Form';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

const App = () => {
 
  return (

     
      <div className="App">
          <Form/>
      </div>
  
  );
}

export default App;
