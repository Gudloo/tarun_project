// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Review from './components/Review';


function App() {
  return (
     <>
      <Navbar />
      <Home />
      <Menu />
      <Review />
      </>
      
  );
}

  

export default App;
