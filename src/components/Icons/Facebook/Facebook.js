import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import "./Facebook.css"
 
const Facebook = () =>{
return(
<a href="https://www.facebook.com/MaleRoomRebarChelsea/">
<FontAwesomeIcon icon={faFacebook} size="4x" style={{"color":"black"}}/>
</a>    
    )
}
 
export default Facebook;
