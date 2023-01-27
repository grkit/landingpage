import React from 'react';
import "./App.css"
import { Table } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
