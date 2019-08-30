import React from 'react';

import './App.css';
import Logo from './components/Logo/Logo';
import Stamp from './components/Stamp/Stamp';
import Instagram from './components/Icons/Instagram/Instagram';
import Facebook from './components/Icons/Facebook/Facebook';
import Twitter from './components/Icons/Twitter/Twitter';

function App() {

  return (
    
    <div className="App">
      
      <header className="App-header">
 
        <div><Stamp/></div>
        <p>
          <Logo/>
        </p>   
      </header>
      <div className="container">
        <Instagram/><Facebook/><Twitter/>
        </div>
    </div>

  );
}

export default App;
