import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./Instagram.css";
 
const Instagram = () =>{
return(
    <a href = "instagram.com">
<FontAwesomeIcon icon={faInstagram} size="6x" />
</a>
    )
}
 
export default Instagram;
