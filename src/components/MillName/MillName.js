/* eslint-disable react/prop-types */
import React from 'react';

import './MillName.scss';


const MillName = (props) => {
   
  return(
    <div 
      onClick={props.click}
      className="mill-name"
    >
       {props.Id}
       {props.MillName}
    </div>

     );
    }
 

export default MillName;


