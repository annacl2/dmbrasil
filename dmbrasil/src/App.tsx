import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar navButtons = 'HOME'/>
      <NavBar navButtons = 'ABOUT US'/>
      <NavBar navButtons = 'PRODUCTS'/>
      <NavBar navButtons = 'LOGIN'/>
    </div>
  );
}

export default App;
