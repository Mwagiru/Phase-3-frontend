import './App.css';
import React,{ useState } from 'react';
import Home from "./Components/Home"
import Input from './Components/Input';

const App = () => {
 
  return (
 
    <div>
      {<Home/>}
      {<Input/>}
    </div>
  );
}

export default App;
