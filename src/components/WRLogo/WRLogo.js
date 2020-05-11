/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../assets/logo-westrock.svg'

import './WRLogo.scss'

const WRLogo = (props) => {
   
  return(
    
    <div 
    {...props}
    className="wrlogo-container"  
    >
      <img 
        src={logo} 
        alt="WestRock Logo"
      />
    </div>
     );
    }
 

export default WRLogo;


