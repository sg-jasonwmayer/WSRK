/* eslint-disable react/prop-types */
import React from 'react';

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


