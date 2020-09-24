import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactsList from './components/ContactsList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ariels Address book</h1>
       <ContactsList />
      </header>
    </div>
  );
}

export default App;
