import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div className="App">
      <Display result="0"/>
      <ButtonPanel/>
    </div>
  );
}

export default App;
