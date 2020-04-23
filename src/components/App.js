import React from 'react';
import '../styles/App.scss';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div className="App">
      <Display result="0" />
      <ButtonPanel />
    </div>
  );
}

export default App;
