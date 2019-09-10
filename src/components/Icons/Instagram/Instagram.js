import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./Instagram.css";
 
const Instagram = () =>{
return(
    <a href = "instagram.com">
<FontAwesomeIcon icon={faInstagram} size="4x" style={{"color":"black"}}/>
</a>
    )
}
 
export default Instagram;
