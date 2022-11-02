import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { AuthContextProvider } from './context/Auth';
import AppRouter from './router/AppRouter';
import ThemeProvider from './theme';

const App = () => (
  <ThemeProvider>
    <AuthContextProvider>
      <Header />
      <AppRouter />
    </AuthContextProvider>
  </ThemeProvider>
);

export default App;
