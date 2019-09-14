import React from 'react';
import { Card, Col, Nav, Navbar, Row, Container } from 'react-bootstrap';
import './App.css';
import TicketButton from './components/Button/Button';
import Flyer from './components/Flyer/Flyer';
import LFlyer from './components/Flyer/LongFlyer';
import Facebook from './components/Icons/Facebook/Facebook';
import Instagram from './components/Icons/Instagram/Instagram';
import Twitter from './components/Icons/Twitter/Twitter';
import Logo from './components/Logo/Logo';
import Statement from './components/Statement/Statement';
import StatementTwo from './components/Statement/Statement2';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
// import SignUp from './components/Form/Form'
// import acEvents from './images/AC.png';
import Ticket from './images/ticket.png';
import MapContainer from './components/Map/Map';


function App() {

  
   
  return (
    
    <div className="App">
     
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="Navbar">
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
   
    <Nav className="container">
    <Nav.Link href="https://antonio-cedeno-events.ticketleap.com/male-room/" rel="noopener noreferrer" target="_blank" ><img src={Ticket} alt='' id="ticket"></img></Nav.Link>
      <Nav.Link><Facebook></Facebook></Nav.Link>
      <Nav.Link><Twitter></Twitter></Nav.Link>
      <Nav.Link><Instagram/></Nav.Link>
   </Nav>
  </Navbar.Collapse>
</Navbar>

      <header className="App-header">
     
      <Row>
        <div><Logo/></div>
        <hr/>
        </Row>
        
       <br></br>
        
    </header> 

    <Row>
<Container className="Player">
 
  <VideoPlayer/>

  </Container>
  </Row>

  <Container className="Info">
         <Row className="row">

           <Col lg={6}>

         <Card>

         <StatementTwo/>

        </Card>

      </Col>

      <Col lg={6}>

          <Flyer/>

        </Col>  
</Row>

</Container>

<Container className="Info">
        <Row className="row">
          <Col lg={4}>
        
              <Card>
            <Card.Header style={{'font-size': '30px'}}>Information & Tickets</Card.Header>
               <Card.Body>
                    <Card.Title> 
                    
    
 </Card.Title>
                        <Card.Text>
      
                      </Card.Text>
                  <TicketButton/>
              </Card.Body>
          </Card>
        </Col>

        <Col className="Map">

        <MapContainer/> 

         </Col>

        </Row>

</Container>

 

         <Row className="Info">
           <Container>
            <LFlyer/>
            </Container>
          </Row>
         
       
      <Navbar bg="dark" sticky="bottom">Designed and Created by: Steven Mezzacappa</Navbar>

    </div>

  );
}


export default App;
