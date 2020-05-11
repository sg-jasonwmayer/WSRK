/* eslint-disable no-unused-vars */
import React from 'react';

import {
    Switch,
    Route,
    BrowserRouter as Router
} from "react-router-dom";

import {
    Toolbar,
    Grid,
    IconButton 
} from '@material-ui/core';

import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import UserName from '../UserName';

import './RightContainer.scss';

const RightContainer = () => {

    return (
      
      <Grid
        item
        className='right-container'
      >
        <IconButton
          color="inherit"
          size="small"
        />
        <UserName />
        <IconButton
          color="inherit"
          size="small"
        >
          <NotificationsIcon 
            color="action" 
          />
        </IconButton>
        <IconButton
          color="inherit"
          size="small"
        >
          <EmailIcon color="action"/>
        </IconButton>
      </Grid>
    
    )
 }

export default RightContainer; 
