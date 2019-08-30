import React from 'react';

import './App.css';
import Logo from './components/Logo/Logo';
import Stamp from './components/Stamp/Stamp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        
        <div><Stamp/></div>
        <p>
          <Logo/>
        </p>
        
        
      </header>
    </div>
  );
}

export default App;
