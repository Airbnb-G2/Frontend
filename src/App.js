import React from 'react';
import './App.css';
import AppRouter from './router/AppRouter';
import ThemeProvider from './theme';

const App = () => (
  <ThemeProvider>
    <div className="App">
      <header className="App-header">
        <span>Airbnb - Grupo 2 - Admin I</span>
      </header>
    </div>
    <AppRouter />
  </ThemeProvider>
);

export default App;
