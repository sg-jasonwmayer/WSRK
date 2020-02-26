/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../assets/logo-westrock.svg'

import './MillName.scss'

const MillName = (props) => {
   
  return(
    <div 
    className="mill-name"  
    >
      {props.millName}

    </div>
     );
    }
 

export default MillName;


