import React from 'react';
import logo from './logo.svg';
import './App.css';

import Usuario from './components/Login';
import Criar from './components/Criarconta';

function App() {
  return (
    <div className="App">
      <Criar/>
      <Usuario/>
    </div>
  );
}

export default App;
