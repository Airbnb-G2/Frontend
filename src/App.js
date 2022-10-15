import React from 'react';
import './App.css';
import AppRouter from './Router/AppRouter';

const App = () => (
  <div className="App">
    <header className="App-header">
      <span>Airbnb - Grupo 2 - Admin I</span>
      <AppRouter />
    </header>
  </div>
);

export default App;
