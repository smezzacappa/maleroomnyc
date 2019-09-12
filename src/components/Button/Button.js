import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class TicketButton extends Component{
    render(){
        return(
            <a href="https://antonio-cedeno-events.ticketleap.com/male-room/" rel="noopener noreferrer"  target="_blank">
            <Button variant="dark" size="lg">
       -Tickets- 
    </Button>
    </a>
        )
    }
}
export default TicketButton;