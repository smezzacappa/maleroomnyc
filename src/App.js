import React from 'react';
import './App.css';
import Facebook from './components/Icons/Facebook/Facebook';
import Instagram from './components/Icons/Instagram/Instagram';
import Twitter from './components/Icons/Twitter/Twitter';
import Flyer from './components/Flyer/Flyer';
import Logo from './components/Logo/Logo';
import {Row, Col} from 'react-bootstrap'


function App() {

  return (
    
    <div className="App">
      
      <header className="App-header">
      <Row>
        <div><Logo/></div>
        <hr/>
        </Row>
        <Row>
        <Col md="auto">
        <div className="container">
          <Flyer/>

        </div>  
        
        </Col>
</Row>
<Row>
        <Col md="6" style={{color:"black"}}>

        <div className="card">
          <p>
          MALE ROOM is New York City's Newest Friday night throw down.</p>

         <p> On FRIDAY, NOVEMBER 1ST, DAY OF THE DEAD,
         a special event dedicated to the souls of our nightlife children at 3 Dollar Bill,
          The Berlin-inspired space. 260 Meserole Street Brooklyn, New York.

          To KICK OFF this journey we WELCOME  the return of  Dj/Producer Alexander,  
          a former resident of Splash NYC, VIVA and recently was part of the roster 
          for Masterbeat’s World Pride Tea Dance at Terminal 5.

          Antonio Cedeno Events is amped up to bring you MALE ROOM  
          a place where you can cut loose, express yourself, 
          meet with your friends and make new ones while dancing to the beat of House Music.  

          Male Room welcomes you to be confident, expressive, feel sexy,
          free your sexual inhibitions to the rhythm of the night. 
          P.S. clothing check available.
          </p>
        </div>
      </Col>
     </Row>
         <div className="container">
        <Instagram/><Facebook/><Twitter/>
        </div>
      </header>
    </div>

  );
}

export default App;
