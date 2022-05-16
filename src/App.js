import React, {useState} from 'react';
import './App.css';
import Calculator from './Calculator';
import Footer from './Footer';

function App() {
   return (
    <div className="App">
      <header className="App-header">
        <h1>My Calculator App</h1>
        <p> This is a little project calculator project that I made.  I hope you enjoy it! </p>
        <Calculator />
      </header>
      <Footer />
    </div>
  );
}

export default App;
