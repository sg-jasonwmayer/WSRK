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
      <img src={logo} />
    </div>
     );
    }
 

export default WRLogo;


