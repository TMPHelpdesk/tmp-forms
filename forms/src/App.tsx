import React from 'react';
import './App.css';
import AppInterface from './interface/AppInterface';
import Header from './interface/Header/Header';
import InfoPane from './interface/InfoPane/InfoPane';

function App() {
  return (
    <>
      <Header />
      <AppInterface />
      <InfoPane />
    </>
  );
}

export default App;
