import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Targetting from './components/Targetting/Targetting';

function App() {

  return (
     <BrowserRouter>
    <div className="App">
      <header className="App-header">
       
       
        <Routes>
          <Route path="/" element ={<Login />} />
          <Route path="/targetting" element ={<Targetting />} />
        </Routes>
     
      
          
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
