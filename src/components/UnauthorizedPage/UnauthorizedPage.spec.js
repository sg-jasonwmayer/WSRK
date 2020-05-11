/* eslint-disable react/prop-types */
import React from 'react';

import { 
  Link,
  BrowserRouter as Router
} from "react-router-dom";

import './UnauthorizedPage.scss';

const UnauthorizedPage = (props) => {

  return(
    
      <Router>
        <Link 
          to={props.millName}
        >
          <div>
          </div>
        </Link>
      </Router>
  );
}
 
export default UnauthorizedPage;


