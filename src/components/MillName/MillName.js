/* eslint-disable react/prop-types */
import React from 'react';

import { 
  Link,
  BrowserRouter as Router
} from "react-router-dom";

import { MenuItem } from '@material-ui/core';
import './MillName.scss';

const MillName = (props) => {

  return(
    
    <MenuItem 
      key={props.Id} 
      onClick={props.click} 
    >
      <Router>
        <Link 
          to={props.millName}
        >
          <div 
            onClick={props.click} 
            className="mill-name"
          >
            {props.id}
            {props.value}
            {props.millName}
          </div>
        </Link>
      </Router>
    </MenuItem>
  );
}
 

export default MillName;


