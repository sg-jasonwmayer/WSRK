/* eslint-disable react/prop-types */
import React from 'react';

import { 
  Link,
  BrowserRouter as Router
} from "react-router-dom";

import {
    AppBar
  } from '@material-ui/core';

import './UnauthorizedPage.scss';

import logo from '../../assets/westRockLogo.png';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';

const UnauthorizedPage = () => {

  return(
    <div className="root"> 
      <AppBar
      className="appBar-unauthorized"
      color="inherit"
      >
        <img
        src={logo}
        alt="West Rock Logo"
        className="logo"
        />
      </AppBar>

      <div className="message-container">

        <h4 className="title"><ReportProblemIcon color="error"/> Unauthorized Page</h4>
     
        <p>
          User Attempting to Access the LoadXpert Web Application is Not Authorized!!
          Please contact the HelpDesk at: (844) 978-7625 to request Access to the this Application
          or open a HelpDesk ticket at:
          <a href="https://wrk.service-now.com/sp?id=sc_cat_item&sys_id=6bb55d0d13a153402e1176666144b091"> 
          https://wrk.service-now.com/sp?id=sc_cat_item&sys_id=6bb55d0d13a153402e1176666144b091</a>
        </p>
      </div>


      
      <Router>
          <Link 
          // to={https://wrk.service-now.com/sp?id=sc_cat_item&sys_id=6bb55d0d13a153402e1176666144b091}
          >
          <div>
              
          </div>
          </Link>
      </Router>
    </div>
    
  );
}
 
export default UnauthorizedPage;


