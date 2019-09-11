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
  <Navbar.Brand href="#home" >
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">

     
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav> <Nav.Link href="https://antonio-cedeno-events.ticketleap.com/male-room/" rel="noopener noreferrer" target="_blank"  ><img src={Ticket} alt='' id="ticket"></img></Nav.Link>
    <Nav.Link>
      <Facebook></Facebook></Nav.Link>
      <Nav.Link><Twitter></Twitter></Nav.Link>
      <Nav.Link><Instagram/></Nav.Link>
   
  </Navbar.Collapse>
</Navbar>

      <header className="App-header">
     
      <Row>
        <div><Logo/></div>
        <hr/>
        </Row>
        
       <br></br>
        {/* <Row>
  
  <Col>
  <Card>
   <Statement/>
   </Card>
   </Col>
   <br/>
   </Row> */}
   
    </header> 
<Container id="Player">
  <VideoPlayer/>
  </Container>
  <Container className="Info">
         <Row>
           <Col>
         <div className="card">
         <StatementTwo/>
        </div>
      </Col>
      <Col>
      
          <Flyer/>
    
         
        </Col>  
</Row>

</Container>
<Container  className="Info">
        <Row>
          <Col >
        
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
        <Col>
        <MapContainer/> 
         </Col>
        </Row>
</Container>

 

         <Row className="Info">
           <Container>
            <LFlyer/>
            </Container>
          </Row>
         
       
      <Navbar bg="dark" sticky="bottom"></Navbar>

    </div>

  );
}


export default App;
