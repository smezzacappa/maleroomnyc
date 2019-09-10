import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
 

const Twitter = () =>{
return(
    <a href="twitter.com">
<FontAwesomeIcon icon={faTwitter} size="4x" style={{"color":"black"}} />
</a>
    )
}
 
export default Twitter;
