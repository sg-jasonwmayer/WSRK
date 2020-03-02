/* eslint-disable react/prop-types */
import React from 'react';
// import { MenuItem } from '@material-ui/core';
// import {
//   BrowserRouter as Router,
//   Link
// } from "react-router-dom";

import './MillName.scss';


const MillName = (props) => {
   
  return(
    <div>
    {/* <Router>
    <MenuItem>
    <Link to="" > */}
     <div 
       onClick={props.click}>
       {props.MillName}
     </div>
    {/* </Link>
    </MenuItem>
    </Router> */}
    </div>

     );
    }
 

export default MillName;


