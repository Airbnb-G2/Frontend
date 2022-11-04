import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import AppRouter from './router/AppRouter';
import ThemeProvider from './theme';

const App = () => (
  <ThemeProvider>
    <AppRouter />
  </ThemeProvider>
);

export default App;
