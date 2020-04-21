import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  const  calc = (a,b)=>{
    return a==b
  }
  return (
    <div className="App">
      <Display result="0"/>
      <ButtonPanel/>
    </div>
  );
}

export default App;
